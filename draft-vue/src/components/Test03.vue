<!-- replace cpt-name and  CptName by new cpt name-->
<template>
  <section class="test-03 test">
      <h2> TEst 03 : les computed , watch on TypeScript !! globalCounter >> {{globalCounter}} </h2>
      <p>
          en va faire une var incrmentable , un computed double instantatné
      </p>
      <input type="text" v-model="counter">
      <button class="" @click="counter++"> + </button>
      <p>   computed double de counter :   {{ Double }}</p>
      <p>   watch double de counter :   {{ onCounterChanged() }}</p>
  

   <button @click="increment"> store ( + )</button>
   <button @click="decrement"> store ( - ) </button>
  </section>
</template>

<script lang="ts">
import { Component, Watch, Prop, Vue } from "vue-property-decorator";
// import ChildCpt from "../../ChildCpt.vue"; /* to import a child component */

@Component({
    components: {
    // ChildCpt
  }
})
export default class Test03 extends Vue {
   /* --- PROPOS ---*/
   @Prop() readonly props01!: string;
  /* --- DATA VARIABLES ---*/
   private var01 = "welcome this cpt TEST03";
   private counter = 0;
   /* private datalist: Array<object> = [
      {
        name: 'dupon',
        age: '50'
      },
      {
        name: 'John',
        age: '45'
      }
    ]
    */ 
/* --- LIFE CYCLE ---*/
 created() {
   console.log("LIFE-CYCLE / created  ");
 }

  mounted() {
     console.log("LIFE-CYCLE / mounted  " + this.var01);
  }

  beforeUpdate() {
     console.log("LIFE-CYCLE / beforeUpdate  ");
  }

  /*----- COMPUTED PROPERTIES -----*/
  get format(): string {
    return  "<[" + this.var01 + "]>"; 
  }

   get Double(): number  {
       return this.counter*2;
   }

    get globalCounter() {
     return this.$store.state.globalCounter;
   }
  /*----- watch PROPERTIES -----*/
   @Watch('counter')
  onCounterChanged() : string {
    // Do stuff with the watcher here.
    if ( this.counter % 4 == 0 ) {

        return this.counter + "Oh! c'ets un multible de 4";
    } else {
         return this.counter + ", mmm no c'est pas un multiple de 4 ";
    }
  }
  /* --- METHODES ---*/
// 
   public increment(): void {
       this.$store.commit("increment");
       console.log("increment " + new Date());
   }
    public decrement(): void {
       this.$store.commit("decrement");
       console.log("increment " + new Date());
   }

   public doSimthing(): void {
      console.log('doSimthing methode !! ')
   }

}
</script>

<style lang="scss" scoped>
// @import "@/components/config/scss/_variables.scss";
 .test-03 {

 }
</style>