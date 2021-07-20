<template>
  <div class="app">
    <header>
     <h1>The<strong>Anime</strong>Database</h1>
     <form class="search-box" @submit.prevent="handleSearch">
      <input 
        type="search" 
        class="search-field" 
        placeholder="Search for an anime..."
        required
        v-model="search_query">
    </form>
    </header>
    <main>
      <div class="cards" v-if="animeList.length > 0">
      <card 
        v-for="anime in animeList" 
        :key="anime.mal_id"
        :anime="anime"/>
        </div>
        <div class="no-results" v-else>Nothing</div>
    </main>
  </div>
</template>

<script>
import {ref} from 'vue'
import Card from './components/Card.vue';
export default {
  components: { Card },
  setup() {
    const search_query = ref("")
    const animeList = ref([])

    const handleSearch = async () => {
      animeList.value = await fetch(`https://api.jikan.moe/v3/search/anime?q=${search_query.value}`)
      .then(res => res.json())
      .then(data => data.results)
      search_query.value = ""
      console.log(animeList.value)
    }

    return {
      search_query,
      animeList,
      handleSearch
    }
  }
};
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

a{
  text-decoration: none;
}

header {
  padding-top: 50px;
  padding-bottom: 50px;

  h1{
    color: #888;
    font-size: 42px;
    font-weight: center;
    text-transform: uppercase;
    margin-bottom: 30px;
    text-align: center;

    strong{
      color: #313131;
    }

    &:hover{
      color: #313131;
    }
  }

  .search-box{
    display: flex;
    justify-content: center;
    padding-left: 30px;
    padding-right: 30px;

    .search-field {
      appearance: none;
      background: none;
      border: none;
      outline: none;

      background-color: #F3F3F3;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);

      display: block;
      width: 100%;
      max-width: 600px;
      padding: 15px;
      border-radius: 8px;

      color: #313131;
      font-size: 20px;

      transition: 0.4s;

      &::placeholder {
        color: #FFF;
      }

      &:focus{
        color: #FFF;
        background-color: #313131;
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.15);
      }
    }
  }
}

main {
	max-width: 1200px;
	margin: 0 auto;
	padding-left: 30px;
	padding-right: 30px;
	.cards {
		display: flex;
		flex-wrap: wrap;
		margin: 0 -8px;
	}
  .no-results{
    text-align: center;
    font-size: 30px;
  }
}
</style>
