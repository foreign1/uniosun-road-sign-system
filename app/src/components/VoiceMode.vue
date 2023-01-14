<template>
  <div class="u__container">
      <RoadSign :language="language" />
      <NavigatorVue />
      <div class="u__container--medium">
          <p class="u__p--center">{{destinationQuery.question}}</p>
          <div class="u__layout--text--center u__layout--block--center">
            <p>{{ destination}}</p>  
            <div 
              class="p__voice-mode__image-container"
              @click="activateSpeechRecognition"
            >
              <img 
                src="@/assets/images/voice.gif" 
                alt="Start listening"
                class="p__voice-mode__recording-img"
              >
            </div>
          </div>
      </div>
  </div>
</template>

<script>
  import { locations } from '@/modules/locations'
  import { speechAnalyzer } from '@/modules/utils'
  import { mapGetters, mapActions, mapState } from 'vuex'
  import RoadSign from './RoadSign.vue';
  import NavigatorVue from './Navigator.vue'

  export default {
    name: 'VoiceMode',
    components: {
      RoadSign,
      NavigatorVue
    },

    data () {
        return {
            destination: '',
            interim_transcript: ''
        }
    },

    computed: {
    ...mapState({
        language: 'language',
    }),
      ...mapState({
        globalDestination: 'destination'
      }),
      ...mapGetters({
        destinationQuery: 'destinationQuery'
      }),
      ...mapActions({
        setDestination: 'setDestination'
      })
    },

    watch: {
      destination() {
        if (this.destination === undefined) return
        this.$store.dispatch('setDestination', {
            title: this.destination, ...locations[this.destination]
        })
        this.$router.push('searchResult').catch(() => {})
      }
    },

    methods: {
      activateSpeechRecognition() {
        let final_transcript = '';
        const speechRecognition = new webkitSpeechRecognition();
        speechRecognition.continuous = false;
        speechRecognition.interimResults = true;
        speechRecognition.lang = "en-US";
        speechRecognition.onError = e => console.error();

        speechRecognition.onresult = (event) => {
            this.interim_transcript = "";
            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    final_transcript += event.results[i][0].transcript;
                } else {
                    this.interim_transcript += event.results[i][0].transcript;
                }
            }
            this.destination = speechAnalyzer(final_transcript, locations);
        }

        speechRecognition.start()
      }
    }
  }
</script>