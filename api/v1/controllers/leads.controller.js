import leadsService from "../services/leads.service.js"

async function createLeads(req, res, next){
    try{
        let leads = req.body;
        leads.id_campanha = parseInt(leads.id_campanha)

        if(!leads.nome || !leads.email || !leads.telefone){
            throw new Error("nome, telefone e email são obrigatorios.")
        }
        
        res.send(await leadsService.createLeads(leads));
        logger.info(`POST /leads - ${JSON.stringify(leads)}`);
    }catch(err){
        next(err);
    }
}

async function buscarLeads(req, res, next){
    try{
        let leads = req.query.nome
        leads.id_campanha = parseInt(leads.id_campanha)

        res.send(await leadsService.updateLeads(leads))
        logger.info(`GET/leads - ${JSON.stringify(leads)}`)
    }catch(err){
        next(err);
    }
}

async function buscarLead(req, res, next){
    try{
        let leads = req.query.nome
        leads.id_campanha = parseInt(leads.id_campanha)

        res.send(await leadsService.updateLeads(leads))
        logger.info(`GET/leads - ${JSON.stringify(leads)}`)
    }catch(err){
        next(err);
    }
}

async function deleteLead(req, res, next){
    try{
        let leads = req.query.nome
        leads.id_campanha = parseInt(leads.id_campanha)

        res.send(await leadsService.updateLeads(leads))
        logger.info(`GET/leads - ${JSON.stringify(leads)}`)
    }catch(err){
        next(err);
    }
}

async function updateLeads(req, res, next){
    try{
        let leads = req.query.nome
        leads.id_campanha = parseInt(leads.id_campanha)

        res.send(await leadsService.updateLeads(leads))
        logger.info(`GET/leads - ${JSON.stringify(leads)}`)
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