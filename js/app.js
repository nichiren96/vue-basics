const app = Vue.createApp({
    data() {
        return {
            showPlayers: true,
            name: 'Lionel Messi',
            club: 'PSG',
            age: 34,
            x: 0,
            y: 0
        }
    },

    methods: {
        toggleShowPlayers() {
            this.showPlayers = !this.showPlayers
        },

        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },

        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount('#app')