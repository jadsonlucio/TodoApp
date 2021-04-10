import * as component from "./todo.js";
import * as tododa from "./todocad.js"
import * as tasklist from "./TaskList.js"
import store from "./store/index.js"

var app = new Vue({
    el: '#app',
    delimiters: ['${', '}'],
    data: {
        todos: []
    },
    methods: {
        fetch_data: function() {
            var self = this;
            axios.get('/api/todos/')
            .then(function (response) {
                self.todos = response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        cad_todo_handler: function(todo){
            this.todos.push(todo)
        },
        delete_todo: function(todo){
            const index = this.todos.indexOf(todo)
            this.todos.splice(index, 1)
        },
        get_todos: function(status){
            return this.todos.filter((todo) => {
                return todo.status == status
            })
        }
    },
    created: function () {
        this.fetch_data()
      }
}, store)
