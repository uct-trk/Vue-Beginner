<template>
  <div class="app">
    <Header/>
    <main class="main">
      <Container>
    <router-view />
    </Container>
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Container from './components/Container.vue'
export default {
  name: "App",
  components: {
    Header,
    Container
  }
}
</script>

<style scoped>
  .main{
    padding-top: var(--header-height);
  }
</style>
