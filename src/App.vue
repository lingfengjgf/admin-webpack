<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import { ref } from 'vue';
export default ({
  setup(){
    const msg = ref(1);

    setInterval(()=>{
      msg.value++;
    }, 1000)

    return { msg };
  }
})
</script>

<style scoped>
  h1{
    color: red;
  }
</style>