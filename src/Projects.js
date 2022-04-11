// Images
import nextil from './Assets/projects/nextil.webp'
import pirateGame from './Assets/projects/pirateGame.webp'
import pug from './Assets/projects/pug.webp'
import startApp from './Assets/projects/startApp.webp'
import amireliz from './Assets/projects/amireliz.webp'
import tvBrands from './Assets/projects/tvBrands.webp'

const projects = [
    /*
    {
        title: '',
        description: '',
        image: xx,
        techs: [],
        demo: '',
        live: '',
        repository: ''
    },
    */
    {
        title: 'Next-il',
        description: {
            "en": 'Gaming community website, include game servers query, shop, donations, staff panel, staff forms, and more.',
            "he": "אתר אשר נבנה לקהילת משחק, כולל מגוון אפשרויות כגון; משיכת מידע משרתי משחק, מסדי נתונים, שרתים וכו'. חנות אינטרנטית, פאנל ניהול צוות, ועוד.",
        },
        image: nextil,
        techs: ['HTML', 'CSS', 'JavaScript', 'Ajax', 'jQuery', 'Bootstrap', 'PHP', 'MySQL'],
        links: {
            live: 'https://next-il.co.il',
        }
    },
    {
        title: 'CS:GO Pugs System',
        description: {
            "en": 'Website for starting live CS:GO pugs with 10 connected players, include a live chat, dynamic and easy to use. (Currently down)',
            "he": "ממשק להתחלת משחק בלייב הכולל עשרה אנשים, מחובר ישירות לשרת המשחק הרלוונטי, כולל סטטוס שחקנים, לייב צ'אט, ועוד. (אינו פעיל זמנית)",
        },
        image: pug,
        techs: ['HTML', 'CSS', 'JavaScript', 'Ajax', 'jQuery', 'Bootstrap', 'Node.js', 'Socket.io', 'MySQL'],
        links: {
            live: 'https://next-il.co.il/pug/',
            repository: 'https://github.com/ShiNxz/pug-system'
        }
    },
    {
        title: 'StartApp',
        description: {
            "en": 'Website for building a free landing page, currently only includes a working account system.',
            "he": 'אתר לפתיחת דפי נחיתה מקצועיים לכל סוג, בחינם. האתר כולל כרגע אך ורק מערכת הרשמה והתחברות.',
        },
        image: startApp,
        techs: ['HTML', 'CSS', 'JavaScript', 'Ajax', 'jQuery', 'Bootstrap', 'PHP', 'MySQL'],
        links: {
            demo: 'https://old.startapp.org.il',
            repository: 'https://github.com/ShiNxz/startapp'
        }
    },
    {
        title: 'Amir Eliz',
        description: {
            "en": 'Landing page with work examples section, about me section, technologies section, and more.',
            "he": 'דף נחיתה בעל "אודות", עבודות לדוגמה, טכנולוגיות ושפות בשימוש, ועוד.',
        },
        image: amireliz,
        techs: ['React', 'JavaScript', 'Scss', 'Axios', 'Tailwind'],
        links: {
            demo: 'https://startapp.org.il',
            repository: 'https://github.com/ShiNxz/AmirEliz'
        }
    },
    {
        title: 'TvBrands',
        description: {
            "en": 'Demo website that pulls information from a tv brands API and displays it',
            "he": 'אתר אשר מושך מידע על סדרות וסרטים הישר משרת פתוח ומציג את התוצאות בלייב, בעל עיצוב נקי ומקצועי, האתר כולל מגוון אפשרויות.',
        },
        image: tvBrands,
        techs: ['React', 'JavaScript', 'Scss', 'Axios', 'Tailwind'],
        links: {
            demo: 'https://tvbrand.next-il.co.il',
            repository: 'https://github.com/ShiNxz/tv-brand'
        }
    },
    {
        title: 'Pirate Game',
        description: {
            "en": 'Demo pirate game, include a secured register & login system with a leaderboard panel, and a secured way to handling the gameplay from the server side.',
            "he": 'משחק רשת, אינו נועד לפרסום ונבנה לצורך דוגמה בלבד. כולל מערכת הרשמה והתחברות, המשחק בעל דגש רב על אבטחה, ורץ על ידי התקשרות עם צד השרת בלייב.',
        },
        image: pirateGame,
        techs: ['HTML', 'PHP', 'CSS', 'JavaScript', 'MySQL'],
        links: {
            demo: 'https://gamedev.startapp.org.il',
            repository: 'https://github.com/ShiNxz/pirate-game'
        }
    },
]

export default projects