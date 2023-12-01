import {v4 as uuid} from "uuid"
const users = []


export const getUsers = (req, res) => {
    res.send(users)
}
export const createUser = (req, res) => {
    const utilisateur = req.body;
    users.push({...utilisateur, id:uuid()});
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