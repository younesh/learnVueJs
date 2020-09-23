<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <template v-for="item in 3">
         
        <div :key="item" v-show="(false)">  {{ clsItem = "MyCpt--style0" +  item }} </div>  <!--  c 'est une bidouill perso pour pouvoire affecter un idex de for dynamiquement au non de class ...  -->
        <my-alias-cpt  :msg="clsItem" :cls="clsItem" :key="item"/>
    </template>
  </div>
</template>

<script>
import MyCpt from './components/MyCpt'  
export default {
  name: 'App',
  components: {
              "my-alias-cpt" : MyCpt  // en peut creer un alias inclure notre cpt fils !! 
  }

}
</script>

<style lang="scss">
@import "@/components/config/scss/_variables.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
