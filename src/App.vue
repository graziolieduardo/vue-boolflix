<template>
  <div id="app">
    <Header
    @sendValue="search" 
    />
    <main>
      <Main
      :moviesArr="moviesData"
      :tvArr="seriesData" 
      />
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Header,
    Main
  },
  data() {
    return {
      myApi: 'https://api.themoviedb.org/3/search/',
      myApiKey: '41f34acca19f8f449102a7fd33b9d325',
      moviesData: [],
      seriesData: [],
    }
  },
  methods: {
    getMoviesData(apiParams) {
      axios
        .get(this.myApi + 'movie', apiParams)
        .then(res => {
          this.moviesData = res.data.results;
          console.log(res.data.results);
        })
    },
    getSeriesData(apiParams) {
      axios
        .get(this.myApi + 'tv', apiParams)
        .then(res => {
          this.seriesData = res.data.results;
          console.log(res.data.results);
        })
    },
    search(inputValue) {
      const paramsObj = {
        params: {
          api_key: this.myApiKey,
          query: inputValue
        }
      }

      this.getMoviesData(paramsObj);
      this.getSeriesData(paramsObj);
    }
    
  },
}
</script>

<style lang="scss">
  @import './assets/style/general.scss';

</style>
