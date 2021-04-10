import {fetchTasks, addTask, deleteTask, updateTask} from "./TaskActions.js"

const store = new Vuex.Store({
    state: {
        tasks: [],
        loading: false
    },
    mutation: {
        ADD_TASK(state, task){
            state.tasks.push(task);
        },
        DELETE_TASK(state, task){
            const index = state.tasks.indexOf(task);
            state.tasks.splice(index, 1);
        },
        SET_STATUS_TASK(state, [task, status]){
            const index = state.tasks.indexOf(task);
            state.tasks[index].status = status;
        },
        UPDATE_TASK(state, [taskId, task]){
            
        },
        SET_LOADING(state){
            state.loading = !state.loading
        }
    },
    actions: {
        async getTasks({dispatch}){
            commit("SET_LOADING")
            let tasks = await fetchTasks();
            commit("SET_LOADING")

            return tasks
        },
        async addTask({commit}, taskBody){
            const task = await addTask(taskBody)
            commit("ADD_TASK", task)

            return task
        },
        async removeTask({commit}, taskId){
            const task = await deleteTask(taskId)
            commit("DELETE_TASK", taskId)
            
            return task
        },
        async updateTask({commit}, {taskId, taskBody}){
            const task = await updateTask(taskId, taskBody)
            commit("UPDATE_TASK", [taskId, task])

            return task
        }
    }

})

export default store;