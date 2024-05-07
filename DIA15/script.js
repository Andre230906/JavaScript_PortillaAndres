new Vue({
    el: 'main',
    mounted() {
        this.cargarPersona();
    },

    data: {
        persona: []
    },

    methods: {
        cargarPersona() {
            axios.get('https://randomuser.me/api/')
                .then((user) => {
                    this.persona = user.data.results;
                });
        }
    }


});