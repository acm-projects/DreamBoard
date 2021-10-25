<template>
<div>
  <div id="results">
    <NavBar/>
  </div>
<div class="greatchoices_statement">
        <p>Great choices! Here are your furniture suggestions.</p>
        </div>
<div class="backToCP">
        <p>Generate a color palette with these options.</p>
        <li><a href="colorpalette.asp"> Generate a color palette with these options.</a></li>
        </div>
<div class= "container">
    <div class= "rect1"> </div>
    <div class= "rect2"> </div>
    <div class= "rect3"> </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  name: "ResultsPage",
  components: {
    NavBar
  }
}
</script>

<style>

#app {
  background:  rgba(224, 238, 242, 1);
;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@font-face {
  font-family: "Ruda";
  src: local("Ruda"),
   url(../assets/Ruda-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "MPLUS";
  src: local("MPLUS"),
   url(../assets/MPLUSRounded1c-Thin.ttf) format("truetype");
}
li{
    position: absolute;
width: 841px;
height: 49px;
left: 299px;
top: 341px;

font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 40px;
line-height: 49px;
/* identical to box height */

text-align: center;
text-decoration-line: underline;

color: #000000;
}

.greatchoices_statement{
    position: absolute;
width: 1151px;
height: 126px;
left: 138px;
top: 153px;

font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 50px;
line-height: 61px;
text-align: center;

color: #000000;
}

.rect1{
position: absolute;
width: 328px;
height: 254px;
left: 87px;
top: 452px;

background: #C4C4C4;
border-radius: 20px;
}

.rect2{
position: absolute;
width: 328px;
height: 254px;
left: 556px;
top: 452px;

background: #C4C4C4;
border-radius: 20px;
}

.rect3{
position: absolute;
width: 328px;
height: 254px;
left: 1021px;
top: 452px;

background: #C4C4C4;
border-radius: 20px;
}
</style>
