<template>
    <div>
        <header class="flex flex-col sm:flex-row items-center justify-between py-6 relative">
              <h3 class="text-2xl font-bold uppercase text-blue-900">Logo</h3>
              <nav class="hidden md:flex text-lg">
                  <a href="#" class="text-gray-800 hover:text-purple-300 py-3 px-6">Home</a>
                  <a href="#" class="text-gray-800 hover:text-purple-300 py-3 px-6">Services</a>
                  <a href="#" class="text-gray-800 hover:text-purple-300 py-3 px-6">About</a>
                  <a href="#" class="text-gray-800 hover:text-purple-300 py-3 px-6">Contact</a>
                  <a href="#" class="text-gray-800 hover:text-purple-300 py-3 px-6">FAQ</a>
                  <a href="#" class="bg-purple-200 hover:bg-purple-300 rounded-full uppercase text-purple-700 py-3 px-6">Sign Up</a>
              </nav>
              <button class="flex md:hidden flex-col absolute top-0 right-0 p-4 mt-5">
                  <span class="w-5 h-px mb-1 bg-orange-500"></span>
                  <span class="w-5 h-px mb-1 bg-orange-500"></span>
                  <span class="w-5 h-px mb-1 bg-orange-500"></span>
              </button>
          </header>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
       
    }
}
</script>
