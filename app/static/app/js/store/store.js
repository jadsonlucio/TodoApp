import {fetchTasks, addTask, deleteTask, updateTask} from "./taskActions.js"

function findByMatchingProperties(set, properties) {
    return set.filter(function (entry) {
        return Object.keys(properties).every(function (key) {
            return entry[key] === properties[key];
        });
    });
}

function getElementByKey(set, keyProperties){
    let elements = findByMatchingProperties(set, keyProperties)
    if(elements.length == 1){
        return elements[0]
    }else{
        throw {"error": `element with ${key}=${value} now found`}
    }
}

const store = new Vuex.Store({
    state: {
        tasks: [],
        loading: false
    },
    mutations: {
        SET_TASKS(state, tasks) {
            state.tasks = tasks
        },
        ADD_TASK(state, task){
            state.tasks.push(task);
        },
        DELETE_TASK(state, task) {
            const index = state.tasks.indexOf(task);
            state.tasks.splice(index, 1);
        },
        SET_STATUS_TASK(state, [task, status]) {
            const index = state.tasks.indexOf(task);
            state.tasks[index].status = status;
        },
        UPDATE_TASK(state, [taskId, task]){
            var taskObj = getElementByKey(state.tasks, {id: taskId})
            Object.assign(taskObj, task);
        },
        SET_LOADING(state){
            state.loading = !state.loading
        }
    },
    actions: {
        async fetchTasks({commit}){
            commit("SET_LOADING");
            let response = await fetchTasks();
            let tasks = response.data
            commit("SET_TASKS", tasks)
            commit("SET_LOADING");

            return tasks
        },
        async addTask({commit}, taskBody){
            let response = await addTask(taskBody);
            let task = response.data
            commit("ADD_TASK", task);

            return task
        },
        async removeTask({commit, state}, taskId){
            let response = await deleteTask(taskId);
            let task = getElementByKey(state.tasks, {id: taskId});
            commit("DELETE_TASK", task);
            
        },
        async updateTask({commit}, {taskId, taskBody}){
            let response = await updateTask(taskId, taskBody);
            let task = response.data
            commit("UPDATE_TASK", [taskId, task]);

            return task
        }
    }

})

export default store;