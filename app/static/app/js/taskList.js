var template = `
    <div class="col-md-4 task-list" style="background-color: cornflowerblue">
        <div class="row">
            <div class="col-md-6">
                <h3><b>{{ title }}</b></h3>
            </div>
            <div class="col-md-6">
                <div class="container">
                    <input v-model="search" class="form-control mr-sm-2" type="search" placeholder="Pesquisar task" aria-label="Search">
                </div>
            </div>

        </div>
        
        <div class="row box">
            <template v-for='task in filteredTasks'>
                <task-item v-bind:task='task' v-bind:key='task.id'>
                </task-item>
            </template>
        </div>
    </div>
`;
const headers = {
    "Content-Type": "application/json",
    "X-CSRFToken": Cookies.get('csrftoken')
}

export const tasklist = Vue.component('task-list', {
    template: template,
    delimiters: ['{{', '}}'],
    props: ["tasks", "title", "status"],
    data: function() {
      return  {
          search: ""
      }
    },
    methods: {
    },
    computed: {
        filteredTasks: function(){
            let tasks = this.tasks
            let search = this.search
            if(search){
                tasks = tasks.filter(task => {
                    return task.title.includes(search) || task.text.includes(search)
                })
            }

            return tasks
        }
    }
})