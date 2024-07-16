<template>
    <div class="create-recipe-form">
      <h2 class="title2">Update Recipe</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            id="title"
            v-model="title"
            placeholder="Your Title"
            required
          />
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <textarea
            id="description"
            v-model="description"
            placeholder="Your Description"
            required
          ></textarea>
        </div>
        <div class="form-group">
          <label for="ingredients">Ingredients</label>
          <textarea
            id="ingredients"
            v-model="ingredients"
            placeholder="Your Ingredients"
            required
          ></textarea>
        </div>
        <div class="form-group">
          <label for="steps">Steps</label>
          <textarea
            id="steps"
            v-model="steps"
            placeholder="Your Steps"
            required
          ></textarea>
        </div>
        <div class="form-group">
          <label for="category">Category</label>
          <input
            type="text"
            id="category"
            v-model="category"
            placeholder="Your Category"
            required
          />
        </div>
        <!-- <div class="form-group">
            <label for="image">Upload Image</label>
            <input type="file" id="image" v-model="image" accept="image/*" required>
          </div> -->
        <button type="submit" class="create-button">
          <a href="/myrecipe">Update</a>
        </button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "LoginForm", // Change the component name
    // Other component options
  };
  </script>
  
  <style scoped>
  .create-recipe-form {
    
    width: 50%;
    margin: 0 auto;
    background-color: #f5f5f5; /* Light gray background */
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    margin-top: 2%;
    
  }
  
  .title2 {
    margin-left: 10px;
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: bold;
    color: #333;
  }
  
  .form-group {
    width: 95%;
    margin-bottom: 20px;
    text-align: justify;
    
    
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    color: #555;
    
  }
  
  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-family: "Times New Roman", Times, serif;
    border: 2px solid #000000;
  }
  
  .create-button {
    background-color: #ff4c29;
    color: #fff;
    padding: 10px 100px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    margin-left: 200px
  }
  </style>
  