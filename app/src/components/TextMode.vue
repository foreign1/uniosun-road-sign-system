<template>
    <div class="u__container">
        <RoadSign :language="language" />
        <NavigatorVue />
        <div class="u__container--medium">
            <p class="u__p--center">{{destinationQuery.question}}</p>
            <div class="u__layout--text--center u__layout--block--center">
                <input type="text" v-model="destination" class="c__text-mode--input" list="destinationList" />
                <datalist id="destinationList">
                    <option v-for="(dest, idx) in destinationList" :key="idx" :value="dest"></option>
                </datalist>
                <button class="u__button--large" @click="handleSubmit">{{destinationQuery.search}}</button>
            </div>
        </div>
    </div>
</template>
<script>
import { locations } from '../modules/locations.js'
import { mapGetters, mapActions, mapState } from 'vuex'
import RoadSign from './RoadSign.vue';
import NavigatorVue from './Navigator.vue'
export default {
    name: 'TextMode',
    components: {
        RoadSign,
        NavigatorVue
    },
    data () {
        return {
            destination: ''
        }
    },
    computed: {
            destinationList () {
                return Object.keys(locations)
            },
            ...mapState({
                language: 'language',
                globalDestination: 'destination'
            }),
            ...mapGetters({
                destinationQuery: 'destinationQuery'
            }),
            ...mapActions({
                setDestination: 'setDestination'
            })
    },
    methods: {
        handleSubmit () {
            this.$store.dispatch('setDestination', {
                title: this.destination, ...locations[this.destination]
            })
            this.$router.push('searchResult')
        }
    }
}
</script>
