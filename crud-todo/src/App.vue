<template>
  <div id="app">
    <h1>TODO</h1>
    <p>Completed todos {{ completedTodos }}</p>
    <TodoForm @onNewTodo="handleNewTodo" />
    <div style="margin-top: 20px">
      <TodoListItem
        v-for="todo in todoList"
        :key="todo.id"
        :todo="todo"
        @onToggleIsChecked="handleToggleIsChecked"
        @onToggleEditTodo="handleToggleEditTodo"
        @onUpdateTodo="handleUpdateTodo"
        @onRemoveTodo="handleRemoveTodo"
      />
    </div>
  </div>
</template>

<script>
import TodoForm from "./components/TodoForm.vue";
import TodoListItem from "./components/TodoListItem.vue";
export default {
  name: "App",
  data() {
    return {
      todoList: [],
    };
  },
  computed: {
    completedTodos() {
      return this.todoList.filter((todo) => todo.isChecked).length;
    },
  },
  components: {
    TodoForm,
    TodoListItem,
  },
  methods: {
    handleNewTodo(newTodo) {
      this.todoList.push(newTodo);
    },
    handleToggleIsChecked({ value, id }) {
      console.log(value, id);
      const todo = this.findTodo(id);
      todo.isChecked = value;
      console.log(todo);
    },
    handleToggleEditTodo(id) {
      const todo = this.findTodo(id);
      todo.editMode = !todo.editMode;
    },
    findTodo(id) {
      return this.todoList.find((todo) => todo.id === id);
    },
    handleUpdateTodo(updatedTodo) {
      this.todoList = this.todoList.map((todo) => {
        if (todo.id === updatedTodo.id) {
          return updatedTodo;
        }
        return todo;
      });
    },
    handleRemoveTodo(id) {
      this.todoList = this.todoList.filter((todo) => todo.id !== id);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
