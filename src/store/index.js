import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

/* eslint-disable no-new */
const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {},
  state: {
    tasks: [],
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    updateTask(state, task) {
      state.tasks[task.index] = task.task;
    },
  },
  actions: {
    addTask({ commit, state }, task) {
      //Store all the existing tasks in to a local array
      const tasks = state.tasks;
      //Added the received 'task' to the local array
      tasks.push(task);
      //Commit the mutation to update the 'state' - 'tasks'
      commit("setTasks", tasks);
    },
    updateTask({ commit, state }, task) {
      //Find the task index to update
      let taskIndex = "";
      Object.entries(state.tasks).forEach(([key, item]) => {
        if (item.id == task.id) {
          taskIndex = key;
        }
      });
      if (task != "" && taskIndex != "") {
        const updatedTask = {
          index: taskIndex,
          task: task,
        };
        //COmmit mutation to update task status
        commit("updateTask", updatedTask);
      }
    },
    removeSingleTask({ commit, state }, taskId) {
      //Find the tasks that do not match the paseed id
      let tasks = state.tasks.filter((task) => task.id !== taskId);
      //Call the mutation with filtered tasks
      commit("setTasks", tasks);
    },
    removeAllCompletedTask({ commit, state }) {
      //Find all the completed tasks and store only uncompleted ones
      let tasks = state.tasks.filter((task) => task.isCompleted !== true);
      //Call the mutation with filtered tasks
      commit("setTasks", tasks);
    },
  },
});

export default store;
