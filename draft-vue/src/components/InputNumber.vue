<!-- replace cpt-name and  CptName by new cpt name-->
<template>
  <div class="input-number">
      <button class="btn-primary" @click="handleInput(value - step)"> - </button>
      <input class="" :value="value" type="number" name="" id="" @input="handleInput(Number($event.target.value))" :disabled=isEditable> <!--   @input="handleInput($event.target.value)"   -->
      <button class="btn-primary" @click="handleInput(value + step)"> + </button>
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
export default class InputNumber extends Vue {
   /* --- PROPOS ---*/
   @Prop({default: 1, required: true}) readonly step: number;
   @Prop({default: 0}) readonly min: number;
   @Prop({default: 0}) readonly value: number;
   @Prop({default: false}) readonly isEditable: boolean;
  // @Prop({default: true}) readonly value: number;
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
  get format(): string {
      return  "<[ --- ]>";
  }

  /* --- METHODES ---*/
   public doSimthing(): void {
      console.log('doSimthing methode !! ')
   }

   public handleInput (newValue :number): void {
       if (newValue <= this.min) {
        this.$emit('input', this.min)
      } else {
        this.$emit('input', newValue)
      }
   }

}
</script>

<style lang="scss" scoped>
// D:\Projets-web-git\MyGitHub\learnVueJs\draft-vue\src\components\designSystem\config\scss\_variables.scss
 @import "@/components/designSystem/config/scss/_variables.scss";
 .input-number {
   color: red;
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
 }
</style>