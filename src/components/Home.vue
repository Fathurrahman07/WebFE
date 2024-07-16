<template>
  <div class="app">
    <header  id="utama" :style="{ backgroundImage: `url(${require('@/assets/Home.png')})` }">
    <h1>FIND RECIPE AND MAKE YOUR OWN CREATIVITY RECIPE</h1>
</header>
      <h2 class="recipe">New Recipe</h2>
      <div class="recipe-cards">
        <div class="recipe-card">
          <a href="/ingredients"><img :src="require('@/assets/Bakso-Malang.png')" alt=""></a>
          <p>Bakso Malang</p>
        </div>
        <div class="recipe-card">
          <a href="/ingredients"><img :src="require('@/assets/Bakso-Malang.png')" alt=""></a>
          <p>Bakso Malang</p>
        </div>
        <div class="recipe-card">
          <a href="/ingredients"><img :src="require('@/assets/Salad-Sayuran.png')" alt=""></a>
          <p>Salad Sayuran</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
};
</script>

<style>
.app {
  text-align: center;
  font-family: Arial, sans-serif;
  overflow: hidden;
}

header {
    background-color: #f0f0f0;
    width: 1337px;
    height: 300px; /* Adjust height as needed */
    background-size: cover; /* Ensure image covers the entire header */
    background-position: center; /* Center the image */
}


h1 {
  font-size: 24px;
  margin-left:25%;
  text-align: center;
  color: #f0f0f0;
}

main {
  background-color: #fff;
  padding: 20px;
  margin-top: 30px;
}

h2 {
  font-size: 20px;
}

.recipe-cards {
  justify-content: space-around;
}

.recipe-card {
  width: 200px;
  text-align: center;
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: -80px;
}

img {
  width: 100%;
  max-width: 200px;
}
</style>
