<template>
  <div class="login-page">
    <div class="login-container">
      <h1>Welcome Back</h1>

      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Enter Your Email"
            required
          />
        </div>

        <div class="form-group">
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="**********"
            required
          />
        </div>

        <div class="form-group">
          <label id="rememberMe" for="rememberMe">
            <input type="checkbox" id="rememberMe" v-model="rememberMe" />
            Remember me
            <a id="forgotpass">Forgot password?</a>
          </label>
        </div>

        <div class="form-group">
          <button type="submit">
            <a href="/profile">Login</a>
          </button>
        </div>
      </form>

      <p class="register">
        <a>Don't have an account?</a>
      </p>
      <div>
        <button type="submit-register">
          <a href="/register">Register</a>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm", // Change the component name
  // Other component options
};
</script>

<style scoped lang="css">
/* CSS styles for the login page */
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
 
}

/* .login-container {
  background-color: #fff;
  padding: 100px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
} */

h1 {
  text-align: center;
  margin-top: -50px;
  margin-left: 40px
}


.form-group {
  margin-bottom: 15px;
}

label {
  text-align: left;
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="email"] {
  display: flex;
  width: 100%;
  padding: 10px;
  border: 2px solid #000000;
  border-radius: 10px;
  margin-bottom: 20px;
  text-align: left;
  align-items: left;
  justify-content: left;
}
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 2px solid #000000;
  border-radius: 10px;
}

.form-group input[type="checkbox"] {
  margin-right: 10px;
}

.form-group label + input[type="checkbox"] {
  display: inline-block;
  align-self: middle;
  margin-bottom: 30px;
}

button[type="submit"] {
  background-color: #ff4c29;
  color: #fff;
  padding: 10px 100px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  margin-left: 20px;
}
button[type="submit-register"] {
  background-color: #fff;
  padding: 10px 90px;
  border-color: #000000;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  margin-left: 20px;

  a {
    text-decoration: none;
    color: #ff4c29;
  }
}

.forgot-password,
.register {
  text-align: center;
  margin-top: 15px;
}

.forgot-password a,
.register a {
  color: #7c7878;
  text-decoration: none;
}

#forgotpass {
  font-size: 14px;
  text-align: left;
}

#rememberMe {
  font-size: 14px;
}
</style>
