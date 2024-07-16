<template>
      <main>
        <div class="recipe-cards">
            <div class="recipe-cardd">
              <a href="/vegetarian"></a>
            <p><a href="/vegetarian">Vegetarian</a></p>
            <div class="recipe-card2">
              <img :src="require('@/assets/Vegetarian-removebg.png')" alt="vegetarian">
            <p>Kategori ini menawarkan berbagai macam sayuran segar, mulai dari bayam dan brokoli hingga wortel dan kacang hijau. Cocok untuk yang menginginkan makanan yang sehat dan kaya akan serat serta nutrisi penting.</p>
          </div>
        </div>
          <div class="recipe-cardd">
            <p>Meat Lovers</p>
            <div class="recipe-card2">
              <img :src="require('@/assets/Meat-Lovers-removebg.png')" alt="meat">
            <p>Pilihan ini dirancang khusus untuk para pencinta daging, dengan menu yang mencakup berbagai jenis daging seperti sapi panggang, ayam goreng, atau steak yang lezat. Cocok bagi mereka yang menyukai cita rasa gurih dan protein tinggi.</p>
          </div>
        </div>
          <div class="recipe-cardd">
            <p>Dessert</p>
            <div class="recipe-card2">
              <img :src="require('@/assets/Dessert-removebg.png')" alt="Dessert">
            <p>Makanan penutup ini menawarkan berbagai macam pilihan manis seperti kue cokelat, es krim vanilla dengan saus karamel, atau puding buah segar. Ideal untuk menutup santapan dengan manis dan memuaskan lidah setelah makanan utama.</p>
          </div>
          </div>
        </div>
      </main>
    
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
  }
  
  header {
    display: flex;
    background-color: #f0f0f0;
    width: 1337px;
    height: 381px;
  }
  
  h1 {
    font-size: 24px;
    margin-left: 25%;
    text-align: center;
  }
  
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
    margin-top: 150px;
    
  }


  .recipe-card2 {
    background-color: #D5BCBC;
    border-radius: 10px;
  }
  
  .recipe-cardd {
    width: 200px;
    text-align: center;
    border: 2px solid #000000;
    padding: 10px;
    border-radius: 10px;
    background-color: #CC9595;
    cursor: pointer;
  }

  
  img {
    width: 100%;
    max-width: 200px;
  }
  </style>
  