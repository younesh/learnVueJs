<template>
  <div class="tests">
    <h2>tests ... {{numberTests}}</h2>
    <InputNumber v-model="numberTests" :step=1 :min=5 />
    <BasicTestEs6 />
    <Test01 txtTest="new text test .... at 16:54 " />
    <Test02 />
    <Test03 />
    <Test04 />
    <WpAPI />

  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Test01 from "@/components/Test01.vue";
import Test02 from "@/components/Test02.vue";
import Test03 from "@/components/Test03.vue";
import Test04 from "@/components/Test04.vue";
import WpAPI from "@/components/WpAPI.vue";
import BasicTestEs6 from "@/components/BasicTestEs6.vue";
import InputNumber from "@/components/InputNumber.vue";

@Component({
  components: {
    Test01, Test02,Test03, Test04,  WpAPI, BasicTestEs6, InputNumber
  }
})
export default class Tests extends Vue {
   private numberTests = -1;
}
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