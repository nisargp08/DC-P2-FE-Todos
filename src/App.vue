<template>
<div id="app">
    <div class="min-h-screen bg-primary">
        <div class="flex flex-col">
            <h1 class="font-raleway font-bold text-4xl text-white text-center mt-8">#todo</h1>
            <tabs :tabs="tabs" :initialTab="initialTab">
                <!-- 'All' Tab -->
                <template slot="tab-head-all">
                    <p>All</p>
                    <div class="border-wrapper"></div>
                </template>
                <template slot="tab-body-all">
                    <div>
                      
                    </div>
                </template>

                <!-- 'Active' Tab -->
                <template slot="tab-head-active">
                    <p>Active</p>
                    <div class="border-wrapper"></div>
                </template>
                <template slot="tab-body-active">
                    This is active content
                </template>

                <!-- 'Completed' Tab -->
                <template slot="tab-head-completed">
                    <p>Completed</p>
                    <div class="border-wrapper"></div>
                </template>
                <template slot="tab-body-completed">
                    This is completed content
                </template>

            </tabs>
        </div>
    </div>
</div>
</template>

<script>
import Tabs from '@/components/Tabs.vue';

export default {
    name: 'App',
    data() {
        return {
            tabs: ['all', 'active', 'completed'],
            initialTab: 'all'
        }
    },
    components: {
        Tabs
    }
}
</script>

<style lang="scss">
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.tabs {
    @apply mt-12;
    header{
      @apply border-b border-gray-700
    }
    .tab-heads {
        @apply flex items-center justify-between mx-8;

        .tab-head {
            @apply flex-1 font-montserrat font-semibold text-sm leading-4 text-center text-gray-300;

            p{
              @apply pb-4;
            }
        }
        .border-wrapper{
          @apply border-b rounded-tabActive border-b-4 border-transparent
        }
        .tab-active .border-wrapper{
            @apply border-red-600;
        }
    }
}
</style>
