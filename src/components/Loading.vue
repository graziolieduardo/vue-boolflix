<template>
  <div class="loading-container">
      <h1>Boolflix</h1>
  </div>
</template>

<script>
export default {
    name: 'Loading'
}
</script>

<style scoped lang="scss">
    .loading-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: calc(100vh - 70px);
        margin-top: 70px;
        background-color: black;
        text-transform: uppercase;
        font-size: 40px;

        @keyframes grow {
            0% {
                font-size: 30px;
                filter: drop-shadow(5px 5px 20px);
            } 
            80% {
                font-size: 50px;
                filter: drop-shadow(15px 15px 70px);
            }
            100% {
                font-size: 100px;
                filter: drop-shadow(25px 25px 70px);
            }
        }

        h1 {
            filter: drop-shadow(3px 3px 5px);
            color: red;
            animation: grow 3s linear;
        }
    }
</style>