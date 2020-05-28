<template>
  <div class="todo-view">
     <p> NP : pour lancer le serveur json pour simuler l'api rest , lancer cette commande </p>
     <code>
       json-server --watch db.json --port 5151
     </code>
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