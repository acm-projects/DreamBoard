<template>
  <div>
  <div>
    <form @submit.prevent="createPost">
    <h1 class="pickStatement">Pick 3 colors, and we'll generate some matching design options!</h1>
    <h1 class="colorbar" :style="{ background: formData.colorInput1}">{{formData.colorInput1}}</h1>
    <h1 class="colorbar" :style="{ background: formData.colorInput2}">{{formData.colorInput2}}</h1>
    <h1 class="colorbar" :style="{ background: formData.colorInput3}">{{formData.colorInput3}}</h1>
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
    <div class="submit">
      <button 
        class="submitButton" 
        style="width:100px;height:50px;">
          <!-- <router-link class="noUnderline" to="/resultspage"
          >Submit!</router-link -->
          <p>submit</p
        ></button>
    </div>
    </form>
  </div>
  <div>
    <h3>
      For color palette inspiration visit
      <a href="https://color.adobe.com/create/color-wheel">adobe color</a>
    </h3>
  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      posts: [],
      color: "#1C1695",
      formData: {
        colorInput1: "#79aabd",
        colorInput2: "#8d7ca6",
        colorInput3: "#adbd9f"
    }
    };
  },
  methods: {
  
  createPost() {
    console.log("bruh"),
    axios
      .get('http://localhost:3000/getNFM?query=modern%20light%20green%20chair&size=3')
      .then(response => {
        this.posts = response.data
      })
      .then(console.log(this.posts))
      
      .catch((error) => console.log(error))

  }

  }
}
</script>

<style scoped>
h1 {
  color: rgb(255, 255, 255);
  padding: 50px;
}

.colorbar{
  max-height: 5px;
  color: rgba(255, 255, 255, 0.397);
  padding: 50px;
  box-shadow: 0px 5px  #4b4b4bb7;
}

h3 {
  padding: 50px;
}

a {
  color: white;
}

.submit{
  margin-top: 40px;
}

.submitButton {
  font-family: avenir;
  font-size: 110%;
  margin: auto;
  display: block;
  background-color: rgb(172, 196, 197);
  border-radius: 10px;
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

.noUnderline{
  text-decoration: none;
  font-weight: 800;
}

.form-control{
  scale: 30vh;
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
