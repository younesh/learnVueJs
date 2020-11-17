<template>
    <div class="todo-list">
      <h2> Todo list ... </h2>
      <TodoForm />
     <div v-for="todoItem in stateTodos" :key="todoItem.id">
      <TodoLine :todo="todoItem"/> <!-- !!! attention au ':' pour le dynamisme todo  -->
     </div>
  </div>
</template>

<script>
import TodoLine from "@/components/VuexTodo/TodoLine.vue";
import TodoForm from "@/components/VuexTodo/TodoForm.vue";
import { mapState, mapGetters } from "vuex";
export default {
    components: {TodoLine, TodoForm},
    data(){
        return{
         dataTodos : []
        }
    },
    methods : {

    },
    /*--- computed ----*/
     computed : {
         ...mapState(['stateTodos']),
         ...mapGetters(['getTodoById'])
         }, 
    /* --- LIFE CYCLE ---*/ 
 
    mounted() {
         this.dataTodos = this.stateTodos;
    },
    Updated () { 
        this.dataTodos = this.stateTodos;
    }
}
</script>

<style>
</style>