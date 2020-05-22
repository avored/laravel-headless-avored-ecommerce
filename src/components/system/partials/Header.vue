<template>
    <div>
        <header class="flex items-center justify-between py-3 px-3 shadow border-gray-500 relative">
              <h3 class="text-xl text-red-900">
                  <router-link :to="{ name: 'home'}">
                    <img alt="AvoRed logo" class="w-8 h-8 inline-block"  src="@/assets/logo.svg" /> voRed
                  </router-link>
              </h3>
              <nav class="hidden md:flex">
                    <template v-if="!isNil(AllCategories) && AllCategories.data.length > 0" >
                        <router-link :to="{ name: 'category.show', params: { slug: category.slug }}"
                            v-for="(category, index) in AllCategories.data" :key="index" 
                            class="text-gray-800 hover:text-gray-500 py-3 px-6">
                            {{ category.name }}
                        </router-link>
                    </template>
                    <router-link :to="{name: 'cart.show'}" class="text-gray-800 hover:text-gray-500 py-3 px-6">
                        Cart
                    </router-link>
                    <router-link 
                        :to="{name: 'checkout.show'}" 
                        class="text-gray-800 hover:text-gray-500 py-3 px-6">
                        Checkout
                    </router-link>
                    <router-link :to="{name: 'login'}" class="text-gray-800 hover:text-gray-500 py-3 px-6">
                        Login
                    </router-link>
                    <router-link :to="{name: 'register'}" class="text-gray-800 hover:text-gray-500 py-3 px-6">
                        Register
                    </router-link>
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
import isNil from 'lodash/isNil'
import AllCategories from '@/graphql/Categories.gql'

export default {
    data() {
        return {
            
        }
    },
    apollo: {
         AllCategories: AllCategories,
    },
    methods: {
       isNil,
    }
}
</script>
