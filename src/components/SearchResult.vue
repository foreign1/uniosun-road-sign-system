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
      <div class="dest-img">
        <img :src="destination.img" :alt="destination.title">
      </div>
    </section>
    <aside class="c__search-result__aside">
      <h3 class="title">Direction</h3>
      <p class="direction-text">
        {{ destination.direction }}
      </p>
    </aside>
  </div>
</template>
<script>
import NavigatorVue from './Navigator.vue'
import { mapState } from 'vuex'
// import { translateText } from '../modules/translation'

export default {
    name: "SearchResult",
    components: {
      NavigatorVue
    },
    data() {
        return {
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
      activeRoadEvent () {
        return {...this.roadSign.eventList[this.roadSign.active]}
      },
      imagePath () {
        return require(`@/assets/images/${this.activeRoadEvent.title}`);
      },
      ...mapState({
        destination: 'destination'
      })
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
      }
    },
    created() {
      this.updateActiveEvent()
      // translateText('How are you doing today?', 'yo')
    },
    updated() {
      // this.updateVisibility()
      }
}
</script>
