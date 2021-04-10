var template = `
    <div class="col-md-4 task-list" style="background-color: cornflowerblue">
        <h3><b>{{ title }}</b></h3>
        <div class="row box">
            <template v-for='task in tasks'>
                <todo-item @del_todo='delete_task' v-bind:todo='task' v-bind:key='task.id'>
                </todo-item>
            </template>
        </div>
    </div>
`;
const headers = {
    "Content-Type": "application/json",
    "X-CSRFToken": Cookies.get('csrftoken')
}

export const tasklist = Vue.component('tasklist', {
    template: template,
    delimiters: ['{{', '}}'],
    props: ["tasks", "title", "status"],
    data: function() {
      return  {}
    },
    methods: {
        delete_task: function(todo){
            this.$emit("rm_todo", todo)
        }
    }
})