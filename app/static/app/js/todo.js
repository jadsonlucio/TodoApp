var template = `
    <div class="col-md-6 mt-2">
        <div class="card">
            <div class="card-body">
                <div className="row">
                    <span class="badge badge-pill badge-info mb-2">Data criação: {{ todo.create_date }}</span>
                    <h5 class="card-title"><b>{{ todo.title }}</b></h5>
                </div>
                <p class="card-text">{{ todo.text }}</p>

                <span v-if="todo.start_date" class="badge badge-primary">Inicio: {{ todo.start_date }}</span>
                <span v-if="todo.end_date" class="badge badge-success">Fim: {{ todo.end_date }}</span>

                <button v-if="todo.status == 0" v-on:click="set_doing" class="btn btn-secondary mb-2">Doing</button>
                <button v-if="todo.status == 1 || todo.status == 0" v-on:click="set_done" class="btn btn-success mb-2">Done</button>
                <button v-on:click="delete_todo" class="btn btn-danger mb-2">Apagar</button>

            </div>
        </div>
    </div>
`;
const headers = {
    "Content-Type": "application/json",
    "X-CSRFToken": Cookies.get('csrftoken')
}
export const component = Vue.component('todo-item', {
    props: ['todo'],
    delimiters: ['{{', '}}'],
    template: template,
    methods: {
        delete_todo: function(){
            var self = this
            axios.delete('/api/todos/'+self.todo.id, {headers: headers})
            .then(function (response) {
                alert("apagando todo")
                self.$emit('del_todo', self.todo)
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        set_doing: function(){
            var self = this
            var body = {
                status: 1,
                start_date: new Date().toISOString().split('T')[0]
            }
            axios.patch(`/api/todos/${self.todo.id}/`, body, {headers: headers})
            .then(function (response) {
                Object.assign(self.todo, response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        set_done: function(){
            var self = this
            var body = {
                status: 2,
                end_date: new Date().toISOString().split('T')[0]
            }
            axios.patch(`/api/todos/${self.todo.id}/`, body, {headers: headers})
            .then(function (response) {
                Object.assign(self.todo, response.data);
            })
            .catch(function (error) {
                alert(error)
            });
        }
    }
})