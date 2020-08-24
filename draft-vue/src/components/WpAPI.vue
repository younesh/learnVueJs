<!-- replace cpt-name and  CptName by new cpt name-->
<template>
  <section class="test wp-api">
      <input type="text" name="" id="" v-model="searchInput" placeholder="KeysWord ...  ">  ==> result found {{ filteredList.length }}
      <div v-for="postItem in filteredList" :key="postItem.id" class="test">
          <h3 v-html="postItem.title.rendered"> </h3>
          <div v-html="postItem.excerpt.rendered"></div>
      </div>
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
export default class CptName extends Vue {
   /* --- PROPOS ---*/
   @Prop() readonly props01!: string;
  /* --- DATA VARIABLES ---*/
   private allPosts : Array<object> = [];
   private searchInput = "";
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
     console.log(" allPosts length : " , this.allPosts);
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
            //.then ( (rep : any) => rep.json())
            .then ( (res : any)=> {
                
                // this.allPosts = res.data;
                 // this.allPosts = res.data; 
                 res.data.map( (item : any) => {
                  //   console.log( " item : ",  item);
                    this.allPosts.push (item);
                 })
                }  )
            .catch(err => console.log(err))
   }

   
  /*----- COMPUTED PROPERTIES -----*/
  get filteredList(): any {
    // faut filtrer le tab des post global ( this.allPosts ) a ceux egale au chemps ( this.searchInput )
    return  this.allPosts.filter((post : any) => {
        // post.title.rendered = post.title.rendered.toLowerCase().replaceAll(this.searchInput.toLowerCase(), "<mark>" + this.searchInput + "</mark>" );
        console.log("filteredList ... ");
        
        return ( post.title.rendered.toLowerCase().includes(this.searchInput.toLowerCase()) || post.excerpt.rendered.toLowerCase().includes(this.searchInput.toLowerCase()) ) 
    }); 
  }


}
</script>

<style lang="scss" scoped>
 //@import "@/components/config/scss/_variables.scss";

</style>