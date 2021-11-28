import express from "express";
import LeadsController from "../controllers/leads.controller.js"

const router = express.Router();

router.post("/", LeadsController.createLeads);
router.get("/", LeadsController.buscarLeads);
router.get("/:nome", LeadsController.buscarLead);
router.delete("/:nome", LeadsController.deleteLead);
router.put("/", LeadsController.updateLeads);


export default router;