<!-- replace cpt-name and  CptName by new cpt name-->
<template>
  <section class="test-03 test">
      <h2>Test 04 : vueX stateManagement .... globalCounter >> {{globalCounter}}</h2>
      <div>
        <p> etape 01 : </p>
        <p> etape 02 : </p>
        <p> etape 03 : </p>
        <p> etape 03 : </p>
      </div>
  
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
export default class Test04 extends Vue {
   /* --- PROPOS ---*/
   @Prop() readonly props01!: string;
  /* --- DATA VARIABLES ---*/
   private var01 = "welcome this cpt TEST04";
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