<template>
  <div class="home">
    <!-- <img alt="AvoRed logo" height="50"  src="../assets/logo.svg"> -->
    <div class="sm:w-2/5 flex flex-col items-center sm:items-start text-center sm:text-left">
         
      </div>
    
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
