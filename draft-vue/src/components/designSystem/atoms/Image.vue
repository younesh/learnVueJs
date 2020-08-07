<!-- replace cpt-name and  CptName by new cpt name-->
<template>
  <div class="image">
      <!-- <img :src="srcImg" alt=""> -->
      <div>
      <p> {{ srcImg }} </p>
     <strong>{{ legandImg }}</strong>
      </div>



  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
// import ChildCpt from "../../ChildCpt.vue"; /* to import a child component */

@Component({
    components: {
    // ChildCpt
  }
})
export default class Image extends Vue {
   /* --- PROPOS ---*/
   //  @Prop() readonly props01!: string;
    @Prop() readonly legandImg!: string;
    @Prop() readonly srcImg!: string;
  /* --- DATA VARIABLES ---*/

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
  /* get format(): string {
    return  "<[" + this.var01 + "]>"; 
  } */

  /* --- METHODES ---*/
   public doSimthing(): void {
      console.log('doSimthing methode !! ')
   }

}
</script>

<style lang="scss" scoped>
    @import "@/components/designSystem/config/scss/_variables.scss";
</style>