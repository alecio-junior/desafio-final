import email from "nodemailer";
import dotenv from "dotenv";

dotenv.config()

  const transporter = email.createTransport({
       host: "smtp.gmail.com",
       port:  465,
       secure: true,
       auth: {
               user : process.env.USEREMAIL, 
               pass : process.env.PASSEMAIL
            }
   })

   export{
       transporter
   }
