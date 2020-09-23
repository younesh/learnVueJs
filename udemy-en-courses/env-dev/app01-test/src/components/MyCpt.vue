<template>
    <div class="MyCpt" :class="cls">
        <p>{{ msg }} : {{ status }}</p>
        <button @click="changeStatus"> change status </button>
    </div>
</template>

<script>
export default {
    name : 'MyCpt', // name -> @1
    props: {
        msg : String,
        cls : String
    },
    data() {
    return {
        status : "No critical !! "
    }
  },
    methods : {
    changeStatus : function () {
        this.status = "normal";
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/components/config/scss/_variables.scss";
 .MyCpt { 
     padding: $gutter-half;
     margin:  $gutter-half;
 //background-color: $color01;
     &--style01 {  // .MyCpt-style01 
          background-color: $color01;
     }
     &--style02 {  // .MyCpt-style02 
          background-color: $color02;
     }
     &--style03 {  // .MyCpt-style03
          background-color: $color03;
     } 
 }

     /*   .MyCpt--style01 {  // .MyCpt-style01 
          background-color: $color01;
     }
     .MyCpt--style02 {  // .MyCpt-style02 
          background-color: $color02;
     } */
</style>