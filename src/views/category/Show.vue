<template>
  <div class="home">
    <div class="py-10">
      <ApolloQuery
        :query="require('@/graphql/GetCategory.gql')"
        :variables="{
          slug: $route.params.slug,
        }"
        class="form"
        @done="category = {}"
      >
        <template slot-scope="{ result: { data } }">
          <h1 class="text-2xl uppercase mb-8">{{ data.CategoryQuery.name }}</h1>
          <div class="px-4">
            <div class="block md:flex justify-between md:-mx-2">
              <template v-if="products.length > 0">
                  <product-card v-for="(product, index) in products" :key="index">

                  </product-card>

              </template>
              
            </div>
          </div>
        </template>
      </ApolloQuery>
    </div>

  </div>
</template>

<script>
import ProductCard from '@/components/catalog/ProductCard.vue'

export default {
  name: 'CategoryShow',
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
