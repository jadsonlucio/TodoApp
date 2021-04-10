# Todo app com Django e Vuejs

![](https://img.shields.io/badge/vue-3.6.2-green.svg)

![](https://img.shields.io/badge/django-3.2.0-green.svg)

![](https://img.shields.io/badge/django_rest-3.12.4-green.svg)

Projeto da disciplina de `Tópicos em sistema de informação`, com o objetivo de construir um ToDo app usando o `Django Rest Framework`.

Funcionalidades implementadas:

- O usuário pode ver um campo de entrada onde ele pode adicionar um item de tarefa.
- O usuário pode salvar uma tarefa em uma lista de tarefas que vão ficar armazenadas em um banco de dados.
- O usuário pode marcar uma tafera como concluída.
- O usuário pode remover uma tarefa da lista de terefas.
- O usuário pode ver uma lista das tarefas completadas.
- O usuário pode ver uma lista das tarefas em andamento.
- O usuário pode ver a data em que ele criou a tarefa.
- O usuário pode ver a data de conclusão e de inicio das tarefas em andamento e concluidas.
- O usuário pode filtra pelo titulo e texto da tarefa.

## :rocket: Começando

Execute o seguinte comando para clonar o projeto via git:

```bash
git clone 
```

## Pré requisitos

É necessario ter o python instalado na máquina para executar esse projeto, assim como o sistema operacional linux.

## Instalação 

Baixe o pacote `virtualenv` executando o comando:

```bash
python -m pip install virtualenv
```

Crie e ative um ambiente virtual executando:

```bash
# criando o ambiente virtual
virtualenv venv/

# entrando no ambiente virtual
source venv/bin/activate
```

Instale os pacotes necessários para executar o django através do requirements.txt, executando o seguinte comando:

```bash
pip install -r requirements.txt
```

## Executando os testes

A versão atual desse programa ainda não tem um sistema de teste automatização e de criação de contas, então é necessario que o usuário que for realizar os testes crie uma conta através do terminal executando o seguinte comando:

```bash
python manage.py createsuperuser
```

Após preencher as informações pedidas e criado a sua conta o servidor pode ser executado rodando o seguinte comando:

```bash
python manage.py runserver localhost:8000
```

O site vai estar disponivel no seguinte endereço: http://localhost:8000, ao acessar pela primeira vez é necessário digitar o usuário e senha que foram criados usando o comando `createsuperuser`

### Usar live reload

Para usar o livereload durante o desenvolvimento siga os passo abaixo.

1. Instalar os pacotes `livereload` e `whitenoise`
2. Adicionar o `livereload` como app do django
3. Adicionar o middleware `whitenoise.middleware.WhiteNoiseMiddleware` depois do middleware `django.middleware.security.SecurityMiddleware` na lista de MIDDLEWARE do django em settings.
4. Adicionar a linha `os.environ["DJANGO_ALLOW_ASYNC_UNSAFE"] = "true"` nas settings do django.
4. Executar `python manage.py livereload` para rodar o servidor de desenvolvimento com o live reload.

## Versão

![version](https://img.shields.io/badge/version-0.0.1-blue)

## Autores

- Jadson Lucio dos Santos


## Licença

Este projeto está sob a licença MIT - veja o arquivo LICENSE.md para detalhes.