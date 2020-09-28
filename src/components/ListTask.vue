<template>
<article class="flex items-center">
    <div>
        <input @change="taskUpdated()" :id="task.id" v-model="task.isCompleted" type="checkbox" class="form-checkbox w-6 h-6 border border-placeholder rounded-md cursor-pointer focus:shadow-danger focus:border-transparent text-red-600">
    </div>
    <div class="ml-2">
        <label :for="task.id" class="font-montserrat font-medium text-base leading-6 text-white cursor-pointer" :class="{ 'line-through' : task.isCompleted }">{{ task.name }}</label>
    </div>
</article>
</template>

<script>
export default {
    props: {
        task: {
            type: Object,
            required: true
        }
    },
    methods: {
        taskUpdated() {
            //Dispatch action 'updateTask' to update the status of tasks
            this.$store.dispatch('updateTask', this.task);
        }
    }
}
</script>

<style>

</style>
