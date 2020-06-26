<!-- replace cpt-name and  CptName by new cpt name-->
<template>
  <div class="wp-api">
      <div v-for="postItem in allPosts" :key="postItem.id" class="test">
          <h3 v-html="postItem.title.rendered"> </h3>
          <div v-html="postItem.excerpt.rendered"></div>
      </div>
  </div>
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
export default class CptName extends Vue {
   /* --- PROPOS ---*/
   @Prop() readonly props01!: string;
  /* --- DATA VARIABLES ---*/
   private allPosts : Array<object> = [];
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
   this.getPosts();
 }

  mounted() {
     console.log("LIFE-CYCLE / mounted  ");
  }

  beforeUpdate() {
     console.log("LIFE-CYCLE / beforeUpdate  ");
  }

  /*----- COMPUTED PROPERTIES -----*/
  // get format(): string {  return  "<[" + this.var01 + "]>"; }

  /* --- METHODES ---*/
   public doSimthing(): void {
      console.log('doSimthing methode !! ')
   }

   public getPosts() { 
       axios.get("http://fariso.net/fr/wp-json/wp/v2/posts")
            .then ( res=> this.allPosts = res.data )
            .catch(err => console.log(err))
   }

}
</script>

<style lang="scss" scoped>
 //@import "@/components/config/scss/_variables.scss";

</style>