const app = Vue.createApp({
    data() {
        return {
            url: 'https://www.google.com',
            showPlayers: true,
            players: [
                { name:'Lionel Messi', club: 'PSG', img: 'assets/1.jpg' },
                { name:'Memphis Depay', club: 'FC Barcelona', img: 'assets/2.png' },
                { name:'Cristiano Ronaldo', club: 'Man United', img: 'assets/3.jpg'},
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