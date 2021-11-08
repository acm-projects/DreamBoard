<template>
  <div>
    <div><h1 class="uploadtext">Please upload an image</h1></div>
    
    <!-- <form >
      <div>
      <input v-model="message">
      <p>Message is: {{message}}</p>
      </div>
    </form> -->

    <div class="mb-3">
      <label for="formFile" class="form-label"
        >Choose image from files<br
      /></label>
      <input class="form-control" type="file" id="formFile" />
    </div>
    <div class="submitButton">
      <p>Submit!</p>
    </div>
  </div>
</template>

<script>
// export default {
//   data(){
//     return {
//       message: 'Hello world'
//     }
//   }
// }
</script>

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

.uploadtext {
  padding: 6%;
}
</style>