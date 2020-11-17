<template>
  <div class="todo-form">
      <input type="text" name="" id="" v-model="taskTitle">
      <button @click="addOneTodo" class="btn btn-success"> Ajouter !! </button>
  </div>
</template>

<script>
export default {
    data(){
        return{
         taskTitle : "",
        }
    },
    methods : {
        addOneTodo() {
            const neOneTodo = {
                title : this.taskTitle ,
                completed: false
            }
            if (this.taskTitle.trim()!="")
             {
                this.$store.dispatch("addTodo", neOneTodo );
                this.taskTitle = "";
                }
        }
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