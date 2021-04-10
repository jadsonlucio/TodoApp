var template = `
    <form v-on:submit.prevent="onSubmit">
        <label htmlFor="">Titulo</label>
        <input v-model="title" type="text"/><br>
        <label htmlFor="">Texto</label>
        <textarea v-model="text" name="" id="" cols="30" rows="10"></textarea><br>
        <button class="btn" v-on:submit.prevent="onSubmit">Adicionar todo</button>
    </form>
`;
const headers = {
    "Content-Type": "application/json",
    "X-CSRFToken": Cookies.get('csrftoken')
}

export const todocad = Vue.component('todo-cad', {
    template: template,
    delimiters: ['{{', '}}'],
    data: function() {
      return  {title: "", text: ""}
    },
    methods: {
        onSubmit: function(){
            var self = this
            var body = {
                title: self.title,
                text: self.text
            }
            axios.post("/api/todos/", body, {headers:headers})
            .then(function (response) {
                self.$emit('cad_todos', response.data)
                self.title = ""
                self.text = ""
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
})