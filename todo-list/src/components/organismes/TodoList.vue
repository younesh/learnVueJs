<template>
  <div class="todo-list">
      <h2> Todo list ... </h2>
      <TodoForm />
      <div v-for="todoItem in todosData" v-bind:key="todoItem.id">
            <TodoLine :todo="todoItem" @deleteTodoEmit="deleteOnTodo"/>
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
 private ApiUrl  = "http://localhost:5151/todos/" 
/* --- LIFE CYCLE ---*/
  created() {
    this.getTodosData();
      console.log("list : ",this.todosData);
         console.log("todoList cpt/ LIFE-CYCLE / created  ");
 }
   mounted() {
     console.log("todoList cpt/ LIFE-CYCLE / mounted  ");
 
  }

 /* --- METHODES ---*/
   public getTodosData(): void {

        axios.get(this.ApiUrl)
        .then(res => this.todosData = res.data) 
        .catch(err => console.log(err)) 
   }
 
    public deleteOnTodo (todo : any): void {
      console.log("link api rest ... " + this.ApiUrl);
      axios.delete(this.ApiUrl + todo.id)
            .then(()=>{
              // when remote delete success, then we can detete the front todo ! 
              console.log("todosData before deleting  ", this.todosData);
              this.todosData = this.todosData.filter(itemTodo => itemTodo.id !== todo.id )
              console.log("todosData after  deleting ", this.todosData);
            })
    }

}
</script>

<style lang="scss" scoped>
 $TL-maxW : 768px;
 .todo-list {
     max-width: $TL-maxW ;
 }
</style>