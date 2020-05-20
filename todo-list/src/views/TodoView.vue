<template>
  <div class="todo-view">
    <h1> Todo list view </h1>
      <TodoList />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TodoList from "../components/organismes/TodoList.vue"

@Component({
    components: {
    TodoList
  }
})
export default class TodoView extends Vue {
 
}
</script>