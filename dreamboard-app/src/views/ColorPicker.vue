<template>
  <div>
    <h1>Pick 3 colors, and we'll generate some matching design options!</h1>
    <h1>{{colorInput}}</h1>
    <!--<label for="exampleColorInput" class="form-label">Color picker</label>-->
    <div class="flex-container">
        <div><input
          type="color"
          class="form-control form-control-color"
          id="colorInput1"
          value="#818680"
          title="Choose your color"
        /></div>

        <div><input
          type="color"
          class="form-control form-control-color"
          id="colorInput2"
          value="#818680"
          title="Choose your color"
        /></div>

        <div><input
          type="color"
          class="form-control form-control-color"
          id="colorInput3"
          value="#818680"
          title="Choose your color"
        /></div>
      <!--<div class="colorInput">
        <input
          type="color"
          class="form-control form-control-color"
          id="colorInput1"
          v-bind:value="colorPicker1"
          title="Choose your color"
        />
      </div>
      <div class="colorInput">
        <input
          type="color"
          class="form-control form-control-color"
          id="colorInput2"
          value="#818680"
          title="Choose your color"
        />
      </div>
      <div class="colorInput">
        <input
          type="color"
          class="form-control form-control-color"
          id="colorInput3"
          value="#818680"
          title="Choose your color"
        />
      </div>-->
    </div>
    </div>
    <div>
      <h3>
        For color palette inspiration visit
        <a href="https://color.adobe.com/create/color-wheel">adobe color</a>
      </h3>
    </div>
</template>

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

.center{
  margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
}

.flex-container {
  border: lightcoral;
   display: flex;
   flex-direction: row;
   justify-content: space-around;
}

#flex-container ul{
  list-style-type: none;
  margin: 0;
  padding: 0%;
  overflow: hidden;
}

#flex-container li{
  float: left;
  padding: 400px, 400px;
  scale: 150%;
}

#colorInput1 {
  scale: 150%;
}
#colorInput2 {
  scale: 150%;
}
</style>
