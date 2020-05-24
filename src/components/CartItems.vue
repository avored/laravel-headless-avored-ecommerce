<template>
    <div class="w-full">
      <div class="flex items-center border-b border-gray-300 px-4 py-4 sm:px-6">
          <div class="w-3/6 font-semibold text-gray-700">{{ $t('item_information') }}</div>
          <div class="w-1/6 font-semibold text-center text-gray-700">{{ $t('qty') }}</div>
          <div class="w-1/6 font-semibold text-center text-gray-700">
            {{ $t('price') }}
          </div>
          <div class="w-1/6 font-semibold text-right text-gray-700">
            {{ $t('line_total') }}
          </div>
      </div>
      <ul class="mt-5">
          <template v-if="cartItems.length > 0">
            <li v-for="(item) in cartItems" :key="item.id">
                <div class="flex items-center px-4 py-4 sm:px-6">
                  <div class="w-3/6 flex items-center">
                      <img class="h-12 w-12 rounded-full" :src="item.main_image_url" :alt="item.name" />
                      <div class="px-4">
                          <div class="text-md text-red-600 truncate">
                            {{ item.name }}
                          </div>
                          <div class="mt-2 flex items-center text-xs leading-5 text-gray-500">
                            <span class="truncate">ATTRIBUTES: Color: Red, Size: 10 </span>
                          </div>
                      </div>
                  </div>
                  <div class="w-1/6 text-center">
                    {{  item.qty }}
                  </div>
                  <div class="w-1/6 text-center">
                    ${{ parseFloat(item.price).toFixed(2) }}
                  </div>

                  <div class="w-1/6 text-right">
                    ${{ parseFloat(item.price * item.qty).toFixed(2) }}
                  </div>
                </div>
            </li>
        </template>
      </ul>

      <div class="flex items-center border-t border-gray-300 px-4 py-4 sm:px-6">
          <div class="w-3/6"></div>
          <div class="w-1/6"></div>
          <div class="w-1/6 text-center font-semibold text-gray-700">
            {{ $t('total') }}
          </div>
          <div class="w-1/6 text-right text-red-600 font-semibold">
            ${{ cartTotal() }}
          </div>
      </div>
</div>  
</template>

<script>

import sumBy from 'lodash/sumBy'
export default {
    props: {
        cartItems: { type: [Array]}
    },
    methods: {
        cartTotal() {
            return parseFloat(sumBy(this.cartItems, (o) => o.qty * o.price)).toFixed(2)
        }
    }
}
</script>