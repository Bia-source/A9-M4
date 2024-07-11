import { Router } from "express";
import { createPeople, getAllPeoples } from "../controllers/people.controller.js";

const peopleRouter = Router();

peopleRouter.post("/people", (req,res) => {
    const { name, age, cpf } = req.body;
    const newPeople = createPeople(name, cpf,age);
    res.status(200).json({newPeople});
});

peopleRouter.get("/people", (req,res) => {
    const listPeople = getAllPeoples();
    res.status(200).json({listPeople});
});

export { peopleRouter }