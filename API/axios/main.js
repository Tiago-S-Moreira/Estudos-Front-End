const url = "http://localhost:5500/api"

function getUsers(){
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

function addNewUser(){
    axios.post(url, {
        name: "Olivia Zars",
        avatar: "https://picsum.photos/200/300",
        city: "Rio de Janeiro"
    })
    .then(response => {
        console.log(response)
    } )
    .catch(error => console.error(error))
}

function getUser(id){
    axios.get(`${url}/${id}`) 
    .then(response => {
        const data = response.data
        userName.textContent = data.name
        userCity.textContent = data.city
        userID.textContent = data.id
        userAvatar.src = data.avatar
    })
    .cath(error => console.error(error))
}

const userUpdated = {
    name: "Marcelo Calvis",
    avatar: "https://picsum.photos/200/300",
    city: "Recife"
}

function updateUser(id, userUpdated){
    axios.put(`${url}/${id}`, userUpdated)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

function deleteUser(id){
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

deleteUser(2)
addNewUser()
getUser(1)
getUsers()
updateUser(3, userUpdated)