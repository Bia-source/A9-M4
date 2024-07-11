import { People } from "../models/People.model.js";

let listPeople = [];

// CRUD
// C- CREATE
export const createPeople = (name, cpf,age) => {
    const newPeople = new People(name, cpf,age);
    listPeople.push(newPeople);
    return newPeople;
}

// R - READ
export const getAllPeoples = () => {
    return listPeople;
}