<!-- replace cpt-name and  CptName by new cpt name-->
<template>
  <div class="search-bar">
      <input type="text" name="" :placeholder="placeHolderSB">
      <button> {{ labelBtn }} </button>
      <p> {{ imgSearch }}</p>
        <div>
          <figure>
              <img :src="require(imgSearch)" alt="20200804 13:06">
              <img src="imgSearch" alt="">
              <figcaption> {{ labelBtn }}  </figcaption>
          </figure>
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
export default class SearchBar extends Vue {
   /* --- PROPOS ---*/
   @Prop() readonly placeHolderSB!: string;
   @Prop() readonly labelBtn!: string;
   @Prop() readonly imgSearch!: string;
  /* --- DATA VARIABLES ---*/
   // private var01: string = "welcome to my app"
  
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
   public pathImg(path :string): void {
      // return require(path);
   }

}
</script>

<style lang="scss" scoped>
// @import "@/components/config/scss/_variables.scss";
 .cpt-name {



 }
</style>