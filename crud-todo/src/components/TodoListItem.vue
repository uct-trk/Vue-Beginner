<template>
  <div>
    <div v-if="!editMode">
      <input type="checkbox" v-model="isChecked" />
      <span>
        <strong>{{ todo.title }}</strong>
      </span>
      <span style="margin: 0 20px">
        <strong>{{ todo.description }}</strong>
      </span>
      <button @click="toggleEditTodo">Edit</button>
      <button @click="removeTodo">Remove</button>
    </div>
    <div v-else>
      <TodoForm :todo="todo" isEditMode @onUpdateTodo="handleUpdateTodo"/>
    </div>
  </div>
</template>

<script>
import TodoForm from './TodoForm.vue'
export default {
  name: "TodoListItem",
  components: {
    TodoForm
  },
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },

  computed: {
    isChecked: {
      get() {
        return this.todo.isChecked;
      },
      set(value) {
        this.$emit("onToggleIsChecked", {
          value,
          id: this.todo.id,
        });
      },
    },

    editMode() {
      return this.todo.editMode;
    },
  },
  methods: {
    handleUpdateTodo(updatedTodo){
      this.$emit("onUpdateTodo", updatedTodo)
    },
    toggleIsChecked(event) {
      console.log(event.target.value);
    },
    toggleEditTodo() {
      this.$emit("onToggleEditTodo", this.todo.id);
    },
    removeTodo(){
      this.$emit("onRemoveTodo", this.todo.id);
    }
  },
};
</script>

<style></style>
