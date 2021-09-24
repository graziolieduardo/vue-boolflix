<template>
    <div>
        <AlbumTemplate />
    </div>
</template>

<script>
import AlbumTemplate from './AlbumTemplate.vue'

export default {
    name: 'Main',
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