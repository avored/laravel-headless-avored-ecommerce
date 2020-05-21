<template>
    <div class="w-full lg:w-1/4 md:mx-2 mb-4 md:mb-0 hover:shadow-lg transform duration-300 hover:-translate-y-2">
        <div class="bg-white rounded-lg overflow-hidden shadow relative">
            <img class="h-56 w-full object-cover object-center" src="@/assets/upload/omid-armin-fxJIHyWTRu4-unsplash.jpg" alt="">
            <div class="p-4">
                <a href="#" class="block text-red-700 hover:text-red-500 font-semibold mb-2 text-lg md:text-base lg:text-lg">
                    Woman standing under blue sky
                </a>
                <div class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quidem blanditiis unde asperiores? Officia amet perspiciatis ad quibusdam incidunt eaque, nobis, eveniet neque porro id commodi quisquam debitis!
                </div>

                <div class="mt-5 text-red-700 text-lg font-semibold">
                    $50.45
                </div>
            
                <button 
                    class="block mt-3 text-white text-xs py-3 px-10 rounded uppercase  shadow bg-gray-700 hover:bg-red-700 focus:shadow-outline focus:outline-none">
                    Add To Cart
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'product-card'
}
</script>