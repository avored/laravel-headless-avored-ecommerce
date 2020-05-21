<template>
    <div>
        <div class="bg-gray-200 p-6">
            <div class="bg-white flex flex-col font-sans">
                <div class="container mx-auto px-8">
                    <app-header></app-header>
                    <main class="flex flex-col-reverse sm:flex-row jusitfy-between items-center py-12">
                        <slot/>
                    </main>
                    <app-footer></app-footer>
                </div>
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
