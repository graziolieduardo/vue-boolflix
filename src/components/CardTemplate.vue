<template>
  <div class="card">
    <div class="content">
      <!-- card img  -->
      <li class="card-img">
        <img v-if="item.poster_path != null" :src="imgPath + imgWidth + item.poster_path" :alt="item.title">
        <img v-else src="../assets/img/non-disponibile.jpg" alt="">
      </li>

      <!-- card info  -->
      <li class="card-info">
        <div class="title">
          {{ item.title ? item.title : item.name }}
        </div>
        <div class="overview">
          {{ item.overview }}
        </div>
        <div class="cast">
          <template v-for="(char, index) in item.cast">
            <span :key="index"> {{ char.name }} </span>
          </template>
        </div>
        <div class="language">
          <country-flag :country='getLang(item.original_language)'/>
        </div>
        <div class="rating">
            <i v-for="n in 5" :key='n' class="fa-star" :class="(n <= getVote()) ? 'fas' : 'far'"></i>
        </div>
      </li>
    </div>
  </div>  
</template>

<script>
import CountryFlag from 'vue-country-flag'

export default {
    name: 'CardTemplate',
    props: ['item'],
    components: {
      CountryFlag
    },
    data() {
      return {
        imgPath: 'https://image.tmdb.org/t/p/',
        imgWidth: 'w342'
      }
    },
    methods: {
      getLang(lang) {
        if (lang == 'en')
          return 'gb';
        return lang
      },
      getVote() {
        return Math.ceil(this.item.vote_average / 2)
      }
    }

}
</script>

<style scoped lang="scss">
    @import '../assets/style/general.scss';

    .card {
      position: relative;
      min-width: calc((100% / 8) - 6px);
      height: 350px;
      margin:3px;
      border-radius: 5px;
      cursor: pointer;

      &:hover .content {
        transform: rotateY(180deg)
      }

      .content {
        position: absolute;
        width: 100%;
        height: 100%;
        transition: transform 1s;
        transform-style: preserve-3d;
        backface-visibility: hidden;
        -moz-backface-visibility: hidden;
        
        .card-img {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -moz-backface-visibility: hidden;
          z-index: 1 ;
  
          img {
            width: 100%;
            height: 100%;
            border-radius: 5px;
          }
        }
        
        .card-info {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          position: absolute;
          width: 100%;
          height: 100%;
          padding: 10px;
          background-color: black;
          color: white;
          border-radius: 5px;
          transform: rotateY(180deg);
          border: 1px solid gray;
          overflow: auto;

          .title, .overview, .language, .rating {
            display: flex;
            justify-content: center;
            width: 100%;
            margin-bottom: 5px;
          }

          .overview {
            font-size: 12px;
            line-height: 1.3em;
          }
          
          .rating {
            color: red;
          }

          .cast {
            font-size: 14px;
          }
        }  
      }

    }
</style>
