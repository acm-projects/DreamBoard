<template>
  <div class="container">
    <div class="box"></div>
    <img
      class="radiustest"
      src="@/assets/rustic-living-room.png"
      alt="rustic room"
      style="width: 140%"
    />
    <div class="signInText">
      <h1>Welcome back to DreamBoard<br />Please sign in</h1>

      <form>
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
      </form>

      <form>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Enter password"
          />
        </div>
      </form>
      <div class="submitButton">
      <p>Submit!</p>
    </div>
    </div>
  </div>
</template>

<style scoped>

.submitButton{
  margin: auto;
  display: block;
  background-color: rgb(172, 196, 197);
  width: 20%;
}

.submitButton:hover {
  /*background-color: rgb(72, 73, 60);*/
  background-color: rgb(73, 104, 122);
}

.container {
  position: absolute;
  text-align: center;
  color: white;
}

.box{
    padding-top: 5%;
}

.radiustest {
  opacity: 0.6;
}
.signInText {
  padding: 1px 20px 20px;
  background-color: rgba(116, 167, 196, 0.87);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.form-group {
  padding: 3px 5px;
}
</style>