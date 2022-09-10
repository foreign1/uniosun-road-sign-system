<template>
  <div class="c__search-result">
    <NavigatorVue />
    <section class="c__search-result__section">
      <div :class="{'c__road-event': true, 'u__visibility--hide': roadSign.isVisible}">
        <div class="event-text">
          {{ activeRoadEvent.displayName }} 
        </div>
        <div class="event-img">  
          <img :src="imagePath" :alt="activeRoadEvent.displayName" />
        </div>
      </div>
      <!-- <DestinationMap /> -->
      
      <GmapMap :zoom="15" :center="center" style="width: 100%; height: 100%;">
        <DirectionsRenderer
          :travelModeProp="travelMode"
          :origin="startLocation"
          :destination="endLocation"
        />
      </GmapMap>
     
     <div class="dest-img">
        <img :src="destination.img" :alt="destination.title">
      </div>
    </section>
    <aside class="c__search-result__aside">
      <h3 class="title">{{directionHeader}}</h3>
      <p class="direction-text">
        <span 
          v-for="(text, index) in translatedDirections"
          :key=index
          class="directions" >
          {{ text }}
        </span>

      </p>
    </aside>
  </div>
</template>
<script>
import NavigatorVue from './Navigator.vue'
import DirectionMap from './DirectionMap.vue'
import DirectionsRenderer from '@/modules/DirectionsRenderer'
import { speakDestination } from '@/modules/tts'
import { mapState } from 'vuex'
import axios from 'axios'

export default {
    name: "SearchResult",
    components: {
      NavigatorVue,
      DirectionMap,
      DirectionsRenderer
    },
    data() {
        return {
          translatedDirections: [],
          directionHeader: 'Direction',
          startLocation: {
            lat: 7.761023104761555,
            lng: 4.60182950919733
          },
          center: {
            lat: 7.7610728446789174, 
            lng: 4.601527733709513
          },
          travelMode: 'WALKING',
          roadSign: {
            active: 0,
            eventList: [
            {src: "@/assets/images/speed-bump.png", displayName: "Bumps ahead", title: "speed-bump.png"},
            {src: "@/assets/images/u-turn.png", displayName: "U-Turn ahead", title: "u-turn.png"},
            {src: "@/assets/images/zebra-crossing.png", displayName: "Zebra Crossing", title: "zebra-crossing.png"}
           ],
           isVisible: true
          }
        };
    },

    computed: {
      endLocation () {
        return {
          lat: this.destination.lat,
          lng: this.destination.lng
        }
      },
      activeRoadEvent () {
        return {...this.roadSign.eventList[this.roadSign.active]}
      },
      imagePath () {
        return require(`@/assets/images/${this.activeRoadEvent.title}`);
      },
      ...mapState({
        mode: 'mode',
        language: 'language',
        destination: 'destination',
        directionSteps: 'directionSteps'
      })
    },

    watch: {
      async directionSteps () {
        await axios.post('http://localhost:3000/api/translate', {
          text: [this.directionHeader, ...this.directionSteps],
          target: this.language.slice(0, 2).toLowerCase()
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          this.directionHeader = response.data[0]
          this.translatedDirections = response.data.splice(1)
        })
        .catch(error => {
          console.log('error: ', error)
        })
      },
      translatedDirections() {
        if (this.mode === 'voice') {
          speakDestination(this.translatedDirections)
        }
      }
    },

    methods: {
      async updateActiveEvent () {
        setInterval(()=>{
          this.roadSign.isVisible = true
          this.roadSign.active = Math.floor(Math.random()*3)
          this.updateVisibility()
        }, (Math.floor(Math.random()*7)+5)*1000)
      },
      async updateVisibility () {
        setTimeout(()=> {
          this.roadSign.isVisible = false
        }, 2000)
      },
      async translateRoadsigns () {
        await axios.post('http://localhost:3000/api/translate', {
          text: ['Bumps ahead', 'U-Turn ahead', 'Zebra Crossing ahead'],
          target: this.language.slice(0, 2).toLowerCase()
        })
        .then(response => {
         for( let i = 0; i < response.data.length; i++) {
          this.roadSign['eventList'][i]['displayName'] = response.data[i]
         }
        })
      }
    },

    created() {
      this.translateRoadsigns()
      this.updateActiveEvent()
    }
}
</script>
