<!-- replace cpt-name and  CptName by new cpt name-->
<template>
  <button>
    <i>icone : </i> <span>{{ label }}</span>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
// import ChildCpt from "../../ChildCpt.vue"; /* to import a child component */

@Component({
    components: {
    // ChildCpt
  }
})
export default class Button extends Vue {
   /* --- PROPOS ---*/
   @Prop() readonly label!: string;
   //@Prop() readonly classSpe!: string;
  /* --- DATA VARIABLES ---*/
    private var02 = "";
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
     console.log("LIFE-CYCLE / mounted  ");
  }

  beforeUpdate() {
     console.log("LIFE-CYCLE / beforeUpdate  ");
  }
  
  /*----- COMPUTED PROPERTIES -----*/
  /* get classBtn(): string {
    return  "button " + this.classSpe; 
  } */ 

  /* --- METHODES ---*/
   public doSimthing(): void {
      console.log('doSimthing methode !! ')
   }

}
</script>

<style lang="scss" scoped>
  /*@import "@/components/designSystem/config/scss/_variables.scss";

 .button {
    background-color: $color-primary;
    border : none;
    padding: $gutter-half;
    border-radius: 5px; 
    color : white;
  }

  .button--model2 {
    background-color: white  ;
    color : $color-primary;
    border : solid 1px $color-primary;
  } */
</style>