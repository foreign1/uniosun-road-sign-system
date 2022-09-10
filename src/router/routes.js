/* eslint-disable */
import HomeScreen from '@/components/HomeScreen'
import LanguageSelector from '@/components/LanguageSelector'
import ModeSelector from '@/components/ModeSelector'
import TextMode from '@/components/TextMode'
import VoiceMode from '@/components/VoiceMode'
import SearchResult from '@/components/SearchResult'
import DirectionMap from '@/components/DirectionMap'

export default [
  {
    name: 'home',
    path: '/',
    component: LanguageSelector
  },
  {
    path: '/homeScreen',
    component: HomeScreen
  },
  {
    name: 'language',
    path: '/language',
    component: LanguageSelector
  },
  {
    name: 'mode',
    path: '/mode',
    component: ModeSelector,
    props: true
  },
  {
    name: 'textMode',
    path: '/textMode',
    component: TextMode,
  },
  {
    name: 'voiceMode',
    path: '/voiceMode',
    component: VoiceMode,
  },
  {
    name: 'searchResult',
    path: '/searchResult',
    component: SearchResult,
    props: true
  },
  {
    name: 'direction',
    path: '/direction',
    component: DirectionMap,
  }
]