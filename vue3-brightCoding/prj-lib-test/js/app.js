// initialiser l'instance vue avec un obj { template , data , ..... }
const app = Vue.createApp({
   //  template : "<h3>test yns vue 3 ... {{ var01 }}</h3>",
   data() {
       return ({
           title : "un titre qui vien de data !! ",
           projectName : "test vueJs 3 ... ",
           count : 0
       })
   },
    methods : {
        counter : function (incrementer) {
            this.count += incrementer;
        },
        increment() {
            this.counter(1);
        }
    }
});
// attacher l'instance de vue avec le dom #app !
app.mount("#app");