<template>
  <div class="home">
    <div class="timeline">
      <h1>Home</h1>
      <Post/>
    </div>

    <div class="sidebar">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
        inventore, nisi optio odit accusantium quasi, temporibus porro
        consectetur aperiam voluptates distinctio eligendi quas iste illo.
        Nostrum nemo natus quibusdam ad.
      </p>
    </div>

  </div>
</template>

<script>
import Post from '@/components/Post';
export default {
  name: "Home",
  components: {
    Post
  },
};
</script>

<style scoped>
.home {
  max-width: 605px;
  margin-left: auto;
  margin-right: auto;

  @media (--t) {
    max-width: none;
    display: grid;
    grid-template-columns: 1fr 295px;
    gap: 30px;
  }
}
.sidebar {
  display: none;

  @media (--t) {
    display: block;
  }
}
</style>
