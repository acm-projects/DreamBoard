<template>
    <div class="container">
    <img src="@/assets/rustic-living-room.png" alt="rustic room" style="width:140%;">
    <div class="signInText">
      <h1>Welcome back to DreamBoard<br>Please sign in</h1>
      
    <form>
      <div class="form-group">
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">      </div>
    </form>
    
    <form>
      <div class="form-group">
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter password">      </div>
    </form>

    </div>
    </div>
</template>

<script>
export default {
  name: 'SignInBox',
}
</script>

<style scoped>
.container {
  position: absolute;
  text-align: center;
  color: white;
}

img {
  opacity: 0.6;
}
.signInText {
  padding: 1px 20px 20px;
  background-color: rgba(119, 111, 89, 0.87);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.form-group {
  padding: 3px 5px;
}
</style>