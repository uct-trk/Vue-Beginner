<template>
  <div class="movie-detail">
    <h2>{{movie.Title}}</h2>
    <p>{{movie.Year}}</p>
    <img :src="movie.Poster" alt="Movie Poster" class="featured-img">
    <p>{{movie.Plot}}</p>
  </div>
</template>

<script>
import {ref, onBeforeMount} from 'vue' 
import {useRoute} from 'vue-router'
import env from '@/env.js'

export default {
  setup(props) {
    
    const movie = ref({})
    const route = useRoute()

    onBeforeMount(() => {
      fetch(`https://www.omdbapi.com/?apikey=${env.apikey}&i=${route.params.id}&plot=full`)
      .then((res) => res.json())
      .then(data => movie.value = data)
      console.log(movie)
    })

    return {
      movie
    }
  }
}
</script>

<style scoped>
  .movie-detail{
    padding: 16px;
  }
  .movie-detail h2{
    color: #FFF;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  .featured-img{
    display: block;
    max-width: 200px;
    margin-bottom: 16px;
  }

  .movie-detail p{
    color: #FFF;
    font-size: 18px;
    line-height: 1.4;
  }
</style>