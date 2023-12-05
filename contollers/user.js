import { v4 as uuid } from "uuid"
let users = []


export const getUsers = (req, res) => {
    res.send(users)
}
export const createUser = (req, res) => {
    const utilisateur = req.body;
    users.push({ ...utilisateur, id: uuid() });
    console.log(`l'utilisateur ${utilisateur.username} est bien ajoute`)
    res.send(users)
}

export const getUserById = (req, res) => {
    // const {id} = req.params
    // const user = users.find((item) => {
    //     return item.id == id
    // })
    // res.send(user)
    res.send(req.params.id)
}

export const deleteUser = (req, res) => {
    users = users.filter(user => {

        console.log(req.params.id)
        console.log(req.params.id !== user.id)
        return user.id !== req.params.id
    })
    res.send(users)
}

export const updateUser = (req, res) => {
    const user = users.find(u => req.params.id == u.id)
    user.username = req.body.username;
    user.age = req.body.age;
    console.log(`usename has been updated to ${req.body.username}, age to ${req.body.age}`);

    res.send(user)
    
}