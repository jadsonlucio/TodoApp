// api comunicantion functions

const headers = {
    "Content-Type": "application/json",
    "X-CSRFToken": Cookies.get('csrftoken')
}

export async function fetchTasks(){
    return await axios.get('/api/todos/')
}

export async function addTask(taskBody){
    return await axios.post("/api/todos/", taskBody, {headers:headers})
}

export async function deleteTask(taskId){
    return await axios.delete(`/api/todos/${taskId}`, {headers: headers})
}

export async function updateTask(taskId, taskBody){
    return await axios.patch(`/api/todos/${taskId}/`, taskBody, {headers: headers})
}

