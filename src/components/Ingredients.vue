<template>
  <div class="recipe-title">
    <p id="aa">Salad Sayuran</p>
    <img :src="require('@/assets/Salad-Sayuran-Full.png')" alt="Salad Sayuran">
  </div>

  <section class="ingredients">
    <p>
      Racikan salad ini isiannya komplit. Sausnya memakai minyak zaitun yang
      menyehatkan.
    </p>
    <h2>Ingredients</h2>
    <ul>
      <li>1 buah timun hijau, serut tipis memanjang</li>
      <li>10 buah tomat ceri, belah-belah</li>
      <li>10 buah kentang rendang, rebus, belah dua</li>
      <li>3 lembar beef bacon, potong kasar, tumis</li>
      <li>150 g daun selada arugula atau jenis lain</li>
      <li>3 lembar keju cheddar, potong kasar</li>
      <li>2 buah telur ayam rebus, belah dua</li>
      <li>Saus Minyak Olive Bawang:</li>
      <li>150 ml extra virgin olive oil</li>
      <li>1 siung bawang putih, parut halus</li>
      <li>1 sdm mustard pasta</li>
      <li>2 sdm air jeruk lemon</li>
      <li>1/2 sdt merica bubuk</li>
      <li>1 sdt garam</li>
    </ul>
  </section>

  <section class="steps">
    <h2>Step</h2>
    <ol>
      <li>
        Taruh semua sayuran dalam wadah dan simpan dalam lemari es beberapa saat
        agar renyah segar.
      </li>
      <li>
        Saus Minyak Olive Bawang: Aduk dan kocok semua bahan hingga teremulsi
        dengan baik.
      </li>
      <li>
        Susun sayur di piring saji, beri beef bacon, potongan keju dan telur
        rebus.
      </li>
      <li>Siram dan aduk dengan Sausnya sesaat akan disajikan.</li>
    </ol>
  </section>

  <section class="comments">
    <h2>Comments</h2>
    <div class="comment-form">
      <textarea
        id="comments"
        v-model="comments"
        placeholder="Your Comments"
      ></textarea>
    </div>
  </section>
</template>

<script>
export default {
  name: "LoginForm", // Change the component name
  // Other component options
};
</script>

<style>

.ingredients {
  text-align: justify;
}

p {
  margin-left: 10px;
}

h2 {
  margin-left: 10px;
}
.recipe-container {
  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: center; /* Center items horizontally */
  min-height: 100vh; /* Ensure full viewport height */
  text-align: center;
}

header {
  display: flex;
  justify-content: space-between; /* Align header items */
  align-items: center;
  padding: 20px;
  text-align: center;
}

main {
  padding: 20px;
  text-align: center;
}

.recipe-title {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  align-items: center;
  font-size: 20px;
}

#aa {
  text-align: center;
}

.ingredients,
.steps,
.comments {
  text-align: left;
  margin-left: 180px;
  font-size: 20px;
}

textarea{
    width: 75%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: "Times New Roman", Times, serif;
  border: 2px solid #000000;
  border-radius: 10px;
}
</style>
