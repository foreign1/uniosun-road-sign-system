<template>
  <div :class="{'c__road-event-init': true, 'u__visibility--hide': isVisible}">
    <div class="event-text">
      {{ activeRoadEvent.displayName }} 
    </div>
    <div class="event-img">  
      <img :src="eventImagePath" :alt="activeRoadEvent.displayName" />
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: "RoadSign",
  props: {
    language: {
      type: String,
      default: "English"
    }
  },
  data() {
    return {
      active: 0,
      eventList: [
        {src: "@/assets/images/speed-bump.png", displayName: "Bumps ahead", title: "speed-bump.png"},
        {src: "@/assets/images/u-turn.png", displayName: "U-Turn ahead", title: "u-turn.png"},
        {src: "@/assets/images/zebra-crossing.png", displayName: "Zebra Crossing", title: "zebra-crossing.png"}
      ],
      isVisible: true
    }
  },
  computed: {
    activeRoadEvent () {
      return {...this.eventList[this.active]}
    },
    eventImagePath () {
      return require(`@/assets/images/${this.activeRoadEvent.title}`);
    }
  },
  methods: {
    async translateRoadsigns () {
      await axios.post('http://localhost:3000/api/translate', {
        text: ['Bumps ahead', 'U-Turn ahead', 'Zebra Crossing ahead'],
        target: this.language.slice(0, 2).toLowerCase()
      })
      .then(response => {
        for( let i = 0; i < response.data.length; i++) {
        this.eventList[i]['displayName'] = response.data[i]
        }
      })
    }
  },
  created() {
    setInterval(()=>{
      this.isVisible = !this.isVisible;
      this.active = Math.floor(Math.random() * 3);
    }, 3000);
    this.translateRoadsigns();
  }
}
</script>