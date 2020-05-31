<template>
  <div class="todo-line">
      <h3 :class="{'is-completed' : todo.completed}" @click="changeSatusTodo"> 
        <input type="checkbox" name="" id=""  :checked="todo.completed">
        {{todo.title}}
       </h3>
       <div class="d-flex justify-content-end">
          <button class="btn btn-primary"> edit </button>
          <button @click="deleteTodo" class="btn btn-danger ml-2"> delete </button>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TodoLine extends Vue {
   /* --- PROPOS ---*/
   @Prop() readonly todo!: any;

   /* --- DATA VARIABLES ---*/
  // private completedTodo: string = "welcome to my app"

  /* --- METHODES ---*/
     public deleteTodo(): void {
      // console.log("did you just click me now man !!! , am a delete button !! ");
       this.$emit("deleteTodoEmit", this.todo);
     }

     public changeSatusTodo() : void {
        this.todo.completed = !this.todo.completed;
       this.$emit("changeSatusTodoEmit", this.todo);
     } 
}
</script>
<style lang="scss" scoped>
   @import "@/components/config/scss/_variables.scss";
 .todo-line {
     border : $border-default;
     padding: $gutter-half;
     margin-bottom:$gutter-half ;
 }

.is-completed {
    text-decoration: line-through;
}
</style>