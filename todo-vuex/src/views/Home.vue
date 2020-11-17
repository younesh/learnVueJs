<template>
    <div class="todoVuex-view">
      <h1>Todo-list avec VueX </h1>
      <div class="cards">
        nbr TODO !!   {{stateTodos.length}}
      </div>
<TodoList />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue'
import { mapState } from 'vuex'
export default {
  components: { TodoList },
  data () {
    return {
 
    }
  },
  methods: {
  },
  computed: {
    ...mapState(['stateTodos'])
  },
  watch: {
  },
  filter: {
  },
  created () {
    this.$store.dispatch('getTodos')
  }
}
</script>

<style>

</style>
