<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> --> 
    <HelloWorld msg="Welcome to DreamBoard."/>
 <BluePastelPic/>
  </div>
</template>


<script>
import HelloWorld from './components/HelloWorld.vue'
import BluePastelPic from './components/BluePastelPic.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    BluePastelPic
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.pic{
  z-index: -1;
}
</style>
