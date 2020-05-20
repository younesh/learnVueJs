<template>
  <div class="todo-list">
      <h2> Todo list ... </h2>
      <TodoForm />
      <div v-for="todoItem in todosData" v-bind:key="todoItem.id">
            <TodoLine :todo="todoItem"/>
      </div>
      
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TodoLine from "@/components/molecules/TodoLine.vue";
import TodoForm from "@/components/molecules/TodoForm.vue";
import axios from "axios";

@Component({
    components: {
    TodoLine, TodoForm
  }
})
export default class TodoList extends Vue {

  /* --- DATA VARIABLES ---*/
 private todosData:  Array<object> = []


/* --- LIFE CYCLE ---*/
  created() {
    this.getTodosData();
      console.log("list : ",this.todosData);
    
 }
   mounted() {
     console.log("LIFE-CYCLE / mounted  ");
 
  }

 /* --- METHODES ---*/
   public getTodosData(): void {

        axios.get("http://localhost:7070/todos")
        .then(res => this.todosData = res.data) 
        .catch(err => console.log(err)) 
   }


}
</script>

<style lang="scss" scoped>
 $TL-maxW : 768px;
 .todo-list {
     max-width: $TL-maxW ;
 }
</style>