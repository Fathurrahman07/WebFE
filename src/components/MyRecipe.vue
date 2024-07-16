<template>
  <div class="recipe-cards">
    <div class="recipe-card">
      <img id="picture" :src="require('@/assets/Salad-Sayuran.png')" alt="pict">
      <div class="card-actions">
          <h5>Salad Sayuran</h5>
        <button class="edit-button">
          <a href="/updaterecipe"><img :src="require('@/assets/create-removebg.png')" alt="create button"></a>
        </button>
        <button class="delete-button">
          <img :src="require('@/assets/delete-removebg.png')" alt="delete button">
        </button>
      </div>
    </div>
    <div class="recipe-card">
      <img id="picture" :src="require('@/assets/Salad-Sayuran.png')" alt="pict">
      <div class="card-actions">
        <h5>Salad Sayuran</h5>
          <button class="edit-button">
            <a href="/updaterecipe"><img :src="require('@/assets/create-removebg.png')" alt="create button"></a>
        </button>
        <button class="delete-button">
          <img :src="require('@/assets/delete-removebg.png')" alt="delete button">
        </button>
      </div>
    </div>
    <div class="recipe-card">
      <img id="picture" :src="require('@/assets/Salad-Sayuran.png')" alt="pict">
      <div class="card-actions">
        <h5>Salad Sayuran</h5>
          <button class="edit-button">
            <a href="/updaterecipe"><img :src="require('@/assets/create-removebg.png')" alt="create button"></a>
        </button>
        <button class="delete-button">
          <img :src="require('@/assets/delete-removebg.png')" alt="delete button">
        </button>
      </div>
    </div>
  </div>
  <div class="recipe-cards">
    <div class="recipe-card">
      <img id="picture" :src="require('@/assets/Bakso-Malang-removebg.png')" alt="pict">
      <div class="card-actions">
        <h5>Bakso Malang</h5>
          <button class="edit-button">
            <a href="/updaterecipe"><img :src="require('@/assets/create-removebg.png')" alt="create button"></a>
        </button>
        <button class="delete-button">
          <img :src="require('@/assets/delete-removebg.png')" alt="delete button">
        </button>
      </div>
    </div>
    <div class="recipe-card">
      <img id="picture" :src="require('@/assets/Bakso-Malang-removebg.png')" alt="pict">
      <div class="card-actions">
        <h5>Bakso Malang</h5>
          <button class="edit-button">
            <a href="/updaterecipe"><img :src="require('@/assets/create-removebg.png')" alt="create button"></a>
        </button>
        <button class="delete-button">
          <img :src="require('@/assets/delete-removebg.png')" alt="delete button">
        </button>
      </div>
    </div>
    <div class="recipe-card">
      <img id="picture" :src="require('@/assets/Bakso-Malang-removebg.png')" alt="pict">
      <div class="card-actions">
        <h5>Bakso Malang</h5>
          <button class="edit-button">
            <a href="/updaterecipe"><img :src="require('@/assets/create-removebg.png')" alt="create button"></a>
        </button>
        <button class="delete-button">
          <img :src="require('@/assets/delete-removebg.png')" alt="delete button">
        </button>
      </div>
    </div>
  </div>
  <div class="create-button">
    <a href="/createrecipe"><button  type="submit" >
      CREATE RECIPE
  </button></a>
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
  margin-bottom: 20px;
}

.recipe-card {
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
  width: 200px;
  height: 150px;
  text-align: center;
  border: 2px solid #000000;
  padding: 10px;
  background-color: #F8F2E8;
  border-radius: 15px;
  position: relative; /* To position card-actions absolutely */
}

.card-actions {
  display: flex;
  justify-content: right;
  position: relative;
  bottom: 10px;
  left: 10px;
  right: 10px;
}

h5 {
  margin-top: 20px;
  font-size: 18px;
}

.edit-button, .delete-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 14px;
  width: 40px;
  height: 40px;
  margin-top: 50px;
}

img {
  width: 100%;
  max-width: 200px;
}

.create-button {
  text-align: center;
  margin-top: 20px;
}

.create-button button {
  background-color: #ff4c29;
  color: #fff;
  width: 500px;
  height: 55px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 50px;
}
</style>