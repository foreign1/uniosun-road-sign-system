<template>
  <div id="app">
    <router-view></router-view>
    <!-- <language-selector v-if="language === ''" @languageSelected="setUserLanguage" :refresh='refresh'/>
    <mode-selector v-else-if="mode === ''" :interaction="interaction" @modeSelected="setMode" :refresh='refresh' />
    <text-mode v-else-if="mode === 'text' && destination === ''" :destinationQuery="destinationQuery" @destinationSet="setDestination" :refresh='refresh'/>
    <search-result v-else :destination="destination" :refresh='refresh' /> -->
    <!-- <router-view/> -->
  </div>
</template>
<script>
import '../dist/style.css'
import { eventBus } from './main'
export default {
  name: 'App',
  data () {
    return {
      language: '',
      mode: '',
      destination: ''
    }
  },
  created () {
    eventBus.$on('languageSelected', (language) => {
      this.language = language
      this.$router.push({name: 'mode', params: {interaction: this.interaction}})
    }),
    eventBus.$on('modeSelected',  mode => {
      this.mode = mode
      this.$router.push({name: 'textMode', params: {destinationQuery: this.destinationQuery}})
    }),
    eventBus.$on('setDestination', destination => {
      this.destination = destination
      this.$router.push({name: 'searchResult', params: {destination: this.destination}})
    })
  },
  computed: {
    interaction () {
      if (this.language === 'English') return {title: 'Choose the modality of interaction', text: 'Text', voice: 'Voice'}
      else if (this.language === 'Yoruba') return {title: 'Yan ọna ibaraenisepo', text: 'ọrọ', voice: 'Ohun'}
      else if (this.language === 'Hausa') return {title: 'Zaɓi tsarin hulɗa', text: 'Rubutu', voice: 'Murya'}
      else return {title: 'Họrọ usoro mmekọrịta', text: 'Ederede', voice: 'Olu'}
    },
    destinationQuery () {
      if (this.language === 'English') {
        return {
          question: 'Where would you like to go?',
          search: 'Search'
        }
      } else if (this.language === 'Yoruba') {
        return {
          question: 'Nibo ni iwọ yoo fẹ lati lọ?',
          search: 'Wa'
        }
      } else if (this.language === 'Hausa') {
        return {
          question: 'Ina kuke son zuwa?',
          search: 'Bincika'
        }
      } else {
        return {
          question: 'Ebee ka ọ ga-amasị gị ịga?',
          search: 'Chọọ'
        }
      }
    }
  },
  methods: {
    setUserLanguage (language) {
      this.language = language
    },
    setMode (mode) {
      this.mode = mode
    },
    setDestination (destination) {
      this.destination = destination
      console.log(this.destination)
    },
    refresh () {
      this.$forceUpdate()
    }
  }
}
</script>
