<!-- <template>
    <div class="p__modeSelector--container">
        <div class="p__modeSelector--inner-card">
            <div>
                <p>Select mode of interaction</p>
                <p>Zaɓi yanayin hulɗa</p>
                <p>Họrọ ụdị mmekọrịta</p>
                <p>Yan ipo ibaraenisepo</p>
            </div>
            <form class="p__modeSelector--form">
                <div>
                    <button><span class="span">Text</span> <Keyboard class="but" /></button>
                </div>
                <div>
                    <button><span class="span">Voice</span> <MicrophoneIcon class="but" /></button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import MicrophoneIcon from 'vue-material-design-icons/Microphone.vue'
import Keyboard from 'vue-material-design-icons/Keyboard.vue'
export default {
    name: "ModeSelector",
    components: {
        MicrophoneIcon,
        Keyboard
    }
}
</script> -->

<template>
    <div class="u__container">
        <RoadSign :language="this.language" />
        <NavigatorVue />
        <div class="u__container--medium">
            <div class="u__margin--bottom--md">
                <p class="u__p--center">{{ interaction.title }}</p>
            </div>
            <div class="button-container">
                <button @click="handleModeSelection('text')" class="u__button--large">{{ interaction.text }}</button>
                <button @click="handleModeSelection('voice')" class="u__button--large">{{ interaction.voice}}</button>
            </div>
        </div>
    </div>
</template>
<script>
import RoadSign from './RoadSign.vue';
import NavigatorVue from './Navigator.vue'
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'ModeSelector',
  components: {
    RoadSign,
    NavigatorVue
  },
  computed: {
    ...mapState({
        language: 'language',
    }),
    ...mapGetters({
        interaction: 'interaction'
    })
  },
  methods: {
    handleModeSelection (mode) {
        this.$store.dispatch('setMode', mode)
        mode === 'text' ? this.$router.push('textMode') : this.$router.push('voiceMode')
    },
    ...mapActions({
        setMode: 'setMode'
    })
}
}
</script>