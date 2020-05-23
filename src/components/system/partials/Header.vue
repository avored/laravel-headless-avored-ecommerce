<template>
    <div :key="componentKey">
        <header class="flex items-center justify-between py-3 px-3 shadow border-gray-500 relative">
              <h3 class="text-xl text-red-900">
                  <router-link :to="{ name: 'home'}">
                    <img alt="AvoRed logo" class="w-8 h-8 inline-block"  src="@/assets/logo.svg" /> voRed
                  </router-link>
              </h3>
              <nav class="hidden md:flex">
                    <template v-if="!isNil(categories) && categories.data.length > 0" >
                        <router-link :to="{ name: 'category.show', params: { slug: category.slug }}"
                            v-for="(category, index) in categories.data" :key="index" 
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
                    <router-link v-if="!isAuth()" :to="{name: 'login'}" class="text-gray-800 hover:text-gray-500 py-3 px-6">
                        Login
                    </router-link>
                    <router-link v-if="!isAuth()"  :to="{name: 'register'}" class="text-gray-800 hover:text-gray-500 py-3 px-6">
                        Register
                    </router-link>
                    <router-link :to="{name: 'account.dashboard'}" class="text-gray-800 hover:text-gray-500 py-3 px-6">
                        Account
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
import {AUTH_TOKEN} from '@/constants/index'
import isNil from 'lodash/isNil'
import categories from '@/graphql/Categories.gql'

export default {
    data() {
        return {
            componentKey: 0,
        }
    },
    apollo: {
         categories: categories,
    },
    methods: {
       isNil,
       isAuth() {
            const accessToken = localStorage.getItem(AUTH_TOKEN)
            return !isNil(accessToken)
       }
    },
    mounted() {
        
    }
}
</script>
