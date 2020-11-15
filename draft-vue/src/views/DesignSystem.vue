<template>
  <div class="design-system">
    <h1>Design system ...</h1>
    <section class="test">
        <h2> Atoms </h2>
        <hr> 
        <div>
            <h3> boutons : </h3>
            <Button label="un btn basic ... !" class="button button--model2"/>
        </div>

        <hr>
        <div>
            <h3> images ..</h3>
                <Image  legandImg="c'est un label img" />
                <!--  srcImg="~@/assets/logo.png"  -->
        </div>
    </section>

    <section class="test">
        <h2> Molecules </h2>
        <hr> 
        <div>
            <h3> search bar :  </h3> 
            <!--      <img alt="Vue logo" src="@/assets/logo.png" />  -->
            <SearchBar placeHolderSB="this is place holder ... "  labelBtn =" this is label ... "  />
            <!-- imgSearch="~@/assets/logo.png"   -->
            
        </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Button from "@/components/designSystem/atoms/Button.vue";
import Image from "@/components/designSystem/atoms/Image.vue";
import SearchBar from "@/components/designSystem/molecules/SearchBar.vue";

@Component({
  components: {
      Button, Image, SearchBar
  }
})
export default class DesignSystem extends Vue {

  /* --- METHODES ---*/
   public doSimthing(): void {
      console.log('doSimthing methode !! '); 
   }

}
</script>


<style lang="scss" scoped>
  @import "@/components/designSystem/config/scss/_variables.scss";

 .button {
    background-color: $color-primary;
    border : none;
    padding: $gutter-half;
    border-radius: 5px; 
    color : white;
      &--model2 {
    background-color: white !important;
    color : $color-primary;
   border : solid 1px $color-primary;
  }
  }


</style> 