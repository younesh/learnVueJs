<template>
  <div class="todoVuex-view">
      <h1> {{title}} -> {{age}} </h1>
      <div class="cards">
        nbr TODO !!   {{stateTodos.length}}
      </div>
<TodoList />
  </div>
</template>

<script>
import TodoList from "@/components/VuexTodo/TodoList.vue"
import { mapState, mapGetters } from "vuex";
export default {
    components : {TodoList },
    data() {
        return {
            title : "todolist test vuex",
            age : 35
        }
    },
    methods : {

    },
    computed: {
        ...mapState(['stateTodos']),
    },
    watch: {

    },
    filter :{

    },
    created() {
      this.$store.dispatch("getTodos");
    }
    

}
</script>

<style lang="scss">
    .todoVuex-view {
        background-color: rgba(orange,.3);
    }
</style>