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


  /*  les interfaces  */
   public interfaceTest () : void {

       interface Personne {
           readonly name : string; // readonly , va interdire de modifer la valeur apres son initialisation ... 
           color : string;
           age? : number; // le ? permet de rendre la proprieté optionnel ( si en la met pas ds l'instance en auras pas d'ereur .... )
       }

       const p1 : Personne = {
         name : "max",
         color : "red",
        // age : 37  // pas d'errer si on enlève 'age' car elle est optionnel
       }

      // p1.name = "ahmed"; // ts declanchera une error car 'name' est en readonly!

       console.log('interfaceTest >> ', p1);
       
   }

   /* heritage test  */
   
   public heritageTest () {
        interface Person {
           readonly name : string;
           sex : string;
           age : number;
       }

      interface Employe extends Person {
          function : string
          service : string
          isResponsable : boolean
      }

       const p1 : Employe = {
         name : "maî",
         sex : "female",
         age : 37,
         function : "secritary",
         service : "Direction",
         isResponsable : false
       }

       const p2 : Employe = {
         name : "Yanis",
         sex : "Male",
         age : 27,
         function : "ingenier",
         service : "DSI",
         isResponsable : true
       }

       console.log('heritageTest  (1) >> ', p1);
       console.log('heritageTest (2) >> ', p2);
   }


   /* 14 : interface des fonctions test ..  */ 

   public interfaceFctTest () {

    // en declare une interface de fonction, ( param, retour .... ) 
    interface Hello {
       (name : string, age? : number) : void 
    }
    const sayHello : Hello = (name, age) => {
        console.log(` sayHello >>  hello Mr ${name} , you have ${age} year Old .... `);
    }
    const upperCaseName : Hello = name => name.toUpperCase();
    sayHello("yassine", 30); // OUTPUT :  sayHello >>  hello Mr yassine , you have 30 year Old .... 
    console.log(`bonjour mr ${upperCaseName("ahmed")}`); // OUTPUT :  bonjour mr AHMED

   }

       /* 15 : associatif array : ...  */
    public associatifCollectionTest () : void {

        /* cas des tableau à element illimité */
        interface Reportory extends Array<number> { // le "extends Array<number>" nous permet de beneficier des methode des array ( pop, push, slice... )
            [index : number] : number // le  "[index : number]"  permet d'avoir le tableau illimité en taille !! 
        }
        const rp : Reportory = [0,2,4,6,8];
        rp.push(10); 
        console.log('associatifCollectionTest array (element illimité)  >>',rp);


        /* cas des objet à proprieté illimité :  */
        interface ObjectI {
            [index : string] : any;
            // ds nos instantce en peut définir un nombre illimité de "propety : value", et le any est important pour couvrer tous les types possible
            
            sayHello : { (name :string ) : void }; 
            // les {} vont rendre les méthodes declarée obligatoires ds les instant ayant ce contrat s'interface ! 
        }

        const myObj : ObjectI = {
            title : "sami",
            isResponsable : true,
            age : 55,
            sayHello (name) {
                console.log(` hallo mr ${this.title}`);
                
            }

        }
        console.log("associatifCollectionTest Objet (proprieté illimité)");
        
        console.log("title : ", myObj.title);
        myObj.sayHello("farid");
        
        
    }




   /* --- LIFE CYCLE ---*/
 created() {
   console.log("LIFE-CYCLE / created  ");
   // this.interfaceTest();
   //  this.heritageTest();
   //  this.interfaceFctTest(); 
   this.associatifCollectionTest();

 }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
