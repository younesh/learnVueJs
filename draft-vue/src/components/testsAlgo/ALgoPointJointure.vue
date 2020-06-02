<template>
    <section class="algo-point-jointure test">
        <h2> algo point de jointure ... </h2>
        <p>
         <img alt="Vue logo" src="@/assets/algo-jointure-nbres.png" />
        </p>
        <div>
        <button class="btn btn-success mr-2" @click="ALgoPointJointure(47,74)">
           ALgoPointJointure(47,74)
        </button>   
        <button class="btn btn-success mr-2" @click="ALgoPointJointure(34,43)">
           ALgoPointJointure(34,43)
        </button>
        <button class="btn btn-success mr-2" @click="ALgoPointJointure(12,18)">
           ALgoPointJointure(12,18)
        </button>
        <p> NP : exemple de  nbr ayant des points de jointures : </p>
        <ul>
            <li> 47 ;  74 >> ( 620 ) </li>
            <li> 34 ;  43 >> ( 214 ) </li>
        </ul>
     <pre class=""><code> <!-- &lt; -->
      ALgoPointJointure (s1="20", s2="50") {
        let result = "";
        const limit = 200000;
      if (s1 > 0 && s2 > 0) {
        while (s1!=s2 && s1  &lt; limit && s2  &lt; limit  ) {
                // s1 
                s1=s1 + this.sumChiffreDuNbr(s1);
                s2=s2 + this.sumChiffreDuNbr(s2);
        }
        if (s1 == s2 ) result = "LOL jointure trouvée !! : " + s1;
        else result = `:( Pas de jointure avant : ${limit}`;
      }
      console.log(result);
      return result;
    },
    sumChiffreDuNbr (nbr) {
      const chaine = nbr.toString();
      let sum = 0;
      for (let i = 0; i &lt; chaine.length; i++ ) {
        sum += Number(chaine[i]);
      }
      return sum; 
    }

           </code></pre> 
        </div>
    </section>
</template>

<script>
export default {
  name: 'ALgoPointJointure',
  data() {
    return {
        var01 : ''
    }
 },
 methods : {
      ALgoPointJointure (s1="20", s2="50") {
        let result = "";
        const limit = 200000;
      if (s1 > 0 && s2 > 0) {
        while (s1!=s2 && s1 < limit && s2 < limit  ) {
                // s1 
                s1=s1 + this.sumChiffreDuNbr(s1);
                s2=s2 + this.sumChiffreDuNbr(s2);
        }
        if (s1 == s2 ) result = "LOL jointure trouvée !! : " + s1;
        else result = `:( Pas de jointure avant : ${limit}`;
      }
      console.log(result);
      return result;
    },
    sumChiffreDuNbr (nbr) {
      const chaine = nbr.toString();
      let sum = 0;
      for (let i = 0; i < chaine.length; i++ ) {
        sum += Number(chaine[i]);
      }
      return sum; 
    }

       /*
       ALgoPointJointure () {
      let s1 = Number(this.APJ_s1);
      let s2 = Number(this.APJ_s2);
      if (s1 > 0 && s2 > 0) {
        while (s1!=s2 && s1 < 20000 ) {
                // s1 
                s1=s1 + this.sumChiffreDuNbr(s1);
                s2=s2 + this.sumChiffreDuNbr(s2);
                console.log("S1 :" + s1);
                console.log("S2 :" + s2);
        }
        if (s1 == s2 ) this.APJ_result = s1;
        else this.APJ_result = "pas de jointure avant 20000 "; 
      }
    },
    sumChiffreDuNbr (nbr) {
      let chaine = nbr.toString();
      let sum = 0;
      for (let i = 0; i < chaine.length; i++ ) {
        sum += Number(chaine[i]);
      }
      return sum; 
    }
    */ 
 },

  /*------- LIFE CYCLE ----------- */
 //  created() {}
}
</script>

<style>

</style>