<template>
  <div class="tests">
    <h2>tests ...</h2>
    <Test01 txtTest="new text test .... at 16:54 " />
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Test01 from "@/components/Test01.vue";
@Component({
  components: {
    Test01
  }
})
export default class Tests extends Vue {}
</script>
 
 <!-- OLD script js 
 
/* <script>
// @ is an alias to /src
import Test01 from "@/components/Test01.vue";

export default {
  name: "Tests",
  components: {
    Test01
  }
};
</script> */
 -->