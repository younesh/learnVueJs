new Vue({
    el: '#exercise',
    data: {
        value: 0
    },
    computed: {
        result: function() {
            if (this.value == 37) {
                return "Done !";
            } else {
                return "not there yet";
            }
        }
    },
    watch: {
        value: function(v) {
            vm = this;

            setTimeout(function() {
                vm.value = 0;
                console.log("initializing !! ");
                return;
            }, 5000);
        }
    }
});