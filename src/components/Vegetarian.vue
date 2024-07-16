<template>
      <div class="recipe-cards">
        <div class="recipe-card">
          <img :src="require('@/assets/Salad-Sayuran.png')" alt="Salad Sayuran">
          <a href="/ingredients"><p>Salad Sayur</p></a>
        </div>
        <div class="recipe-card">
          <img :src="require('@/assets/Salad-Sayuran.png')" alt="Salad Sayuran">
          <p>Salad Sayur</p>
        </div>
        <div class="recipe-card">
          <img :src="require('@/assets/Salad-Sayuran.png')" alt="Salad Sayuran">
          <p>Salad Sayur</p>
        </div>
        
      </div>
      <div class="recipe-cards2">
        <div class="recipe-card">
          <img :src="require('@/assets/Salad-Sayuran.png')" alt="Salad Sayuran">
          <p>Salad Sayur</p>
        </div>
        <div class="recipe-card">
          <img :src="require('@/assets/Salad-Sayuran.png')" alt="Salad Sayuran">
          <p>Salad Sayur</p>
        </div>
        <div class="recipe-card">
          <img :src="require('@/assets/Salad-Sayuran.png')" alt="Salad Sayuran">
          <p>Salad Sayur</p>
        </div>
      </div>
</template>

<script>
export default {
  name: "LoginForm", // Change the component name
  // Other component options
};
</script>

<style>
main {
  background-color: #fff;
  padding: 20px;
}

h2 {
  font-size: 20px;
  margin-bottom: 20px;
}

.recipe-cards {
  display: flex;
  justify-content: space-around;
}

p {
  font-size: 20px;
  text-align: left;
}

.recipe-card {
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
  width: 200px;
  text-align: center;
  border: 2px solid #000000;
  padding: 10px;
  background-color: #F8F2E8;
  border-radius: 10px;
}

.recipe-cards2 {
    margin-top: 200px;
    display: flex;
  justify-content: space-around;
}

img {
  width: 100%;
  max-width: 200px;
}
</style>