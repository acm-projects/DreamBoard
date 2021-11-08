<template>
    <div id="nav">
    <ul class="header">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/colorpicker">Color Picker</router-link></li>
      <li><router-link to="/fileupload">File Upload</router-link></li>
      <li><router-link to="/resultspage">Results Page</router-link></li>
      <li style="float: right"><router-link to="/savedpage">Saved Page</router-link></li>
      <li style="float: right"><router-link to="/login">Login</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
//   props: {
//     msg: String
//   }
}
</script>

<style scoped>
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