<template>
  <div class="px-3">
    <div class="py-10">
          <h1 class="text-2xl uppercase mb-8">HOME PAGe</h1>
          <div class="px-4">
            <div class="block md:flex justify-between md:-mx-2">
              <template v-if="products.length > 0">
                  <product-card v-for="(product, index) in products" :key="index">

                  </product-card>

              </template>
              
            </div>
          </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import ProductCard from '@/components/catalog/ProductCard.vue'

export default {
  name: 'Home',
  components: {
    'product-card': ProductCard
  },
  data() {
    return {
      products: [1, 2, 3, 4]
    }
  }
}
</script>
