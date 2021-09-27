<template>
    <div class="header-container">
        <div id="logo">
            <h1>BOOLFLIX</h1>
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

    .header-container {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 70px;
        z-index: 5;
        background-color: black;

        h1 {
            color: red;
            padding: 20px;
        }
    }
</style>

