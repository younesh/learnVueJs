new Vue({
    el: '#app',
    data: {
        title: "new game monster ... !!! ",
        lifePlayer: 100,
        lifeMonster: 100,
        gameOver: true,
        attackPoint: 10,
        superAttackPoint: 20,
        healPoint: 10,
        logActions: []
    },
    methods: {
        attackPlayer: function() {
            const domagePlayer = this.attackPoint - Math.floor(Math.random() * 5);
            this.lifeMonster -= domagePlayer;
            this.logActions.push("player hit monster for " + domagePlayer);
        },
        superAttackPlayer: function() {
            const domagePlayer = this.superAttackPoint - Math.floor(Math.random() * 5);
            this.lifeMonster -= domagePlayer;
            this.logActions.push("player hit monster for " + domagePlayer);
        },
        healPlayer: function() {
            const healing = this.healPoint - Math.floor(Math.random() * 5);
            this.lifePlayer += healing;
            this.logActions.push("player heal him self ! :  " + healing);
        }
    },
    computed: {
        widthBarrePlayer: function() {
            return {
                width: this.lifePlayer + "%",
            }
        },
        widthBarreMonster: function() {
            return {
                width: this.lifeMonster + "%",
            }
        }
    },

    watch: {

        lifeMonster: function(v) {
            const domageMonster = this.attackPoint - Math.floor(Math.random() * 5);
            if (!this.gameOver) {
                this.lifePlayer -= domageMonster;
                this.logActions.push("monster hit player for " + domageMonster);
                if (this.lifeMonster <= 0) {
                    // this.lifeMonster = 0;

                    if (confirm(" you win !, monster loose !!")) {
                        this.gameOver = true;
                    }
                }
            }
        },

        gameOver: function(v) {
            if (v) {
                this.lifePlayer = 100;
                this.lifeMonster = 100;
                this.logActions = [];
            }
        }
    }
});