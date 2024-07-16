<template>
  <div class="my-background">
    <nav class="navbar">
      <div class="navbar-brand">
        <a href="/"> <img src="@/assets/Logoo-removebg.png" alt="Logo">
        </a>
      </div>
      <div class="navbar-menu">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="/">Home</a>
          </li>
          <li class="nav-item">
            <a href="/category">Categories</a>
          </li>
          <li class="nav-item">
            <a href="/myrecipe">My Recipes</a>
          </li>
        </ul>
      </div>
      <div class="navbar-brand">
        <a href="/login"> <img src="@/assets/profilenavbar-removebg.png" alt="Logo">
        </a>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #5E2828;
}

.my-background {
  
}

.navbar {
  background-color: #c16363;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1337px;
}

.navbar-brand {
  display: flex;
  align-items: center;
}

.navbar-brand img {
  height: 30px;
  margin-right: 20px;
  width: 70px;
  height: 60px;
}

.navbar-menu {
  display: flex;
  align-items: center;
  padding: 18px;
}

.navbar-nav {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  margin-left: 100px; /* Adjust margin-left for desired spacing */
  margin-right: 100px;
}

.nav-item a {
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
  font-family: 'inter', sans-serif;
}

.nav-item a:hover {
  color: #222;
}
</style>
