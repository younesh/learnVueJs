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
   private usersList = [] 
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


const getUsers = async function() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await response.json()
    console.log(json);
    return json
}
 
// Call the getUsers function and log the response
getUsers().then(response => console.log(response));
 // ---------------

 //  const ob = 

 } // created()

 /* ------------------------- */

 /* ------------------------- */

  mounted() {
      console.log(this.moduleName + ": LIFE-CYCLE / mounted  ");
     // console.log("RETOUR de giveHoureAfterXSecend : " ,  this.giveHoureAfterXSecend (2));

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

 public giveHoureAfterXSecend ( second : number) { 
   return setInterval( () => this.getHour, second * 1000 );
 }

 public getHour () : string {
    const date = new Date();
    // console.log("HEURE NOW ! :" + this.makeZero(date.getHours()) + ":" + this.makeZero(date.getMinutes()) + ":" + this.makeZero(date.getSeconds()));
    return "HEURE NOW ! :" + this.makeZero(date.getHours()) + ":" + this.makeZero(date.getMinutes()) + ":" + this.makeZero(date.getSeconds());
 }

public makeZero (nbr : number) :string {
 // console.log(`le nbr de chiffre ${nbr} :` , nbr.toString().length);
 if (nbr.toString().length < 2) {
     return "0" + nbr;
 }
 else
 {
     return "" + nbr;
 }
}

// faire es test des promise ...------------------------------------------------------------------------------------------------

}
</script>
