import leadsService from "../services/leads.service.js"


async function createLeads(req, res, next){
    try{
        let leads = req.body;
        leads.campanha_id = parseInt(leads.campanha_id);

        if(!leads.nome || !leads.email || !leads.campanha_id ){
            throw new Error("nome, email e id da campanha são obrigatorios.")
        }
        
        res.send(await leadsService.createLeads(leads))
    
        logger.info(`POST /v1/leads - ${JSON.stringify(leads)}`);
    }catch(err){
        next(err);
    }
}

async function buscarLeads(req, res, next){
    try{
        
        res.send(await leadsService.buscarLeads())
        logger.info("GET /v1/leads")
    }catch(err){
        next(err);
    }
}

async function buscarLead(req, res, next){
    try{
        res.send(await leadsService.buscarLead(req.params.id))
        logger.info("GET /v1/leads")
    }catch(err){
        next(err);
    }
}

async function deleteLead(req, res, next){
    try{
        await leadsService.deleteLead(req.params.id)
        res.end();
        logger.info("DELETE /v1/leads")
    }catch(err){
        next(err);
    }
}

async function updateLeads(req, res, next){
    try{
        let leads = req.body
        
        if(!leads.lead_id || !leads.nome || !leads.email){
            throw new Error("id do lead, nome, email são obrigatório.")
          }

        res.send(await leadsService.updateLeads(leads))
        logger.info(`GET /v1/leads - ${JSON.stringify(leads)}`)
    }catch(err){
        next(err);
    }
}


export default{
    createLeads,
    buscarLeads,
    buscarLead,
    deleteLead,
    updateLeads
}