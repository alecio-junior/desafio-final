import express from "express";
import basicAuth from "express-basic-auth";
import LeadsController from "../controllers/leads.controller.js"
import AdminRepository from "../repositories/leads.repository.js"
import dotenv from "dotenv";

dotenv.config();
AdminRepository.admin()

const router = express.Router();

router.post("/", LeadsController.createLeads);

router.use(basicAuth({
    authorizer: (username, password) => {

        let acessoUsuario = process.env.USERSIST
        let acessoSenha = process.env.PASSSIST

        for (let i = 0; i < userAdmin.length; ++i) {
            if (userAdmin[i].nome == username & userAdmin[i].senha == password) {
                acessoUsuario = userAdmin[i].nome
                acessoSenha = userAdmin[i].senha
            }
        }

        let userMatches = basicAuth.safeCompare(username, acessoUsuario)
        let passwordMatches = basicAuth.safeCompare(password, acessoSenha)

        return userMatches & passwordMatches
    }
}))

router.get("/", LeadsController.buscarLeads);
router.get("/:id", LeadsController.buscarLead);
router.delete("/:id", LeadsController.deleteLead);
router.put("/", LeadsController.updateLeads);


export default router;