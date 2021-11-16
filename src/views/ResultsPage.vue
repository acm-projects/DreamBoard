<template>
  <div>
    <div class="greatchoices_statement">
      <p>Great choices! Here are your furniture suggestions.</p>
      <!-- <div class="backToCP">
        <router-link to="/colorpicker"
          >Generate a color palette with these options.</router-link
        >
      </div> -->
      <div class="results-flex">
      <div class="results-container">
      
          <img src="@/assets/walmart.jpg" alt="walmart"/>
          <h6>$460.00</h6>
          <button type="button" class="btn" @click="showModal">+</button>
          <Modal v-show="isModalVisible" @close="closeModal" />
        
      </div>
      <div class="results-container">
      
        <img src="@/assets/etsy.jpg" alt="etsy"/>
        <h6>$799.00</h6>
        <button type="button" class="btn" @click="showModal">+</button>
        <Modal v-show="isModalVisible" @close="closeModal" />
      
    </div>
    <div class="results-container">
      
        <img src="@/assets/ikea-orange-couch.webp" alt="ikea"/>
        <h6>$599.00</h6>
        <button type="button" class="btn" @click="showModal">+</button>
        <Modal v-show="isModalVisible" @close="closeModal" />
      
    </div>
    </div>
    <div class="backToCP">
        <router-link class="noDecoration" to="/colorpicker"
          >Generate a color palette with these options.</router-link
        >
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
<script>
import Modal from "../components/Modal.vue";
export default {
  components: {
    Modal,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>


<style scoped>

.noDecoration{
  text-decoration: none;
  color: white;
  font-size: 20pt;
}
.noDecoration:hover{
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

.results-flex{
  display: flex;
  justify-content: left;
}

.results-container {
  display: flex;
  justify-content: center;
  position: relative;
  width: 50%;
  overflow: hidden;
}
.results-container img {
  width: 328px;
  height: 254px;
  max-width: 100%;
}
.results-container h6 {
  color: black;
  background-color: rgba(255, 255, 255, 0.534);
  border-radius: 10px;
  display: block;
  position: absolute;
  top: -5%;
  left: 25%;
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
.results-container .btn:hover{
  background-color: rgb(58, 57, 57);
  box-shadow: 0px, 3px, gray;
}
</style>