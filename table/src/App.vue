<template>
  <div id="app">
    <Table v-if="tableDate" :tableDate="tableDate" :config="config" :style="{height: '600px'}"/>
  </div>
</template>

<script>
import Table from "./components/Table.vue";
export default {
  name: "App",
  components: { Table },
  data() {
    return {
      tableDate: undefined,
      config: [
        {
          key: "avatar",
          title: "Avatar",
          type: "image"
        },
        {
          key: "name",
          title: "Name",
          type: "text"
        },
        {
          key: "companyName",
          title: "Company",
          type: "text"
        },
        {
          key: "createdAt",
          title: "Signup Date",
          type: "date"
        },
      ],
    };
  },
  mounted() {
    this.$axios
      .get("https://6119422f7b5c0f001759208d.mockapi.io/project123/users")
      .then((res) => {
        this.tableDate = res.data;
      });
  },
};
</script>

<style>
</style>
