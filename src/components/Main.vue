<template>
    <div class="container">
        <h1>Movies</h1>
        <ul>
            <MovieTemplate 
            v-for="(item, index) in moviesArr"
            :key="index"
            :item="item" 
            />
        </ul>

        <h1>Series</h1>
        <ul>
            <TvTemplate 
            v-for="(item, index) in tvArr"
            :key="index"
            :item="item" 
            />
        </ul>
    </div>
</template>

<script>
import MovieTemplate from './MovieTemplate.vue'
import TvTemplate from './TvTemplate.vue'

export default {
    name: 'Main',
    props: ['moviesArr', 'tvArr'],
    components: {
        MovieTemplate,
        TvTemplate
    },
}
</script>

<style scoped lang="scss">
    @import '../assets/style/general.scss';

    .container {
        width: 100%;
        min-height: 100vh;
        background-color: black;
        color: white;
        padding: 55px 50px 0px;

        ul {
            display: flex;
            overflow-x: auto;
            overflow-y: hidden;


            &::After {
                content: '';
                display: table;
                clear: both;
            }
        }

        h1 {
            padding: 15px 0;
        }
    }
</style>