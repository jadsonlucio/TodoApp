var template = `
    <div class="col-md-6 mt-2">
        <div class="card bg-light task">
            <div class="card-body">
                <div className="row">
                    <span class="badge badge-pill badge-info mb-2">Data criação: {{ task.create_date }}</span>
                    <h5 class="card-title"><b>{{ task.title }}</b></h5>
                </div>
                <div class="row ml-1">
                    <p class="card-text">{{ task.text }}</p>
                </div>
                
                <div class="row mb-2 mt-2">
                    <div class="col-sm-6">
                        <span v-if="task.start_date" class="badge badge-primary">Inicio: {{ task.start_date }}</span>
                    </div>
                    <div class="col-sm-6">
                        <span v-if="task.end_date" class="badge badge-success">Fim: {{ task.end_date }}</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <button v-if="task.status == 0" v-on:click="set_doing" class="btn btn-secondary mb-2">Doing</button>
                    </div>
                    <div class="col-sm-4">
                        <button v-if="task.status == 1 || task.status == 0" v-on:click="set_done" class="btn btn-success mb-2">Done</button>
                    </div>
                    <div class="col-sm-4">
                        <button v-on:click="delete_task" class="btn btn-danger mb-2">Apagar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

export const component = Vue.component('task-item', {
    props: ['task'],
    delimiters: ['{{', '}}'],
    template: template,
    methods: {
        delete_task: function(){
            this.$store.dispatch("removeTask", this.task.id)
            .then(function (response) {
                console.log('task apagado'); 
            })
        },
        set_doing: function(){
            var self = this
            var body = {
                status: 1,
                start_date: new Date().toISOString().split('T')[0]
            }
            this.$store.dispatch(
                "updateTask", 
                {"taskId": this.task.id, "taskBody": body}
            ).then(function (response) {
                console.log("task set doing")
            })
        },
        set_done: function(){
            var self = this
            var body = {
                status: 2,
                end_date: new Date().toISOString().split('T')[0]
            }
            this.$store.dispatch(
                "updateTask", 
                {"taskId": this.task.id, "taskBody": body}
            ).then(function (response) {
                console.log("task set done")
            })
        }
    }
})