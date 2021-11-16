const app = Vue.createApp({
    data() {
        return {
            url: 'https://www.google.com',
            showPlayers: true,
            players: [
                { name:'Lionel Messi', club: 'PSG', img: 'assets/1.jpg', wonUcl: true },
                { name:'Memphis Depay', club: 'FC Barcelona', img: 'assets/2.png', wonUcl: false },
                { name:'Cristiano Ronaldo', club: 'Man United', img: 'assets/3.jpg', wonUcl: true},
            ]
        }
    },

    methods: {
        toggleShowPlayers() {
            this.showPlayers = !this.showPlayers
        },

        toggleUclWinner(player) {
            player.wonUcl = !player.wonUcl
        }

    }
})

app.mount('#app')