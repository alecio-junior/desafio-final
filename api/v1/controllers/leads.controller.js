import leadsService from "../services/leads.service.js"


async function createLeads(req, res, next){
    try{
        let leads = req.body;
    
        if(!leads.nome || !leads.telefone || !leads.email || !leads.campanha_id ){
            throw new Error("nome, telefone, email e id da campanha são obrigatorios.")
        }
        
        
        res.send(await leadsService.createLeads(leads));
        logger.info(`POST /api/v1/leads - ${JSON.stringify(leads)}`);
    }catch(err){
        next(err);
    }
}

async function buscarLeads(req, res, next){
    try{
        
        res.send(await leadsService.buscarLeads())
        logger.info("GET /api/v1/leads")
    }catch(err){
        next(err);
    }
}

async function buscarLead(req, res, next){
    try{
        res.send(await leadsService.buscarLead(req.params.id))
        logger.info("GET /api/v1/leads")
    }catch(err){
        next(err);
    }
}

async function deleteLead(req, res, next){
    try{
        await leadsService.deleteLead(req.params.id)
        res.end();
        logger.info("DELETE /api/v1/leads")
    }catch(err){
        next(err);
    }
}

async function updateLeads(req, res, next){
    try{
        let leads = req.body
        
        if(!leads.lead_id || !leads.nome || !leads.email || !leads.telefone){
            throw new Error("id do proprietario, nome, telefone, email são obrigatório.")
          }

        res.send(await leadsService.updateLeads(leads))
        logger.info(`GET /api/v1/leads - ${JSON.stringify(leads)}`)
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