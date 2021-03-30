<template>
    <div class="todo-list">
      <h2> Todo list by vueX  </h2>
      <TodoForm />
     <div v-for="todoItem in stateTodos" :key="todoItem.id">
        <transition name="fade">
          <TodoLine :todo="todoItem"/> <!-- !!! attention au ':' pour le dynamisme todo  -->
        </transition>
     </div>
  </div>
</template>

<script>
import TodoLine from '@/components/TodoLine.vue'
import TodoForm from '@/components/TodoForm.vue'
import { mapState, mapGetters } from 'vuex'
export default {
  components: { TodoLine, TodoForm },
  data () {
    return {
      dataTodos: []
    }
  },
  methods: {
  },
  /* --- computed ---- */
  computed: {
    ...mapState(['stateTodos']),
    ...mapGetters(['getTodoById'])
  },
  /* --- LIFE CYCLE --- */

  mounted () {
    this.dataTodos = this.stateTodos
  },
  Updated () {
    this.dataTodos = this.stateTodos
  }
}
</script>

<style lang="scss">
@import "~@/assets/scss/_variables.scss";
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
