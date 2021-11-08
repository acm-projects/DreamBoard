<template>
  <NavBar/>
  <router-view/>
</template>

<script>
import NavBar from './components/NavBar.vue'


export default {
  name: 'App',
  components: {
    NavBar
  },
}
</script>

<style>
body {
  /*background-color: rgb(130, 134, 102);*/
  background-color: rgba(116, 167, 196, 0.87)
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/*#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}*/

 img {
   max-width: 60%;
   max-height: auto;
   border-radius: 20px;
 }

 .header {
  position: fixed; /* fixing the position takes it out of html flow - knows
                   nothing about where to locate itself except by browser
                   coordinates */
  left: 0; /* top left corner should start at leftmost spot */
  top: 0; /* top left corner should start at topmost spot */
  width: 100vw; /* take up the full browser width */
  z-index: 200; /* high z index so other content scrolls underneath */
  height: 50px; /* define height for content */
}
#nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  /*background-color: rgb(97, 100, 81);*/
  background-color: rgb(100, 139, 161);
}

#nav li {
  float: left;
}

#nav a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  display: block;
  color: rgb(51, 74, 90);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

#nav li a:hover {
  /*background-color: rgb(72, 73, 60);*/
  background-color: rgb(73, 104, 122);
}
</style>
