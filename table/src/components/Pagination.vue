<template>
  <section>
    <p class="pagination-container">
      <i class="fas fa-angle-double-left" @click="changePage(0)"></i>
      <i class="fas fa-angle-left" @click="changePage(-1)"></i>
      <span class="inner-pagination-content">
        <span class="pagination-seperator">|</span>
        Page <b class="bOne">{{ page }}</b> of <b> {{ pages }}</b>
        <span class="pagination-seperator seperator2">|</span>
      </span>
      <i class="fas fa-angle-right" @click="changePage(1)"></i>
      <i class="fas fa-angle-double-right" @click="changePage(pages)"></i>
      <span
        class="showing"
        :class="perPage === amount && 'active'"
        v-for="(amount, index) in perPageOptions"
        :key="index"
        @click="setPerPage(amount)"
        >{{ amount }}</span
      >
    </p>
  </section>
</template>

<script>
export default {
  props: ["perPageOptions", "totalRecords"],
  data() {
    return {
      page: 1,
      perPage: this.perPageOptions[0],
    };
  },
  computed: {
    pages() {
      const reminder = this.totalRecords % this.perPage;

      if (reminder > 0) {
        return Math.floor(this.totalRecords / this.perPage) + 1;
      } else {
        return this.totalRecords / this.perPage;
      }
    },
  },
  methods: {
    setPerPage(amount) {
      this.perPage = amount;
      this.$emit('change-page', {page: this.page, perPage: amount})
      console.log(amount);
    },
    changePage(val) {
      switch (val) {
        case 0:
          this.page = 1;
          break;
        case -1:
          this.page = this.page > 1 ? this.page - 1 : this.page;
          break;
        case 1:
          this.page = this.page < this.pages ? this.page + 1 : this.page;
          break;
        case this.pages:
          this.page = this.pages;
          break;
      }
      this.$emit('change-page', { page: this.page, perPage: this.perPage })
      console.log(val);
    },
  },
};
</script>

<style>
.pagination-container {
  display: flex;
  justify-content: flex-end;
  color: #444;
  margin-right: 20px;
}
.fas {
  width: 30px;
  color: #2997ff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 3px;
  cursor: pointer;
  font-size: 25px;
}
b {
  margin: 0 7px;
}
.inner-pagination-content {
  display: flex;
  align-items: center;
  margin: 0 10px;
}
.pagination-seperator,
.showing {
  font-size: 22px;
  font-weight: 400;
  color: #888;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
}
.seperator2 {
  margin-right: 10px;
}
.showing {
  margin: 0px 5px;
  cursor: pointer;
}
.showing:active {
  color: #2997ff;
}
</style>
