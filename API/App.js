import { Client, Intents, MessageEmbed } from 'discord.js'
import express from 'express'
import cors from 'cors'
import twilio from 'twilio'
import dotenv from 'dotenv'
dotenv.config()

const App = express()
App.use(express.json())
App.use(cors({
    origin: "*",
    methods: "POST",
}))

App.get('/', (req, res) => {
    res.send('<h7>Not Authorized.</h7>')
})

App.post('/contact', async (req, res) => {
    const { name, email, message } = req.body

    twilioClient.messages 
        .create({   
            body: `-\n\n\nNew message:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,  
            messagingServiceSid: process.env.SERVICE_SID,      
            to: process.env.PHONE
        }) 
        .done()
    
    await (await discordClient.users.fetch(process.env.CLIENT_ID)).send({ embeds: [
        new MessageEmbed().setTitle('New Message!').setDescription(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`).setColor('RANDOM')
    ]})
    res.status(200).json({ success: true })
})

const twilioClient = twilio('AC67da380081a93954c524fdd4f5067b24', '11000ffb69608d488337a91ff7e85ab0');
const discordClient = new Client({ intents: [Intents.FLAGS.GUILDS, 'GUILD_VOICE_STATES'] })
discordClient.login(process.env.TOKEN)

App.listen(process.env.API_PORT || 5000)