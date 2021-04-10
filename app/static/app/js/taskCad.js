var template = `
    <form v-on:submit.prevent="onSubmit">
        <label htmlFor="">Titulo</label>
        <input v-model="title" type="text"/><br>
        <label htmlFor="">Texto</label>
        <textarea v-model="text" name="" id="" cols="30" rows="10"></textarea><br>
        <button class="btn" v-on:submit.prevent="onSubmit">Adicionar task</button>
    </form>
`;

export const taskcad = Vue.component('task-cad', {
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
            this.$store.dispatch("addTask", body)
            .then(function (response) {
                console.log(`task cadastrada: ${body}`)
            })
            .catch(function (error) {
                alert(JSON.stringify(error));
            });
        }
    }
})