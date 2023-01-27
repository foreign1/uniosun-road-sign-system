<template>
  <div>
    <GmapMap :zoom="15" :center="center" style="width: 100%; height: 100%">
      <DirectionsRenderer
        :travelMode="travelMode"
        :origin="startLocation"
        :destination="endLocation"
      />
    </GmapMap>
  </div>
</template>
<script>
import DirectionsRenderer from '@/modules/DirectionsRenderer'

export default {
  name: 'DirectionsMap',
  components: {
    DirectionsRenderer
  },
  data () {
    return {
      travelMode: "Transit",
      startLocation: {
        lat: 7.76056574544222, 
        lng: 4.602776248679072
      },
      endLocation: {
        lat: 7.7630171485185295, 
        lng: 4.594002847243056
      },
      center: {
        lat: 7.76056574544222, 
        lng: 4.602776248679072
      }
    }
  }
}
</script>