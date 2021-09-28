<template>
  <div id="app">
    <Loading 
    v-if="loading == true"
    />
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
import Loading from './components/Loading.vue'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Loading,
    Header,
    Main
  },
  data() {
    return {
      myApi: 'https://api.themoviedb.org/3/search/',
      generalApi: 'https://api.themoviedb.org/3/',
      myApiKey: '41f34acca19f8f449102a7fd33b9d325',
      moviesData: [],
      seriesData: [],
      loading: true
    }
  },
  methods: {
    getMoviesData(apiParams) {
      axios
        .get(this.myApi + 'movie', apiParams)
        .then(res => {
          this.moviesData = res.data.results;
          console.log(res.data.results);
          
          this.moviesData.forEach((el) => {
            axios
              .get(this.generalApi + 'movie/' + el.id + '/credits', {
                params: {
                  api_key: this.myApiKey
                }
              })
              .then((res) => {
                el.cast = [];
                // console.log(res.data.cast)
                for (let i = 0; i < 5; i++) {
                  el.cast.push(res.data.cast[i]);
                }
              })
          });
        })
    },
    getSeriesData(apiParams) {
      axios
        .get(this.myApi + 'tv', apiParams)
        .then(res => {
          this.seriesData = res.data.results;
          console.log(res.data.results);

          this.seriesData.forEach((el) => {
            axios
              .get(this.generalApi + 'tv/' + el.id + '/credits', {
                params: {
                  api_key: this.myApiKey
                }
              })
              .then((res) => {
                el.cast = [];
                // console.log(res.data.cast)
                for (let i = 0; i < 5; i++) {
                  el.cast.push(res.data.cast[i]);
                }
              })
          });
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
    },
    getPopularMovies() {
      axios.get(this.generalApi + 'movie/' + 'popular', {
        params: {
          api_key: this.myApiKey
        }
      })
      .then((res) => {
        this.moviesData = res.data.results;
      })
    },
    getPopularSeries() {
      axios.get(this.generalApi + 'tv/' + 'popular', {
        params: {
          api_key: this.myApiKey
        }
      })
      .then((res) => {
        this.seriesData = res.data.results;
      })
    }
  },
  mounted() {
    this.getPopularMovies();
    this.getPopularSeries();
    setTimeout(() => {
      this.loading = false
    }, 3000)
  }
}
</script>

<style lang="scss">
  @import './assets/style/general.scss';
  @import '~@fortawesome/fontawesome-free/css/all.min.css';

</style>
