import leadsRepository from "../repositories/leads.repository.js";

async function createLeads(leads){
    return await leadsRepository.insertLead(leads);
}

async function buscarLeads(){
    return await leadsRepository.buscarLeads();
}

async function buscarLead(id){
    return await leadsRepository.buscarLead(id);
}

async function deleteLead(id){
   await leadsRepository.deleteLead(id);
}

async function updateLeads(leads){
  return await leadsRepository.updateLeads(leads);
}

export default{
    createLeads,
    buscarLeads,
    buscarLead,
    deleteLead,
    updateLeads
}