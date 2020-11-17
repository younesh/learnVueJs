<template>
  <div class="todo-line">
      <h3 :class="{'is-completed' : todo.completed}" @click="changeSatusTodo"> 
        <input type="checkbox" name="" id="" :checked="todo.completed">
        {{todo.title}}
       </h3>
       <div class="d-flex justify-content-end">
          <button @click="changeSatusTodo" class="btn btn-primary"> edit </button>
          <button @click="deleteTodo" class="btn btn-danger ml-2"> delete </button>
      </div>
  </div>
</template>

<script>
export default {
    props: ['todo'],
    data(){
        return{

        }
    },
    methods : { 
      changeSatusTodo()  {
            this.$store.commit("UPDATE_TODOS", this.todo)
        },
        deleteTodo() {
           this.$store.dispatch("deleteTodo", this.todo );
        }

    },
    /*--- computed ----*/

    /* --- LIFE CYCLE ---*/ 
    created() {
        return 1;
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