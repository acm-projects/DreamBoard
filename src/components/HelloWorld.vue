<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!---<div class="pic">
    <img src= "@/assets/blue-pastel-room.jpg" alt="blue pastel living room">
  </div> --->
    <!---<h2>Rectangle CSS</h2>--->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  position: relative;
  width: 1440px;
  height: 500;
  background-color: #e0eef2;
  z-index: -1;
}
</style>
