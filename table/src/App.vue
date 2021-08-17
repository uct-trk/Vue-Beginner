<template>
  <div id="app">
    <nav>Vue Pagination Table</nav>
    <main>
      <Pagination
        v-if="tableData"
        :totalRecords="tableDataLength"
        :perPageOptions="perPageOptions"
        @change-page="pagination = $event"
      />
      <Table
        v-if="tableData"
        :theData="computedTableData"
        :config="config"
        :style="{ height: '500px' }"
      />
    </main>
  </div>
</template>

<script>
import Table from "./components/Table.vue";
import Pagination from "./components/Pagination.vue";

const perPageOptions = [20, 50, 100];

export default {
  name: "App",
  components: { Table, Pagination },

  data() {
    return {
      perPageOptions,
      tableData: undefined,
      pagination: { page: 1, perPage: perPageOptions[0] },
      config: [
        {
          key: "avatar",
          title: "Avatar",
          type: "image",
        },
        {
          key: "name",
          title: "Name",
          type: "text",
        },
        {
          key: "companyName",
          title: "Company",
          type: "text",
        },
        {
          key: "createdAt",
          title: "Signup Date",
          type: "date",
        },
      ],
    };
  },
  computed: {
    computedTableData() {
      if (!this.tableData) return [];
      else {
        const firstIndex = (this.pagination.page - 1) * this.pagination.perPage;
        const lastIndex = this.pagination.page * this.pagination.perPage;
        console.log(firstIndex, lastIndex)
        return this.tableData.slice(firstIndex, lastIndex);
      }
    },
    tableDataLength() {
      return this.tableData.length;
    },
  },
  mounted() {
    this.$axios
      .get("https://6119422f7b5c0f001759208d.mockapi.io/project123/users")
      .then((res) => {
        this.tableData = res.data;
        console.log(res.data);
        console.log("axios", this.tableData);
      });
  },
};
</script>

<style>
body {
  margin: 0;
}

main {
  margin: 20px;
}

nav {
  height: 60px;
  background: #222;
  font-size: 32px;
  color: white;
  display: flex;
  align-items: center;
  padding-left: 20px;
}
</style>
