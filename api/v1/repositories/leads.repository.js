import { transporter } from "./config.email.js";
import { connect } from "./db.js";
import dotenv from "dotenv";

dotenv.config();

async function admin() {
    const conn = await connect();

    try {
        const dadosAdmin = await conn.query("SELECT * FROM administradores");
        let data = {}
        global.userAdmin = [{}]


        for (let i = 0; i < dadosAdmin.rows.length; ++i) {

            data = {
                nome: dadosAdmin.rows[i].nome,
                senha: dadosAdmin.rows[i].senha
            }
            global.userAdmin.push(data)
        }


    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

async function insertLead(leads) {
    const conn = await connect();
    try {
        const sql = "INSERT INTO leads (nome, telefone, email, campanha_id) VALUES ($1, $2, $3, $4) RETURNING *"
        const values = [leads.nome, leads.telefone, leads.email, leads.campanha_id];
        const res = await conn.query(sql, values);
        return res.rows[0];
    } catch (err) {
        throw err;
    } finally {
        conn.release();
        transporter.sendMail({
            from: process.env.USEREMAIL,
            to: leads.email,
            subject: "inscrição na landipage lançamento app",
            text: "Obrigado por si escreve para serem os primeiros a testarem o nosso app, embreve teremos novidades! "
        }).then(info => {
            console.log(info)
        }).catch(error => {
            console.log(error)
        })
    }
}

async function buscarLeads() {
    const conn = await connect();
    try {
        const res = await conn.query("SELECT * FROM leads");
        return res.rows;
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

async function buscarLead(id) {
    const conn = await connect();
    try {
        const res = await conn.query("SELECT * FROM leads WHERE lead_id = $1", [id]);
        return res.rows[0];
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

async function deleteLead(id) {
    const conn = await connect();
    try {
        const res = await conn.query("DELETE FROM leads WHERE lead_id = $1", [id]);
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

async function updateLeads(leads) {
    const conn = await connect();
    try {
        const sql = "UPDATE leads SET nome = $1, telefone = $2, email = $3, campanha_id = $4 WHERE lead_id = $5  RETURNING *";
        const values = [leads.nome, leads.telefone, leads.email, leads.campanha_id, leads.lead_id];
        const res = await conn.query(sql, values);
        return res.rows[0];
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}


export default {
    admin,
    insertLead,
    buscarLeads,
    buscarLead,
    updateLeads,
    deleteLead
}