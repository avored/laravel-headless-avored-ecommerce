<template>
  <div class="px-3 w-full">
    <h1 class="text-2xl pb-5">{{ $t('checkout_page_title') }}</h1>

    <div class="flex items-start py-5">
      <div class="w-1/2">
        <div class="personal_card">
          <h5 class="py-3 font-semibold text-gray-600">{{ $t('personal_information') }}</h5>

          <div class="flex items-center">
            <div class="w-1/2">
              <div class="mt-3">
                <label for="first_name">{{ $t('first_name') }}</label>
                <input
                  id="first_name"
                  class="border w-full px-3 py-2 rounded-md shadow-sm block my-3 border-gray-300"
                />
              </div>
            </div>
            <div class="w-1/2 ml-3">
              <div class="mt-3">
                <label for="last_name">{{ $t('last_name') }}</label>
                <input
                  id="last_name"
                  class="border w-full px-3 py-2 rounded-md shadow-sm block my-3 border-gray-300"
                />
              </div>
            </div>
          </div>

          <div class="flex items-center">
            <div class="w-full">
              <div class="mt-3">
                <label for="email">{{ $t('email') }}</label>
                <input
                  id="email"
                  class="border w-full px-3 py-2 rounded-md shadow-sm block my-3 border-gray-300"
                />
              </div>
            </div>
          </div>

          <div class="flex items-center">
            <div class="w-1/2">
              <div class="mt-3">
                <label for="password">{{ $t('password') }}</label>
                <input
                  id="password"
                  type="password"
                  class="border w-full px-3 py-2 rounded-md shadow-sm block my-3 border-gray-300"
                />
              </div>
            </div>
            <div class="w-1/2 ml-3">
              <div class="mt-3">
                <label for="password_confirmation">{{ $t('password_confirmation') }}</label>
                <input
                  id="password_confirmation"
                  type="password"
                  class="border w-full px-3 py-2 rounded-md shadow-sm block my-3 border-gray-300"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="address_card">
          <h5 class="py-3 font-semibold text-gray-600">{{ $t('shipping_information') }}</h5>

          <div class="flex items-center">
            <div class="w-1/2">
              <div class="mt-3">
                <label for="first_name">{{ $t('first_name') }}</label>
                <input
                  id="first_name"
                  class="border w-full px-3 py-2 rounded-md shadow-sm block my-3 border-gray-300"
                />
              </div>
            </div>
            <div class="w-1/2 ml-3">
              <div class="mt-3">
                <label for="last_name">{{ $t('last_name') }}</label>
                <input
                  id="last_name"
                  class="border w-full px-3 py-2 rounded-md shadow-sm block my-3 border-gray-300"
                />
              </div>
            </div>
          </div>

          <div class="flex items-center">
            <div class="w-1/2">
              <div class="mt-3">
                <label for="company_name">{{ $t('company_name') }}</label>
                <input
                  id="company_name"
                  class="border w-full px-3 py-2 rounded-md shadow-sm block my-3 border-gray-300"
                />
              </div>
            </div>
            <div class="w-1/2 ml-3">
              <div class="mt-3">
                <label for="phone">{{ $t('phone') }}</label>
                <input
                  id="phone"
                  class="border w-full px-3 py-2 rounded-md shadow-sm block my-3 border-gray-300"
                />
              </div>
            </div>
          </div>

          <div class="flex items-center">
            <div class="w-full">
              <div class="mt-3">
                <label for="address1">{{ $t('address1') }}</label>
                <input
                  id="address1"
                  type="text"
                  class="border w-full px-3 py-2 rounded-md shadow-sm block my-3 border-gray-300"
                />
              </div>
            </div>
          </div>

          <div class="flex items-center">
            <div class="w-1/2">
              <div class="mt-3">
                <label for="address2">{{ $t('address2') }}</label>
                <input
                  id="address2"
                  class="border w-full px-3 py-2 rounded-md shadow-sm block my-3 border-gray-300"
                />
              </div>
            </div>
            <div class="w-1/2 ml-3">
              <div class="mt-3">
                <label for="city">{{ $t('city') }}</label>
                <input
                  id="city"
                  class="border w-full px-3 py-2 rounded-md shadow-sm block my-3 border-gray-300"
                />
              </div>
            </div>
          </div>

          <div class="flex items-center">
            <div class="w-1/2">
              <div class="mt-3">
                <label for="country">{{ $t('country') }}</label>
                <input
                  id="country"
                  class="border w-full px-3 py-2 rounded-md shadow-sm block my-3 border-gray-300"
                />
              </div>
            </div>
            <div class="w-1/2 ml-3">
                <div class="mt-3">
                  <label for="postcode">{{ $t('postcode') }}</label>
                  <input
                    id="postcode"
                    class="border w-full px-3 py-2 rounded-md shadow-sm block my-3 border-gray-300"
                  />
                </div>
            </div>
          </div>
        </div>
      </div>
   
 

  <div class="w-1/2 ml-5">
      <div class="shipping_options_card pb-5 border-b">
          <h5 class="py-3 font-semibold text-gray-600">{{ $t('shipping_options') }}</h5>
          <div class="flex items-center">
              <div class="w-1/2 ml-3">
                  <div class="mt-3 block">
                    
                    <input
                      id="shipping_option"
                      type="radio"
                      class="px-3 py-2 rounded-md shadow-sm my-3"
                    /> 
                    <span class="ml-3 text-gray-600">
                      {{ $t('Pick Up from store') }}
                    </span>
                  </div>
              </div>
          </div>
      </div>

      <div class="payment_options_card pb-5 border-b mt-5">
          <h5 class="py-3 font-semibold text-gray-600">{{ $t('payment_options') }}</h5>
          <div class="flex items-center">
              <div class="w-1/2 ml-3">
                  <div class="mt-3 block">
                    
                    <input
                      id="payment_option"
                      type="radio"
                      class="px-3 py-2 rounded-md shadow-sm my-3"
                    /> 
                    <label for="payment_option" class="ml-3 text-gray-600">
                      {{ $t('Payment on Delivery') }}
                    </label>
                  </div>
              </div>
          </div>
      </div>

      <div class="cart_items_card pb-5 border-b  mt-5">
          <h5 class="py-3 font-semibold text-gray-600">{{ $t('cart_information') }}</h5>
          <div class="flex w-full items-center">
              <cart-items :cart-items="cartItems" />
          </div>
      </div>

  </div>


 </div>
  <div class="flex items-center border-t border-gray-300 px-4 pt-4 pb-10 sm:px-6">
    <div class="w-3/6"></div>
    <div class="w-1/6"></div>
    <div class="w-1/6"></div>
    <div class="w-1/6 text-red-600 font-semibold">
      <router-link
        :to="{name: 'checkout.show'}"
        class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 transition duration-150 ease-in-out"
      >{{ $t('place_order') }}</router-link>
    </div>
  </div>
</div>
</template>

<script>
import sumBy from "lodash/sumBy";
import CartItems from '@/components/CartItems.vue'
import { CART_ITEM } from "@/constants/index";
export default {
  name: "Checkout",
  components: {
    'cart-items': CartItems
  },

  data() {
    return {
      cartItems: []
    };
  },
  methods: {
    cartTotal() {
      return parseFloat(sumBy(this.cartItems, o => o.qty * o.price)).toFixed(2);
    }
  },
  mounted() {
    this.cartItems = JSON.parse(localStorage.getItem(CART_ITEM)) ?? [];
  }
};
</script>