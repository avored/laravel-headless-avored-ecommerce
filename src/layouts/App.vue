<template>
    <div class="px-5">
        <div class="bg-gray-200">
            <div class="bg-white flex flex-col">
                
                <app-header></app-header>
                <main class="flex jusitfy-between items-center px-3 py-10">
                    <slot/>
                </main>
                <app-footer></app-footer>
            </div>
        </div>
    </div>
</template>
<script>
import Header from '@/components/system/partials/Header.vue'
import Footer from '@/components/system/partials/Footer.vue'
export default {
    components: {
      'app-header': Header,
      'app-footer': Footer
    },
    data () {
        return {
          
        }
    },
    methods: {
    }
}
</script>
