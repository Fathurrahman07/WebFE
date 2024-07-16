<template>
  <div class="profile-container">
    <div class="profile-card">
      <img
        class="imgprofile"
        :src="require('@/assets/profile-removebg.png')"
        alt="Profile Image"
      />
      <div class="profile-info">
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
  background-color: #f2f2f2;
}

.profile-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
  padding-top: 10%;
  width: 900px;
  height: 400px;
  margin-top: 5%;
  display: flex;
  flex-direction: row;
}
/* .profile-info {
  text-align: left;
  margin-left: 440px;
  margin-top: 100px;
} */

.imgprofile {
  height: 50%;
  width: 60%;
  margin-right: 10%;
  margin-left: 10%;
}

.profile-info h2,
p {
  font-size: 25px;
  margin-top: 15px;
  margin-bottom: 2px;
  font-family: "Poppies", sans-serif;
  /* margin-left: 450px; */
}

.profile-info img {
  margin: 0;
  margin-top: 15px;
}

.profile-info strong {
  color: rgb(163, 163, 163);
}

.profile-info p {
  font-size: 20px;
  margin-bottom: 10px;
  font-family: "Poppies", sans-serif;
  line-height: 2em;
  word-spacing: 50px;
  /* margin-left: 450px; */
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
