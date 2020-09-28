<template>
<!-- Add Tasks -->
<form @submit.prevent>
    <div class="mt-4 flex flex-wrap">
        <div class="flex-1">
            <input v-model.trim="taskData" class="font-montserrat font-normal text-sm leading-4 text-white py-5 px-3 border border-gray-1 rounded-12px bg-transparent w-95 focus:outline-none" type="text" placeholder="add details">
        </div>
        <button @click="addTask" class="font-montserrat font-semibold text-sm leading-4 text-white py-5 px-10 bg-red-600 rounded-12px shadow-2xl hover:bg-red-700 focus:outline-none focus:shadow-danger">Add</button>
    </div>
</form>
</template>

<script>
export default {
    data() {
        return {
            //Task data box
            taskData: '',
        }
    },
    methods: {
        addTask() {
            //If task not empty then proceed
            if (this.taskData != "") {
                //Preparing task object
                let task = {
                    id: this.generateId(),
                    isCompleted: false,
                    name: this.taskData
                };
                //Dispatch action 'addTask' to add task
                this.$store.dispatch('addTask', task);
                //Once added clear textbox
                this.taskData = "";
            }
        },
        generateId() {
            //Function to generate unique id
            return "xxxxxxxxxxxxxxxx".replace(/[xy]/g, function (c) {
                var r = (Math.random() * 16) | 0,
                    v = c == "x" ? r : (r & 0x3) | 0x8;
                return v.toString(16);
            });
        }
    }
}
</script>

<style>

</style>
