<template>
  <div>
    <div class="greatchoices_statement">
      <p>Great choices! Here are your furniture suggestions.</p>
    </div>
    <div class="backToCP">
      <p>Generate a color palette with these options.</p>
      <li id="item">
        <router-link to="/colorpicker"
          >Generate a color palette with these options.</router-link
        >
      </li>
    </div>
    <div class="container">
      <div class="rect1"><button
      type="button"
      class="btn"
      @click="showModal"
    >
      +
    </button>

    <Modal
      v-show="isModalVisible"
      @close="closeModal"
    /></div>
      <div class="rect2"></div>
      <div class="rect3"></div>
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
import Modal from '../components/Modal.vue';
export default {
  components: {
    Modal
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
      }
    }

  
}
</script>


<style>
#item {
  list-style-type: none;
  position: absolute;
  width: 841px;
  height: 49px;
  left: 299px;
  top: 341px;
  /* font-family: Montserrat; */
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 49px;
  /* identical to box height */
  text-align: center;
  text-decoration-line: underline;
  color: #000000;
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
  line-height: 61px;
  text-align: center;
  color: #ffffff;
}
.rect1 {
  position: absolute;
  width: 328px;
  height: 254px;
  left: 87px;
  top: 452px;
  background: #c4c4c4;
  border-radius: 20px;
}
.rect2 {
  position: absolute;
  width: 328px;
  height: 254px;
  left: 556px;
  top: 452px;
  background: #c4c4c4;
  border-radius: 20px;
}
.rect3 {
  position: absolute;
  width: 328px;
  height: 254px;
  left: 1021px;
  top: 452px;
  background: #c4c4c4;
  border-radius: 20px;
}
</style>