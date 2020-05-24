<template>
  <div class="px-3 w-full">
      <h1 class="text-2xl pb-5">
        {{  $t('cart_page_title') }}
      </h1>
        <cart-items :cart-items="cartItems" />
      <div class="flex items-center border-t border-gray-300 px-4 pt-4 pb-10 sm:px-6">
          <div class="w-3/6"></div>
          <div class="w-1/6"></div>
          <div class="w-1/6"></div>
          <div class="w-1/6 text-red-600 font-semibold">
            <router-link
              :to="{name: 'checkout.show'}"
              class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 transition duration-150 ease-in-out"
            >{{ $t('checkout') }}
            </router-link>
          </div>
      </div>
  </div>
</template>

<script>
import CartItems from '@/components/CartItems.vue'
import {CART_ITEM} from '@/constants/index'
export default {
  name: 'Cart',
  components: {
      'cart-items': CartItems
  },
  
  data() {
    return {
      cartItems: []
    }
  },
  methods: {
    
  },
  mounted() {
    this.cartItems = JSON.parse(localStorage.getItem(CART_ITEM)) ?? []
  }
}
</script>
