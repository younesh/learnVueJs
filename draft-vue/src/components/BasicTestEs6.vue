<!-- replace cpt-name and  CptName by new cpt name-->
<template>
  <section class="test basic-test-es6">
      <h3> Les test basics du ES 6 </h3>
     <hr />
     <h4> test des promise ... </h4>

  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import axios from "axios";
// import ChildCpt from "../../ChildCpt.vue"; /* to import a child component */

@Component({
    components: {
    // ChildCpt
  }
})
export default class BasicTestEs6 extends Vue {
   /* --- PROPOS ---*/
   @Prop() readonly props01!: string;
  /* --- DATA VARIABLES ---*/
   private allPosts : Array<object> = [];
   private moduleName  = "BasicTestEs6 ";
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
   console.log(this.moduleName + " : LIFE-CYCLE / created  ");
 }

  mounted() {
     console.log(this.moduleName + ": LIFE-CYCLE / mounted  ");
      this.getHour ();
      this.makeZero(7);
  }

  beforeUpdate() {
     console.log(this.moduleName + ": LIFE-CYCLE / beforeUpdate  ");
  }

  /*----- COMPUTED PROPERTIES -----*/
  // get format(): string {  return  "<[" + this.var01 + "]>"; }

  /* --- METHODES ---*/
   public doSimthing(): void {
      console.log('doSimthing methode !! ')

   }

 public getHour () {
    const date = new Date();
    console.log(this.makeZero(date.getHours()) + ":" + this.makeZero(date.getMinutes()) + ":" + this.makeZero(date.getSeconds()));
 }

public makeZero (nbr : number) {
 console.log(`le nbr de chiffre ${nbr} :` , nbr.toString().length);
 if (nbr.toString().length < 2) {
     return "0" + nbr;
 }
 else
 {
     return nbr;
 }
}

// faire es test des promise ...------------------------------------------------------------------------------------------------

}
</script>

<style lang="scss" scoped>
 //@import "@/components/config/scss/_variables.scss";

</style>