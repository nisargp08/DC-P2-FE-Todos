<template>
<div id="app">
    <div class="min-h-screen bg-primary">
        <div class="flex flex-col h-full md:max-w-screen-md md:mx-auto">
            <h1 class="font-raleway font-bold text-4xl text-white text-center mt-8">#todo</h1>
            <tabs :tabs="tabs" :initialTab="initialTab" class="mx-8 flex-1">
                <!-- 'All' Tab -->
                <template slot="tab-head-all">
                    <p>All</p>
                    <div class="border-wrapper"></div>
                </template>
                <template slot="tab-body-all">
                    <!-- Add Tasks -->
                    <add-task></add-task>
                    <!-- All tasks -->
                    <div v-if="tasks.length > 0">
                        <div v-for="task in tasks" :key="task.id" class="my-8">
                            <list-task :task="task"></list-task>
                        </div>
                    </div>
                    <div v-else class="text-center my-10">
                        <p class="font-montserrat font-medium text-base leading-6 text-white">You have not created any tasks !</p>
                    </div>
                </template>

                <!-- 'Active' Tab -->
                <template slot="tab-head-active">
                    <p>Active</p>
                    <div class="border-wrapper"></div>
                </template>
                <template slot="tab-body-active">
                    <!-- Add Tasks -->
                    <add-task></add-task>
                    <!-- Active/Incomplete tasks -->
                    <div v-if="activeTasks.length > 0">
                        <div v-for="task in activeTasks" :key="task.id" class="my-8 flex items-center">
                            <list-task :task="task"></list-task>
                        </div>
                    </div>
                    <div v-else class="text-center my-10">
                        <p class="font-montserrat font-medium text-base leading-6 text-white">You have no active tasks !</p>
                    </div>
                </template>

                <!-- 'Completed' Tab -->
                <template slot="tab-head-completed">
                    <p>Completed</p>
                    <div class="border-wrapper"></div>
                </template>
                <template slot="tab-body-completed">
                    <!-- Active/Incomplete tasks -->
                    <div v-if="completedTasks.length > 0">
                        <div v-for="task in completedTasks" :key="task.id" class="my-8 flex items-center justify-between">
                            <list-task :task="task"></list-task>
                            <div>
                                <button @click="deleteSingle(task.id)" class="focus:outline-none">
                                    <svg class="w-6 h-6 fill-current text-gray-1 hover:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="text-right">
                            <button @click="deleteAll()" class="inline-flex items-center font-montserrat font-semibold text-xs leading-4 text-white py-3 px-6 bg-red-600 rounded-12px shadow-2xl hover:bg-red-700 focus:outline-none focus:shadow-danger">
                                <svg class="w-4 h-4 fill-current text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                                </svg>
                                <span class="pl-2">Delete all</span>
                            </button>
                        </div>
                    </div>
                    <div v-else class="text-center my-6">
                        <p class="font-montserrat font-medium text-base leading-6 text-white">You have no completed tasks !</p>
                    </div>
                </template>

            </tabs>
            <footer class="text-center my-16">
              <p class="font-montserrat font-bold text-sm leading-6 text-gray-500">Nisarg Patel @ Devchallenges.io</p>
            </footer>
        </div>
    </div>
</div>
</template>

<script>
import Tabs from '@/components/Tabs.vue';
import AddTask from '@/components/AddTask.vue';
import ListTask from '@/components/ListTask.vue';

export default {
    name: 'App',
    data() {
        return {
            //Tabs information
            tabs: ['all', 'active', 'completed'],
            initialTab: 'all',
        }
    },
    components: {
        Tabs,
        AddTask,
        ListTask,
    },
    computed: {
        //Returns all the stored tasks
        tasks() {
            return this.$store.state.tasks;
        },
        //Return all active tasks
        activeTasks() {
            return this.$store.state.tasks.filter(task => task.isCompleted == false);
        },
        //Return all finished tasks
        completedTasks() {
            return this.$store.state.tasks.filter(task => task.isCompleted == true);
        }
    },
    methods: {
        //To delete single task from the list
        deleteSingle(taskId) {
            //Dispatch action 'removeSingleTask' to remove a task
            this.$store.dispatch('removeSingleTask', taskId);
        },
        deleteAll() {
            //Dispatch action 'removeAllCompletedTask' to remove all tasks
            this.$store.dispatch('removeAllCompletedTask');
        }
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

    header {
        @apply border-b border-gray-700
    }

    .tab-heads {
        @apply flex items-center justify-between;

        .tab-head {
            @apply flex-1 font-montserrat font-semibold text-sm leading-4 text-center text-gray-300;

            p {
                @apply pb-4;
            }
        }

        .border-wrapper {
            @apply border-b rounded-tabActive border-b-4 border-transparent
        }

        .tab-active .border-wrapper {
            @apply border-red-600;
        }
    }
}
</style>
