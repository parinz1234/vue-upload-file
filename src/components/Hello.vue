<template>
  <div class="hello">
    <input @change="uploadImage" class="photo-input" type="file" accept="image/*" id="capture" capture="camera"> 
  </div>
</template>

<script>
  export default {
    methods: {
      uploadImage (event) {
        let file = event.target.files[0]
        let data = new FormData()
        console.log(file.name)
        data.append('sampleFile', file, file.name)
        console.log(data.getAll('sampleFile'))
        for (var pair of data.entries()) {
          console.log(pair[0] + ', ' + pair[1])
        }
        fetch('http://localhost:3000/upload', {
          method: 'POST',
          body: data
        })
          .then(response => console.log(response))
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
