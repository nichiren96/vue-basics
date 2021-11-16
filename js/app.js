const app = Vue.createApp({
    data() {
        return {
            showPlayers: true,
            players: [
                { name:'Lionel Messi', club: 'PSG' },
                { name:'Memphis Depay', club: 'FC Barcelona' },
                { name:'Cristiano Ronaldo', club: 'Man United' },
            ]
        }
    },

    methods: {
        toggleShowPlayers() {
            this.showPlayers = !this.showPlayers
        },

    }
})

app.mount('#app')