<template>
  <div class="home">
    <div class="feature-card">
      <router-link to="/movie/tt0409591">
        <img src="https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg" alt="Naruto Poster" class="featured-img">
        <div class="detail">
          <h3>Naruto</h3>
          <p>Naruto Uzumaki, a mischievous adolescent ninja, struggles as he searches for recognition and dreams of becoming the Hokage, the village's leader and strongest ninja.</p>
        </div>
      </router-link>
    </div>
    <form @submit.prevent="searchMovies()" class="search-box">
      <input v-model="search" type="text" placeholder="What are you loking for?">
      <input type="submit" value="Search">
    </form>
    <div class="movies-list">
      <div class="movie" v-for="movie in movies" :key="movie.imdbID">
        <router-link :to="'/movie/' + movie.imdbID" class="movie-link">
          <div class="product-image">
            <img :src="movie.Poster" alt="Movie Image">
            <div class="type">{{movie.Type}}</div>
          </div>
          <div class="detail2">
            <p class="year">{{movie.Year}}</p>
            <h3>{{movie.Title}}</h3>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import env from '@/env.js'

export default {
  setup(props) {
    const search = ref("");
    const movies = ref([]);

    const searchMovies = () => {
      if(search.value != ""){
        fetch(`https://www.omdbapi.com/?apikey=${env.apikey}&s=${search.value}`)
        .then((res) => res.json())
        .then(data => {
          movies.value = data.Search;
          search.value = "";
          console.log(movies.value)
        })
      }
    }

    return {
      search,
      movies,
      searchMovies
    }
  }  
}
</script>

<style>
  .feature-card{
    position: relative;
  }
  .featured-img{
    display: block;
    width: 100%;
    height: 300px;
    object-fit: cover;
    position: relative;
    z-index: 0;
  }

  .detail{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 16px;
    z-index: 1;
  }

  .detail h3{
    color: #FFF;
    margin-bottom: 16px;
  }

  .detail p{
    color: #FFF;
  }

  .search-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
  }

  .search-box input{
    display: block;
    appearance: none;
    border: none;
    outline: none;
    background: none;
  }
  .search-box input[type="text"]{
    width: 100%;
    color: #FFF;
    background-color: #496583;
    font-size: 20px;
    padding: 10px 16px;
    margin-bottom: 15px;
    transition: 0.4s;
  }
  .search-box input[type="text"]::placeholder{
    color: #f3f3f3;
  }
  .search-box input[type="text"]:focus{
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  }

  .search-box input[type="submit"]{
    width: 100%;
    max-width: 300px;
    background-color: #42B883;
    padding: 16px;
    border-radius: 8px;
    color: #FFF;
    font-size: 20px;
    text-transform: uppercase;
    transition: 0.4s;
  }
  .search-box input[type="submit"]:active{
    background-color: #3B8070;
  }

  div.movies-list{
    display: flex;
    flex-wrap: wrap;
    margin: 0px 8px;
  }
  div.movie{
    max-width: 50%;
    flex: 1 1 50%;
    padding: 16px 8px;
  }
  div .movie-link{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  div.product-image{
    position: relative;
    display: block;
  }
  .product-image img{
    display: block;
    width: 100%;
    height: 275px;
    object-fit: cover;
  }
  .product-image .type{
    position: absolute;
    padding: 8px 16px;
    background-color: #42B883;
    color: #FFF;
    bottom: 16px;
    left: 0px;
    text-transform: capitalize;
  }

  .detail2{
    background-color: #496583;
    padding: 16px 8px;
    flex: 1 1 100%;
    border-radius: 0px 0px 8px 8px;
  }
  .detail2 .year{
    color: #AAA;
    font-size: 14px;
  }
  .detail2 h3{
    color: #FFF;
    font-weight: 600;
    font-size: 18px;
  }
</style>
