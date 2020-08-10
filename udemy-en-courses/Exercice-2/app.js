new Vue({
    el: '#exercise',
    data: {
        value: ''

    },
    methods: {
        alert01: function() {
            alert(" you cliked me !");
        },
        storeVal: function(event) {
            this.value = event.target.value;
        }
    }
});