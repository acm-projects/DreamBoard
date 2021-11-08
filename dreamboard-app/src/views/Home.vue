<template>
<div>
  <div class="pic">
    <img src="@/assets/lampsroom.jpg" alt="blue pastel living room" >
    </div>
    <div class="container">
      <div class="design_statement">
        <p>Design your dream room from the comfort of your own home!</p>
        </div>
      <div class="paragraph">
        <p>
          Choose a color palette or upload <br />a picture of your room and
          we’ll <br />create a personalized list of <br />furniture and
          accessories that <br />complement your style. <br />Select an option
          above to get started!
        </p>
        </div>
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
    width: 450px;
    height: 800px;
  /*flex-direction: column;*/
  /*align-items: flex-end;*/
  position: absolute;
  right: 250px;
  top: 100px;
  font-size: 50;
  color: #e0eef2;
}
.design_statement {
  padding-top: 10px;
  padding-right: 2px;
  padding-left: 25px;
  padding-bottom: 0px;
   height: 275px;
  background: rgba(116, 167, 196, 0.87);
  font-family: Ruda;
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
 
  padding-top: 15px;
  padding-right: 25px;
  padding-left: 25px;
  padding-bottom: 15px;
  color: #fffdfd;
}
.pic {
  max-width: 100%;
  
  overflow: hidden;
  padding: 15%;
}
</style>