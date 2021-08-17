<template>
  <section class="awesome-table">
    <table>
      <thead>
        <tr>
          <th v-for="(obj, index) in config" :key="index">{{ obj.title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in theData" :key="index">
          <td v-for="(obj, index) in config" :key="index">
            <span v-if="obj.type === 'text'">{{ row[obj.key] }}</span>
            <span v-if="obj.type === 'date'">{{
              new Date(row[obj.key]).toLocaleDateString()
            }}</span>
            <figure v-if="obj.type === 'image'">
              <img :src="row[obj.key]" />
            </figure>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: "Table",
  props: ["theData", "config"],
};
</script>

<style scoped>
.awesome-table {
  border: 1px solid #999;
  border-radius: 4px;
  color: #333;
  overflow: auto;
  margin-top: 30px;
  margin-left: 20px;
  margin-right: 20px;
}
table {
  border-collapse: collapse;
  width: 100%;
}
th {
  padding: 10px 5px;
  position: sticky;
  top: 0;
  text-align: left;
  background: #f1f1f1;
  border-bottom: 1px solid #999;
}
td {
  padding: 5px 5px;
  text-align: left;
}
figure {
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-end: 0;
  margin-inline-start: 0;
}
img {
  height: 60px;
  border-radius: 100%;
  overflow: hidden;
  border: 1px solid #bbb;
}
</style>
