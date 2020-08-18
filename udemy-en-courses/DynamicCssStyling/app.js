new Vue({
    el: '#DynamicStyling',
    data: {
        attachedRed: false,
        attachedGreen: false,
        attachedBlue: false,
        color: 'pink',
        width: 100,
        height: 33
    },
    computed: {
        blueClass: function() {
            return {
                blue: this.attachedBlue,
                red: !this.attachedBlue,
            }
        },
        myStyle: function() {
            return {
                backgroundColor: this.color,
                width: this.width + "px",
                height: this.height + "px"
            }
        }
    },
    watch: {}
});