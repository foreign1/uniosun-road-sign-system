<template>
    <div class="c__navigator">
      <span @click="home" :class="{'route-span': true, 'u__visibility--hide': isHome}"><HomeIcon /></span>
      <span @click="prev" :class="{'route-span': true, 'u__visibility--hide': isHome}"><ArrowLeftIcon /></span>
    </div>
</template>
<script>
import HomeIcon from 'vue-material-design-icons/Home.vue'
import ArrowLeftIcon from 'vue-material-design-icons/ArrowLeft.vue';
export default {
  name: 'Navigator',
  components: {HomeIcon, ArrowLeftIcon},
  props: {
    refresh: Function,
  },
  computed: {
    isHome () {
      return this.$router.currentRoute.name === 'home' ? true : false
    }
  },
  methods: {
    home () {
      if(this.$router.currentRoute.name !== 'home') {
        this.$router.push({name: 'home' })
      }
    },
    prev () {
      if(this.$router.currentRoute.name !== 'home') {
        this.$router.go(-1)
      }
    }
  }
}
</script>
