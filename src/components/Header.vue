<template>
    <div class="container-fluid">
        <div class="row h-100">
            <div class="col h-100 d-flex align-items-center justify-content-between">
                <div id="logo">

                </div>
                <div class="input-box">
                    <form action="">
                        <input v-model="inputText" 
                        type="text" 
                        placeholder="search...">

                        <button @click.prevent="$emit('sendValue', inputText)">Search</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            inputText: ''
        }
    }
}
</script>

<style scoped lang="scss">
  @import '../assets/style/general.scss';

    .container-fluid {
        background-color: darkgray;
        height: 70px;
    }
</style>

