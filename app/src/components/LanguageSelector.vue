<template>
  <div class="u__container">
    <NavigatorVue />
    <RoadSign />
    <div class="u__container--medium">
      <div class="u__margin--bottom--md">
        <p class="u__p--center">Choose the language of interaction</p>
        <p class="u__p--center">Yan èdè fún ìjíròrò</p>
        <p class="u__p--center">Zaɓi harshen hulɗa</p>
        <p class="u__p--center">Họrọ asụsụ mmekọrịta</p>
      </div>
        <div class="button-container">
            <button @click="handleLangChange('English')" class="u__button--large">English</button>
            <button @click="handleLangChange('Yoruba')" class="u__button--large">Yorùbá</button>
            <button @click="handleLangChange('Hausa')" class="u__button--large">Hausa</button>
            <button @click="handleLangChange('Igbo')" class="u__button--large">Igbo</button>
        </div>
   </div>
  </div>
</template>
<script>
import RoadSign from './RoadSign.vue';
import NavigatorVue from './Navigator.vue'
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'

export default {
    name: 'LanguageSelector',
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
        handleLangChange (language) {
          this.$store.dispatch('setLanguage', language)
          this.$router.push('mode')
        },
        ...mapMutations({
          setLanguage: 'setLanguage'
        }),
    }
}
</script>
<!-- 4328 -->