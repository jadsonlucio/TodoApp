import * as component from "./task.js";
import * as tododa from "./taskCad.js"
import * as tasklist from "./taskList.js"
import store from './store/store.js'

//Vue.use(storePlugin)

var app = new Vue({
    el: '#app',
    store,
    delimiters: ['${', '}'],
    data: {
    },
    computed: {
        tasks: function(){
            return this.$store.state.tasks;
        }
    },
    methods: {
        get_tasks(status){
            return this.tasks.filter((task) => {
                return task.status == status;
            }) 
        }
    },
    created: function () {
        this.$store.dispatch("fetchTasks");
    }
})
