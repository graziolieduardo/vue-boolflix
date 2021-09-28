<template>
    <div class="container">
        <h1>Movies</h1>
        <ul>
            <CardTemplate 
            v-for="(item, index) in moviesArr"
            :key="index"
            :item="item" 
            />
        </ul>
           
        <h1>Series</h1>
        <ul>
            <CardTemplate
            v-for="(item, index) in tvArr"
            :key="index"
            :item="item" 
            />
        </ul>
    </div>
</template>

<script>
import CardTemplate from './CardTemplate.vue'


export default {
    name: 'Main',
    props: ['moviesArr', 'tvArr'],
    components: {
        CardTemplate,
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