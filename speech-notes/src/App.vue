<template>
  <div id="#app">
    <app-header />
    <div id="appContainer">
      <speech
        :addNote="addNote"
        :deleteNote="deleteNote"
        :removeAllNotes="removeAllNotes"
      />
      <not-item v-for="note in notes" :key="note.id" :noteItem="note" />
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import Speech from "@/components/Speech.vue";
import NotItem from "./components/NotItem.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    NotItem,
    Speech,
  },
  data() {
    return {
      notes: [],
      nnotes: [
        { id: 1, note: "note 1" },
        { id: 2, note: "note 2" },
        { id: 3, note: "note 3" },
        { id: 4, note: "note 4" },
      ],
    };
  },
  methods: {
    addNote(note) {
      this.notes.push({
        id: this.notes.length + 1,
        note: note,
      });
    },
    deleteNote(id) {
      this.notes.splice(this.notes.findIndex((n) => n.id == id),1);
    },
    removeAllNotes() {
      this.notes = [];
    },
  },
};
</script>

<style></style>
