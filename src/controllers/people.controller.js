import { People } from "../models/People.model.js";

let listPeople = [];

// CRUD
// C - CREATE
export const createPeople = (name, cpf,age) => {
    const newPeople = new People(name, cpf,age);
    listPeople.push(newPeople);
    return newPeople;
}

// R - READ
export const getAllPeoples = () => {
    return listPeople;
}

// let array = [
//     {id:1, name: "beatriz", ceps: [
//         {id:12, rua: "Rua teste", numero: 32},
//         {id:13, rua: "Rua teste", numero: 40},
//         {id:2}
//     ]},
//     {id:2, name: "Mih"}
// ];
// array[0].ceps[0].numero
// // 12
// data.ceps.find(endereco => endereco.rua == "Rua teste")
// // {id:12, rua: "Rua teste", numero: 32}

// data.ceps.find(endereco => endereco.rua == "Rua teste").numero
// // 32
// array.findIndex(data => data.ceps.find(endereco => endereco.rua == "Rua teste").numero === 40)

// U - UPDATE
export const updatePeople = (id, name) => {
    // objetivo: editar apenas o nome de um usuario
    // já existente

    // buscando a pessoa por id
    const peopleAlreadyExist = listPeople.find(people => people.id == id);

    // verificando se a pessoa realmente existe no banco de dados
    if(peopleAlreadyExist){
        let indexPeople = listPeople.findIndex(people => people.id == id);
        listPeople[indexPeople].name = name;
        return listPeople[indexPeople];
    }else{
        return "Nao existe um usuario com este id"
    }
}


// function searchPeople(id){
//     return listPeople.find(people => people.id == id);
// }

// D - DELETE
export const deletePeople = (id) => {
    const peopleAlreadyExist = listPeople.find(people => people.id == id);
    if(peopleAlreadyExist){
        let indexPeople = listPeople.findIndex(people => people.id == id)
        listPeople.splice(indexPeople,1);
        return peopleAlreadyExist
    }else{
        return "Nao existe um usuario com este id"
    }
}   

