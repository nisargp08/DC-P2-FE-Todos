<template>
  <div class="tabs">
      <header>
      <ul class="tab-heads">
          <li class="tab-head cursor-pointer" 
            v-for="(tab,index) in tabs" 
            :key="index"
            @click="switchTab(tab)"
            :class="{'tab-active' : activeTab == tab}"
            >
              <!-- Tab Heading in named slot-->
              <slot :name="tabHeadSlot(tab)">{{ tab }}</slot>
          </li>
      </ul>
      </header>
      <main>
          <div class="tab-body">
              <!-- Tab body/content in a named slot -->
              <slot :name="tabBodySlot"></slot>
          </div>
      </main>
  </div>
</template>

<script>
export default {
    name : "Tabs",
    props : {
        //Active tab by default
        initialTab : String,
        //All the tabs
        tabs : Array,
    },
    data(){
        return{
            activeTab : this.initialTab
        }
    },
    computed : {
        tabBodySlot(){
            return `tab-body-${this.activeTab}`;
        }
    },
    methods : {
        tabHeadSlot(tabName){
            return `tab-head-${tabName}`;
        },
        switchTab(tabName){
            this.activeTab = tabName;
        }
    }
}
</script>

<style>

</style>