<template>
  <div>
    <h1>Jobs</h1>
    <div v-for="job in jobs" :key="job.id">
        <router-link :to="{name: 'JobDetails', params: {id: job.id}}">
          <h2>{{job.title}}</h2>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        { title: "Frontend Developer", id: 1, details: "lorem" },
        { title: "Backend Developer", id: 2, details: "lorem" },
        { title: "Web Designer", id: 3, details: "lorem" },
      ],
    };
  },
};
</script>

<style></style>
