const app = Vue.createApp({
    data() {
        return {
            name: 'Lionel Messi',
            club: 'PSG',
            age: 34
        }
    },

    methods: {
        changeName(playerName){
            this.name = playerName
        }
    }
})

app.mount('#app')