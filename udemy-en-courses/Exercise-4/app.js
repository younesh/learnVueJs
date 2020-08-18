new Vue({
    el: '#exercise',
    data: {
        userClass: "bgBlue",
        enbableClass: true,
        color: 'pink',
        width: 100,
        height: 50,
        userStyle: '',
        progressBarValue: 0,
    },
    methods: {
        startEffect: function() {
            let divEffect = document.getElementById("effect");
            let cpt = 0;
            setInterval(function() {
                cpt++;
                if (cpt % 2 == 0) {
                    divEffect.className = "highlight";
                } else {
                    divEffect.className = "shrink";
                }
            }, 1000);
        },
        startProgressBar: function() {
            console.log("startProgressBar");
            vm = this
            setInterval(function() {
                if (vm.progressBarValue < 96) {
                    vm.progressBarValue += 5;
                }
            }, 250);
        }

    },
    computed: {
        myStyle: function() {
            return {
                backgroundColor: this.color,
                width: this.width + "px",
                height: this.height + "px"
            }
        }

    }
});