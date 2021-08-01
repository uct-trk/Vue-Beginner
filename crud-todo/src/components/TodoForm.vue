<template>
  <form @submit.prevent="submit">
    <input required type="text" placeholder="title" v-model="title" />
    <input
      required
      type="text"
      placeholder="description"
      v-model="description"
    />
    <button type="submit">{{ isEditMode ? "Save" : "Add" }}</button>
  </form>
</template>

<script>
export default {
  name: "TodoForm",
  data() {
    return {
      title: "",
      description: "",
    };
  },

  props: {
    todo: {
      type: Object,
      default: () => ({}),
    },
    isEditMode: {
      type: Boolean,
      default: false,
    },
  },

  created() {
    if (this.isEditMode) {
      this.title = this.todo.title;
      this.description = this.todo.description;
      return;
    }
  },
  methods: {
    submit() {
      if (this.isEditMode) {
        this.emitUpdateTodo();
        return;
      }
      this.emitNewTodo();
    },

    emitUpdateTodo() {
      this.$emit("onUpdateTodo", {
        title: this.title,
        description: this.description,
        id: this.todo.id,
        isChecked: this.todo.isChecked,
        editMode: false,
      });
    },
    emitNewTodo() {
      this.$emit("onNewTodo", {
        title: this.title,
        description: this.description,
        id: `todo_${Math.random() * 10000}`,
        isChecked: false,
        editMode: false,
      });

      this.title = ""
      this.description = ""
    },
  },
};
</script>

<style></style>
