import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const contacts = [
    {
        id: 'email',
        icon: faEnvelope,
        text: 'amir.e@next-il.co.il',
        link: 'mailto:amir.e@next-il.co.il'
    },
    {
        id: 'whatsapp',
        icon: faWhatsapp,
        text: '+972 527794142',
        link: 'https://api.whatsapp.com/send/?phone=%2B972527794142'
    },
    {
        id: 'instagram',
        icon: faInstagram,
        text: 'amir.eliz',
        link: 'https://www.instagram.com/amir.eliz/'
    },
    {
        id: 'discord',
        icon: faDiscord,
        text: 'ShiNxz#0001',
    },
]

export default contacts