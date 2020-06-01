<template>
    <section class="test01 test">
        <h1> {{ appName }}</h1>
        <h3> test01 : qq tests type script ... </h3>
       <p> txtTest propos say : {{txtTest}} </p> 
       <button @click="typeTest"> test type TS</button> >> {{outType}} <br/>
       <button @click="typeNever"> typeNever </button>   <br/>


    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ConfigTS from "../config/ConfigTS";

@Component
export default class Test01 extends Vue {
  @Prop() private txtTest!: string; // les propos
  private outType = "defult"; // une variable ds Data ()
  private appName = ConfigTS.nameApp;
  
  public typeTest() : void {  // un méthode ds méthode : 
      
      type employer = {
          name : string;
          status : string;
          age : number;
          skills : string[];
      }


   const Sam: employer = {
       name: "samuel",
        status : "presta",
        age : 42,
        skills : [ "css", "html", "js"]
   }
   const dd = new Date();
    this.outType =  "il est " + dd.toTimeString();
   console.log(Sam); // {name: "samuel", status: "presta", age: 42, skills: Array(3)}
   console.log(Sam.skills)
      
  }

  public typeNever() : void {
      const  v01 = 122; // true | "du text" | 122
      console.log(this.testTypeVar(v01));
       

  }
  private testTypeVar (X : any)  {
      if (typeof X == "number") 
        { return "c'est un number  "; } 
      else if (typeof X == "string")
         { return "c 'est une chaine ... "; } 
      return this.Fail ("X n 'est ni string ni number !!! ");

  }
  private Fail ( msg : string) : never {
      throw new Error(msg);
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
