<template>
  <div>
    <ul class="header">
      <li><a href="colorpalette.asp">Upload Color Palette</a></li>
      <li><a href="furniture.asp">Upload Furniture</a></li>
      <li><a href="designs.asp">My Designs</a></li>
      <li style="float: right"><a href="signIn.asp">Log In/Sign Up</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
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
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: rgb(97, 100, 81);
}

li {
  float: left;
}

a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: rgb(72, 73, 60);
}
</style>