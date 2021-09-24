<template>
    <ul>
        <AlbumTemplate 
        v-for="(item, index) in dataArr"
        :key="index"
        :item="item" 
        />
    </ul>
</template>

<script>
import AlbumTemplate from './AlbumTemplate.vue'

export default {
    name: 'Main',
    props: ['dataArr'],
    components: {
        AlbumTemplate
    }
}
</script>

<style scoped lang="scss">
    @import '../assets/style/general.scss';

    .container-fluid {
        background-color: black;
        height: 100vh;
    }
</style>