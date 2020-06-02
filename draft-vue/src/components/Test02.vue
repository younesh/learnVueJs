<!-- replace cpt-name and  CptName by new cpt name-->
<template>
  <section class="test02 test">
      <h2> Test02 : a usal algo tomanipulating data ... </h2>
      <article>
          <h4> red fruits : </h4>
          <ul>
              <li v-for="(itemFruit,index) in redFruits" :key="index">
                  {{itemFruit}}
              </li>
          </ul>
          <h4> yellow fruits : </h4>
          <ul>
              <li v-for="(itemFruit,index) in yellowFruits" :key="index">
                  {{itemFruit}}
              </li>
          </ul>
          <div> 
            delete one : 
            <select name="" id="" v-model="yellowFruitToDelete">
                <option value="0">(vide)</option>
                <option v-for="(itemFruit,index) in yellowFruits" :key="index" :value="itemFruit">{{itemFruit}}</option>
            </select>
            <button class="btn btn-secondary" @click="deleteYellowFruit"> delete one ! </button>
          </div>
        <div>
            Add on 
            <input type="text" name="" id="" v-model="yellowFruitToAdd">
              <button class="btn btn-secondary" @click="addYellowFruit"> Add one ! </button>
              <button class="btn btn-secondary" @click="findIn"> look if in ! </button>

        </div>
      </article>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
// import ChildCpt from "../../ChildCpt.vue"; /* to import a child component */

@Component({
    components: {
    // ChildCpt
  }
})
export default class Test02 extends Vue {
   /* --- PROPOS ---*/
   @Prop() readonly props01!: string;
  /* --- DATA VARIABLES ---*/
    private redFruits = ["raspberry", "strawberry", "Cherry"];
    private yellowFruits = ["banana", "mango", "apple"];
    private yellowFruitToDelete = "";
    private yellowFruitToAdd = "";

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
    // created() { console.log("LIFE-CYCLE / created  ");}
    // mounted() { console.log("LIFE-CYCLE / mounted  ");}
    // beforeUpdate() { console.log("LIFE-CYCLE / beforeUpdate  ");}


/*----- COMPUTED PROPERTIES -----*/
   // get format(): string { return  "<[" + this.var01 + "]>";}

/*------ METHODES ----------*/
   public doSimthing(): void {
      console.log('doSimthing methode !! ')
   }
   public deleteYellowFruit() : void {
       // this.todos = this.todos.filter(todo => todo.id !== id);
      //1) es6 technique delete : .filter()
         console.log("deleting by (filter) : " + this.yellowFruitToDelete );
         this.yellowFruits = this.yellowFruits.filter( item => item != this.yellowFruitToDelete );

          //2) es5 technique delete : .splice
          
          //3) es5 technique delete :  (for in , tmpArray)
            /* console.log("deleting by (for in , tmpArray)   : " + this.yellowFruitToDelete );
            const tmpArray : Array<string> = [];
            const value = this.yellowFruitToDelete;
            this.yellowFruits.forEach((element ) => {
                if (element != value ) tmpArray.push(element);
            });
            this.yellowFruits = tmpArray; */
   }

   public addYellowFruit() : void {
       // 1)  es6 technique addeting : spreding 
          // console.log("spreding " + this.yellowFruitToAdd);
          // this.yellowFruits = [...this.yellowFruits, this.yellowFruitToAdd]; 

       // 2)  es5 technique addeting : pushing
       console.log("pushing "+this.yellowFruitToAdd);
       this.yellowFruits.push(this.yellowFruitToAdd);


       this.yellowFruitToAdd = ""; 
   }

   public findIn () : void {
        /*
       const Pos = this.yellowFruits.indexOf(this.yellowFruitToAdd);
       if(Pos>=0){
           console.log(`le fruit ${this.yellowFruitToAdd} existe en position ${Pos}`);
       }
       else {
             console.log(`Non!, le fruit ${this.yellowFruitToAdd} est introuvable !! `);
       } 
       */ 

       // par la methode include 
       if(this.yellowFruits.includes(this.yellowFruitToAdd)){
           console.log(`le fruit ${this.yellowFruitToAdd} existe [includes methode] `);
       }
       else {
             console.log(`Non!, le fruit ${this.yellowFruitToAdd} est introuvable !!  [includes methode] `);
       }

   }



}
</script>

<style lang="scss" scoped>
 // @import "@/components/config/scss/_variables.scss";
 .cpt-name {



 }
</style>