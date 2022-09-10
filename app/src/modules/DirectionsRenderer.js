import { MapElementFactory } from "vue2-google-maps";
import { mapActions } from "vuex";

export default MapElementFactory({
  name: "directionsRenderer",

  ctr() {
    return window.google.maps.DirectionsRenderer;
  },

  events: [],

  mappedProps: {},

  props: {
    origin: { type: [Object, Array] },
    destination: { type: [Object, Array] },
    travelModeProp: { type: String },
  },

  data(){
    return {
      travelMode: 'DRIVING'
    }
  },
  mounted() {
    setTimeout(()=>{
      this.travelMode = this.travelModeProp
    }, 2000)
  },

  methods: {
    ...mapActions({
      setSteps: 'setDirectionSteps'
    })
  },

  afterCreate(directionsRenderer) {
    let directionsService = new window.google.maps.DirectionsService();

    this.$watch(
      () => [this.origin, this.destination, this.travelMode],
      () => {
        let { origin, destination, travelMode } = this;
        if (!origin || !destination || !travelMode) return;
        directionsService.route(
          {
            origin,
            destination,
            travelMode,
          },
          (response, status) => {
            if (status !== "OK") return;
            
            let dir = [];
            for (const i of response['routes'][0]['legs'][0]['steps']){
              const regex = /(<([^>]+)>)/ig
              const body = i['instructions']
              let result = body.replace(regex, '');
              result = result.replace(/([a-z])([A-Z])/g, '$1. $2')
              result = result.replace('&nbsp;', ' ')
              dir.push(result)
            }
            this.setSteps(dir)
            // eslint-disable-next-line no-debugger
            // debugger
            directionsRenderer.setDirections(response);
          }
        );
      }
    );
  },
});