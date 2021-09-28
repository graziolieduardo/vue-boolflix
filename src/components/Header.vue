<template>
    <div class="header-container">
        <div id="logo">
            <a href="#">
                <h1>BOOLFLIX</h1>
            </a>
        </div>
        <div class="input-box">
            <form action="">
                <input v-model="inputText" 
                type="text" 
                placeholder="search...">

                <button @click.prevent="$emit('sendValue', inputText)">
                    <i class="fas fa-search"></i>
                </button>
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

        #logo {
            a {
                text-decoration: none;
            }
        }
    
        h1 {
            color: red;
            padding: 20px 50px;
            filter: drop-shadow(2px 2px 5px);
        }

        .input-box {
            padding: 20px 50px;

            input {
                outline: none;
                padding: 5px;
            }

            button {
                border: none;
                padding: 5px;
                background-color: black;
                color: white;
                font-size: 18px;
                margin: 0px 10px;
                cursor: pointer;
            }
        }
    }
</style>

