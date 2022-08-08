<template>
  <div class="c__search-result">
    <NavigatorVue />
    <div class="c__road-event--container">
      <img :src="activeRoadEvent.src" :alt="activeRoadEvent.displayName">
      <div class="road-event">
        {{ activeRoadEvent.displayName }} 
        <span>
          <img :src="activeRoadEvent.src" :alt="activeRoadEvent.displayName"> 
        </span>
      </div>
    </div>
    <section class="c__search-result__section">
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
import { mapState } from 'vuex';

export default {
    name: "SearchResult",
    components: {
      NavigatorVue
    },
    data() {
        return {
          active: 0,
          roadEvent: [
            {name: 'speed-bump', src: '@/assets/images/speed-bump.png', displayName: 'Bumps ahead'},
            {name: 'u-turn', src: '@/assets/images/u-turn.png', displayName: 'U-Turn ahead'},
            {name: 'zebra-crossing', src: '@/assets/images/zebra-crossing.png', displayName: 'Zebra Crossing'}
          ]
        };
    },
    computed: {
      activeRoadEvent () {
        let ret = {...this.roadEvent[this.active]}
        console.log('ret is : ', ret.src)
        return ret
      },
      ...mapState({
        destination: 'destination'
      })
    },
    methods: {
      async updateActiveEvent () {
        setInterval(()=>{
          this.active = Math.floor(Math.random()*3)
        }, [2000])
      }
    },
    created() {
      this.updateActiveEvent()
    }
}
</script>
