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
export default {
  name: 'App',
}
</script>
