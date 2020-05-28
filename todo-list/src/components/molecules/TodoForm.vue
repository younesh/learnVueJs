<template>
  <div class="todo-form">
      <input type="text" name="" id="" v-model="taskTitle">
      <button @click="addTodo" class="btn btn-success"> Ajouter !! </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TodoForm extends Vue {
   /* --- DATA VARIABLES ---*/
  private taskTitle = "";


    /* --- METHODES ---*/
   public addTodo(): void {
      this.$emit("addEmitTodo", this.taskTitle);
       this.taskTitle = "";
   }
}
</script>

<style lang="scss" scoped>
 @import "@/components/config/scss/_variables.scss";
 .todo-form {
     display: flex;
    padding:$gutter-half  0 ;
    input {
      flex : 1;
      margin-right: $gutter-half;
    }
 }
</style>