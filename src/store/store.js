import Vue from 'vue'
import Vuex from 'vuex'
import { SET_DESTINATION, SET_LANGUAGE, SET_MODE, SET_DIRECTION_STEPS} from './mutation-types'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    language: 'manderine',
    mode: 'light',
    destination: '',
    directionSteps:[],
    count: 0
  },
  getters: {
    interaction: state => {
      if (state.language === 'English') return {title: 'Choose the modality of interaction', text: 'Text', voice: 'Voice'}
      else if (state.language === 'Yoruba') return {title: 'Yan ìlànà ìjíròrò', text: 'Ọ̀rọ̀ kíkọsílẹ̀', voice: 'Ọ̀rọ̀ ẹnu'}
      else if (state.language === 'Hausa') return {title: 'Zaɓi tsarin hulɗa', text: 'Rubutu', voice: 'Murya'}
      else return {title: 'Họrọ usoro mmekọrịta', text: 'Ederede', voice: 'Olu'}
    },
    destinationQuery: state => {
      if (state.language === 'English') {
        return {
          question: 'Where would you like to go?',
          search: 'Search'
        }
      } else if (state.language === 'Yoruba') {
        return {
          question: 'Níbo ni o wu ó láti lọ?',
          search: 'Wá a'
        }
      } else if (state.language === 'Hausa') {
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
  mutations: {
    increment (state, payload) {
      state.count += payload
    },

    [SET_LANGUAGE] (state, language) {
      state.language = language
    },
    [SET_MODE] (state, mode) {
      state.mode = mode
    },
    [SET_DESTINATION] (state, destination) {
      state.destination = destination
    },
    [SET_DIRECTION_STEPS] (state, steps) {
      state.directionSteps = steps
    }
  },
  actions: {
    [SET_LANGUAGE] (context, language) {
      context.commit('setLanguage', language)
    },
    [SET_MODE] (context, mode) {
      context.commit('setMode', mode)
    },
    [SET_DESTINATION] (context, destination) {
      context.commit('setDestination', destination)
    },
    [SET_DIRECTION_STEPS] (context, steps) {
      context.commit('setDirectionSteps', steps)
    }
  }
})