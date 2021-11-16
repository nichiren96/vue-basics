const app = Vue.createApp({
    data() {
        return {
            showPlayers: true,
            name: 'Lionel Messi',
            club: 'PSG',
            age: 34
        }
    },

    methods: {
        toggleShowPlayers() {
            this.showPlayers = !this.showPlayers
        }
    }
})

app.mount('#app')