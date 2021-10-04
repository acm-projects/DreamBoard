<template>
  <div class="container">
    <div class="design_statement">
      <p>Design your dream room from the comfort of your own home!</p>
    </div>
    <div class="paragraph">
      <p>
        Choose a color palette or upload <br />a picture of your room and we’ll
        <br />create a personalized list of <br />furniture and accessories that
        <br />complement your style. <br />Select an option above to get
        started!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BluePastelPic",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.container {
  flex-direction: column;
  /*align-items: flex-end;*/
  left: 800px;
  top: 229px;
  background-color: #e0eef2;
  font-size: 50;
  color: #fffdfd;
}
.design_statement {
  padding-top: 25px;
  padding-right: 25px;
  padding-left: 25px;
  background: rgba(116, 167, 196, 0.87);
  width: 467px;
  height: 523px;
  /*position: relative;*/
  font-family: Ruda;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  /*line-height: 54px;*/
  color: #fffdfd;
}

.paragraph {
  background: rgba(116, 167, 196, 0.87);
  width: 467px;
  height: 523px;
  font-family: Rounded Mplus 1c;
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  line-height: 45px;
  color: #fffdfd;
}
</style>