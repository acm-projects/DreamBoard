<template>
  <div>
    <form @submit.prevent="createPost">
    <h1>Pick 3 colors, and we'll generate some matching design options!</h1>
    <!--<label for="exampleColorInput" class="form-label">Color picker</label>-->
    <div class="flex-container">
      <div class="colorInputModel">
        <input
          v-model="formData.colorInput1"
          type="color"
          class="form-control form-control-color"
          id="colorInput1"
          title="Choose your color"
        />
        <div><input type="text" v-model="formData.colorInput1" /></div>
      </div>

      <div class="colorInputModel">
        <input
          v-model="formData.colorInput2"
          type="color"
          class="form-control form-control-color"
          id="colorInput2"
          title="Choose your color"
        />
        <div><input type="text" v-model="formData.colorInput2" /></div>
      </div>
      
      <div class="colorInputModel">
        <input
          v-model="formData.colorInput3"
          type="color"
          class="form-control form-control-color"
          id="colorInput3"
          title="Choose your color"
        />
        <div><input type="text" v-model="formData.colorInput3" /></div>
      </div>
    </div>
    <button class="submitButton" style="width:100px;height:50px;">Submit!</button>
    </form>
  </div>
  <div>
    <h3>
      For color palette inspiration visit
      <a href="https://color.adobe.com/create/color-wheel">adobe color</a>
    </h3>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      formData: {
        colorInput1: "#818680",
        colorInput2: "#818680",
        colorInput3: "#818680"
    }
    };
  },
  methods: {
    
  createPost() {
    axios
      .post('https://jsonplaceholder.typicode.com/posts', this.formData)
      .then((response) => console.log(response))
      .catch((error) => console.log(error))

  }
},

}
</script>

<style scoped>
h1 {
  color: rgb(255, 255, 255);
  padding: 50px;
}

h3 {
  padding: 50px;
}

a {
  color: white;
}

.submitButton {
  font-family: avenir;
  font-size: 120%;
  margin: auto;
  display: block;
  background-color: rgb(172, 196, 197);
}

.submitButton:hover {
  /*background-color: rgb(72, 73, 60);*/
  background-color: rgb(73, 104, 122);
}

.container {
  position: absolute;
  text-align: center;
}

.flex-container {
  border: lightcoral;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.colorInputModel {
  display: block;
}

/* #flex-container ul{
  list-style-type: none;
  margin: 0;
  padding: 0%;
  overflow: hidden;
}

#flex-container li{
  float: left;
  padding: 400px, 400px;
  scale: 150%;
} */

</style>
