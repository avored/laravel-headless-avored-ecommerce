<template>
  <div class="home">
    <img alt="AvoRed logo" height="50"  src="../assets/logo.svg">
    <HelloWorld msg="Welcome to Laravel Headless Ecommerce App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/ApolloExample.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
