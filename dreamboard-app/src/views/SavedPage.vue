<template>
<div>
  <div id="results">
    <NavBar/>
  </div>
<div class="MyDesigns">
        <p>My Designs</p>
        </div>
<!---<div class="backToCP">
        <p>Generate a color palette with these options.</p>
        <li id='item'><router-link to="/colorpicker">Generate a color palette with these options.</router-link></li>
        </div>--->

<div class="flex-container">
    <div class= "rect1"> </div>
    <div class= "rect2"> </div>
    <div class= "rect3"> </div>
    <div class= "rect4"> </div>
    <div class= "rect5"> </div>
    <div class= "rect6"> </div>
   /></div>
    
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

<style>
#item{
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

.MyDesigns{
    position: absolute;
width: 1151px;
height: 126px;
left: 138px;
top: 153px;
/* font-family: Montserrat;
font-style: normal;
font-weight: normal; */
font-size: 50px;
line-height: 61px;
text-align: center;
color: #000000;
}

.flex-container {
  border: lightcoral;
   display: flex;
   flex-wrap: wrap;
   align-items: flex-start;
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
  padding: 100px, 100px;
  scale: 150%;
}

.rect1{
position: absolute;
width: 164px;
height: 127px;
left: 87px;
top: 275px;
background: #C4C4C4;
border-radius: 20px;
}

.rect2{
position: absolute;
width: 164 px;
height: 127px;
left: 200px;
top: 275px;
background: #C4C4C4;
border-radius: 20px;

}
.rect3{
position: absolute;
width: 164 px;
height: 127px;
left: 300px;
top: 275px;
background: #C4C4C4;
border-radius: 20px;

}
.rect4{
position: absolute;
width: 164 px;
height: 127px;
left: 87px;
top: 450px;
background: #C4C4C4;
border-radius: 20px;

}
.rect5{
position: absolute;
width: 164 px;
height: 127px;
left: 556px;
top: 450px;
background: #C4C4C4;
border-radius: 20px;

}
.rect6{
position: absolute;
width: 164 px;
height: 127px;
left: 200px;
top: 450px;
background: #C4C4C4;
border-radius: 20px;
}

</style>