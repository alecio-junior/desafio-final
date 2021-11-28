import leadsRepository from "../repositories/leads.repository.js";

async function createLeads(leads){
    return await leadsRepository.insertLead(leads);
}

async function updateLeads(leads){
    return await leadsRepository.uptadeLead(leads);
}

export default{
    createLeads,
    updateLeads
}