<template>
  
  <div class="profile-container">
    <div class="profile-card">
      <div class="profile-info">
        <img :src="require('@/assets/profilenavbar-removebg.png')" alt="Profile Image">
        <div class="info">
        <h2>Hi, Ikhwan!</h2>
        <p id="username"><strong>Username</strong> ikhwan</p>
        <p id="email"><strong>Email</strong> ikhwanfauzil23@gmail.com</p>
        <p id="password"><strong>Password</strong> ********</p>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
};
</script>

<style>


.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #F2F2F2;
}

.profile-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
  width: 900px;
  height: 500px;
  margin-top: 5%;
}
/* .profile-info {
  text-align: left;
  margin-left: 440px;
  margin-top: 100px;
} */

.profile-info h2, p {
  font-size: 25px;
  margin-top: 15px;
  margin-bottom: 2px;
  font-family: 'Poppies', sans-serif;
  margin-left: 450px;
}

.profile-info img {
  margin: 0;
  margin-top: 15px;
}

/* .profile-info strong {
  color: rgb(163, 163, 163);
} */

.profile-info p {
  font-size: 20px;
  margin-bottom: 10px;
  font-family: 'Poppies', sans-serif;
  line-height: 2em;
  word-spacing: 50px;
  margin-left: 450px;
}

#username {
  word-spacing: 40px;
}

#email {
  word-spacing: 80px;
}

#password {
  word-spacing: 40px;
}
</style>
