<template>
  <div class="pg__hs">
    <div class="pg__hs--wrapper">
      <div class="inner-div">
      <div class="mic2">
        <MicrophoneIcon class="mic" :size="50" />
      </div>
      <span class="welcome-text">Welcome to Uniosun Road Sign System</span>
      <span class="welcome-text">Say <q>Hello RSS</q> to interact with the system</span>
      <span class="welcome-text">So <q>Bawoni</q> lati bami soro</span>
    </div>
    </div>
  </div>
</template>
<script>
import MenuIcon from 'vue-material-design-icons/Menu.vue'
import MicrophoneIcon from 'vue-material-design-icons/Microphone.vue'

export default {
  name: 'HomeScreen',
  components: {
    MenuIcon,
    MicrophoneIcon
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

