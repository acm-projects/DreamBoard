<template>
    <div>
        <h1>Pick 3 colors, and we'll generate some matching design options!</h1>
        <!--<label for="exampleColorInput" class="form-label">Color picker</label>-->
        <div id=container>
          <div class=colorInput><input type="color" class="form-control form-control-color" id="exampleColorInput" value="#818680" title="Choose your color">
          </div>
          <div class=colorInput><input type="color" class="form-control form-control-color" id="exampleColorInput" value="#818680" title="Choose your color">
          </div>
          <div class=colorInput><input type="color" class="form-control form-control-color" id="exampleColorInput" value="#818680" title="Choose your color">
          </div>
        </div>
        <div>
          <h3>For color palette inspiration visit <a href="https://color.adobe.com/create/color-wheel">adobe color</a> </h3>
        </div>
    </div>
</template>

<script>
export default {
  name: "ColorPicker",
};
</script>

<style scoped>
h1{
  color: rgb(255, 255, 255);
  padding: 50px;
}

h3{
  padding: 50px;
}

a{
  color: white;
}

.container{
 overflow:hidden;
  width:auto;
  display:inline;
}

.colorInput{
  margin-bottom: 3%;
}

</style>