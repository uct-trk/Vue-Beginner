<template>
  <figure class="avatar">
    <img :src="src" :alt="alt" :width="size" :height="size" />
  </figure>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    src: {
      type: String,
      default:
        "https://media-exp1.licdn.com/dms/image/C4E03AQFT5jWpZOIMyQ/profile-displayphoto-shrink_100_100/0/1613080447729?e=1632960000&v=beta&t=1VOK5JV951nQmUxcw7jnAYqTv3sGyIvl2vyPzydIJFU",
    },
    alt: {
      type: String,
      default: "Photo",
    },
    size: {
      type: Number,
    },
  },
};
</script>

<style scoped>
.avatar {
  display: inline-flex;
  padding: 2px;
  border-radius: 999px;
  background: linear-gradient(
    219deg,
    rgba(184, 63, 140, 1) 0%,
    rgba(237, 158, 90, 1) 100%
  );
  
  img {
    border-radius: inherit;
    border: 2px solid white;
  }
}
</style>
