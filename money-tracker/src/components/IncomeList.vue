<template>
  <div class="income-list">
    <IncomeItem
      v-for="data in state.income"
      :key="data.id"
      :income="data"
      @remove-item="removeItem"
    />
  </div>
</template>

<script>
// component
import IncomeItem from "./IncomeItem.vue";

export default {
  props: {
    state: Object,
  },
  setup(props, { emit }) {
    function removeItem(id) {
      emit("remove-item", id);
    }
    return {
      IncomeItem,
      removeItem,
    };
  },
  components: {
    IncomeItem,
  },
};
</script>

<style scoped>
.income-list {
  margin-top: 30px;
  padding: 15px;
}
</style>
