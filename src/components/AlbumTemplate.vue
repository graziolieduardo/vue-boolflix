<template>
  <li>
    <div class="title">{{ 'Titolo: ' + item.title }}</div>
    <div class="original-title">{{ 'Titolo Originale: ' + item.original_title }}</div>
    <div class="language">
      {{ 'Lingua: '  }}
      <country-flag :country='getLang(item.original_language)'/>
      </div>
    <div class="rating">{{ 'Voto: ' + item.vote_average }}</div>
  </li>
</template>

<script>
import CountryFlag from 'vue-country-flag'

export default {
    name: 'AlbumTemplate',
    props: ['item'],
    components: {
      CountryFlag
    },
    methods: {
      getLang(lang) {
        if (lang == 'en')
          return 'gb';
        return lang
      }
    }

}
</script>

<style scoped lang ="scss">
    @import '../assets/style/general.scss';
</style>
