import { Router } from "express";
import { createPeople, deletePeople, getAllPeoples, updatePeople } from "../controllers/people.controller.js";

const peopleRouter = Router();
// POSTMAN -> MIDDLEWARE (TRANSFORMAR JSON EM OBJETO) -> ROTAS
peopleRouter.post("/people", (req,res) => {
    // middleware express.json()
    const { name, age, cpf } = req.body;
    const newPeople = createPeople(name, cpf,age);
    res.status(200).json({newPeople});
});

peopleRouter.patch("/people", (req,res) => {
    const { name, id } = req.body;
    //const { id } = req.params;
    const peopleUpdate = updatePeople(id, name);
    res.status(200).json({peopleUpdate});
})

peopleRouter.get("/people", (req,res) => {
    const listPeople = getAllPeoples();
    res.status(200).json({listPeople});
});

peopleRouter.delete("/people/:id", (req,res) => {
    const { id } = req.params; 
    const people = deletePeople(id);
    res.status(200).json({people});
})

// métodos iguais CAMINHOS PRECISAM SER DIFERENTES
// peopleRouter.get("/people/by-name", (req,res) => {
//     const listPeople = getPeopleByName();
//     res.status(200).json({listPeople});
// });



export { peopleRouter }