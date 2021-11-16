<template>
<div>
  <div class="appBackground">
    <img class="lampsroom" src="@/assets/lampsroom.jpg" alt="blue pastel living room" >
      <div class="container">
      <div class="design_statement">
        <p>Design your dream room <br> from the comfort of your own home.</p>
        </div>
    </div>
    </div>
    <div class="inputOptions">
      <div class="inputOption">
         <router-link class="homeroutes" to="/colorpicker">Choose a color palette <br> and recieve catered results</router-link></div>
      <div style="vertical-align:bottom">OR</div>
      <div class="inputOption">
        <router-link class="homeroutes" to="/fileupload">Upload a picture of your room <br> and recieve recommendations</router-link></div>
    </div>
    </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.container {
  
      /* width: 450px;
      height: 800px; */
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
      /* right: 250px;
      top: 100px; */
  font-size: 50;
  color: #e0eef2;
}
.design_statement {
  padding-top: 10px;
  padding-right: 2px;
  padding-left: 25px;
  padding-bottom: 0px;
   height: 200px;
  border-radius: 20px;
  background: rgba(116, 167, 196, 0.881);
  font-family: 'Lato';
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 54px;
  color: #fffdfd;
}
.paragraph {
  background: rgba(116, 167, 196, 0.87);
  font-family: Avenir;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
 
  padding-top: 5px;
  padding-right: 25px;
  padding-left: 25px;
  padding-bottom: 15px;
  color: #fffdfd;
}
.appBackground {
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    width: 100vw;
    height: 80vh;
}

.lampsroom{
  max-width: 60%;
   max-height: auto;
   border-radius: 20px;
}

.inputOptions{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-family: 'Lato';
  font-weight: 700;
  font-size: 24px;
}

.inputOption{
  color: white;
  display: block;
  background-color: rgb(45, 100, 122);
  border: 20px solid rgb(45, 100, 122);
    border-radius: 20px;
}

.inputOption:hover{
  background-color: rgb(32, 72, 88);
  border: 20px solid rgb(32, 72, 88);
    border-radius: 20px;
  box-shadow: 0px 3px  #4b4b4bb7;
}

.homeroutes{
  color: white;
  text-decoration: none;
}

</style>