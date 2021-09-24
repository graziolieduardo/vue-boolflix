<template>
  <div id="app">
    <Header
    @sendValue="getData" 
    />
    <main>
      <Main />
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
      myApi: 'https://api.themoviedb.org/3/search/movie?',
      myApiKey: 'api_key=41f34acca19f8f449102a7fd33b9d325',
      inputSearch: ''
    }
  },
  methods: {
    getData(value) {
      this.inputSearch = value;
      axios
        .get(this.myApi + this.myApiKey + '&query=' + this.inputSearch)
        .then(res => {
          console.log(res.data.results);
        })
    },
    // getValue(value) {
    //   this.inputSearch = value;
    // }
  },
}
</script>

<style lang="scss">
  @import './assets/style/general.scss';

</style>
