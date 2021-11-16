<template>
  <div>
    <div class="greatchoices_statement">
      <p>My Boards</p>
      <!-- <div class="backToCP">
        <router-link to="/colorpicker"
          >Generate a color palette with these options.</router-link
        >
      </div> -->
      <div class="results-flex">
        <div class="results-container">
          <img src="@/assets/walmart.jpg" alt="walmart" />
          <h6>DreamBoard</h6>
        </div>
        </div>
      </div>
    </div>
</template>

<!--<script>
import NavBar from '@/components/NavBar.vue'
export default {
  name: "ResultsPage",
  components: {
    NavBar
  }
}
</script>-->



<style scoped>
.noDecoration {
  text-decoration: none;
  color: white;
  font-size: 20pt;
}
.noDecoration:hover {
  text-decoration: underline;
}

.greatchoices_statement {
  position: absolute;
  width: 1151px;
  height: 126px;
  left: 138px;
  /*top: 153px;*/
  top: 60px;
  /* font-family: Montserrat;
font-style: normal;
font-weight: normal; */
  font-size: 40px;
  font-weight: 700;
  line-height: 61px;
  text-align: center;
  color: #ffffff;
}

.resultImage {
  object-fit: fill;
}

.results-flex {
  display: flex;
  justify-content: left;
}

.results-container {
  display: flex;
  justify-content: left;
  position: relative;
  width: 50%;
  
}
.results-container img {
  width: 328px;
  height: 254px;
  max-width: 100%;
  box-shadow: 4px 4px rgba(71, 71, 71, 0.76);
  
}
.results-container h6 {
  color: black;
  background-color: rgba(255, 255, 255, 0.89);
  border-radius: 10px;
  display: block;
  position: absolute;
  top: -5%;
  left: 28%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}

.results-container .btn {
  position: absolute;
  top: 20%;
  left: 80%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  /* background-color: #555; */
  background-color: rgb(100, 139, 161);
  color: white;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}
.results-container .btn:hover {
  background-color: rgb(58, 57, 57);
  box-shadow: 0px, 3px, gray;
}
</style>