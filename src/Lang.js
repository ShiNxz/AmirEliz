import { faCheck, faHashtag } from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'

const Lang = [
    {
        text: 'English',
        identifier: 'en',
        dir: 'ltr',
        texts: {
            title: 'Amir Eliz | Web Developer',
            links: {
                "#AboutMe": 'About Me',
                "#projects": 'Projects',
                "#tech": 'Languages & Technologies',
                "#contact": 'Contact Me',
                "#letstalk" : `Let's Talk`
            },
            main: {
                heading: 'Hi 👋',
                name: 'Amir Eliz',
                title: 'Full-Stack Web Developer',
            },
            about_me: {
                blocks: [
                    {
                        icon: faHashtag,
                        num: '5+',
                        title: 'Experience' ,
                        text: 'Years of programming'
                    },
                    {
                        icon: faReact,
                        num: '15+',
                        title: 'Technologies',
                        text: 'Languages & Technologies'
                    },
                    {
                        icon: faCheck,
                        num: '20+',
                        title: 'Projects done',
                        text: 'Projects'
                    }
                ],
                text: [
                    'Development, design and construction of professional websites with an emphasis on user experience, clean and comfort design, and security.',
                    "Websites for all uses; business pages, landing pages, online stores, online games and etc.",
                    'Extensive professional and rich knowledge in a variety of programming languages and the newest technologies on the market for building all types of websites',
                    'Use of relevant databases accordingly and according to the website type, construction and use of api servers if necessary.',
                    'URL, Hosting and maintaining the site on us!'
                ]
            },
            projects: {
                links: {
                    live: 'Live',
                    demo: 'Demo',
                    repository: 'Repository'
                }
            },
            contact: {
                message: 'Send a Message',
                "email": 'email',
                "whatsapp": 'WhatsApp',
                "instagram": 'Instagram',
                "discord": "Discord",
                form: {
                    name: 'Name',
                    email: 'Email Address',
                    message: 'Message',
                    placeholder: 'Please write the reason for the inquiry, if you want to recieve a price quote please write your website details, website use, and relevant examples.',
                    send: 'Send',
                    alreadySent: 'Message Sent',
                    loading: 'Loading...',
                    alert: {
                        title: "Thanks!",
                        message: 'We received your inquiry, we will get back to you soon.',
                        button: 'okay',
                        error: 'Error!',
                        errorMessage: 'Some details may be missing...',
                        errorMessage2: `You can't send more than one inquiry!`
                    }
                }
            }
        }
    },
    {
        text: 'עברית',
        identifier: 'he',
        dir: 'rtl',
        texts: {
            title: 'אמיר אליז | פיתוח אתרים',
            links: {
                "#AboutMe": 'אודות',
                "#projects": 'פרוייקטים',
                "#tech": 'שפות וטכנולוגיות',
                "#contact": 'צור קשר',
                "#letstalk" : `צור קשר`
            },
            main: {
                heading: 'ברוכים הבאים 👋',
                name: 'אמיר אליז',
                title: 'מפתח אתרים - Full-Stack',
            },
            about_me: {
                blocks: [
                    {
                        icon: faHashtag,
                        num: '5+',
                        title: 'ניסיון' ,
                        text: 'שנות ניסיון'
                    },
                    {
                        icon: faReact,
                        num: '15+',
                        title: 'שפות וטכנולוגיות',
                        text: 'שפות וטכנולוגיות בשימוש'
                    },
                    {
                        icon: faCheck,
                        num: '20+',
                        title: 'פרויקטים',
                        text: 'פרויקטים מוכנים'
                    }
                ],
                text: [
                    'פיתוח, עיצוב, ובניית אתרים מקצועיים בדגש על חווית משתמש, עיצוב נקי וחדשני, אבטחה, ונוחות.',
                    "פיתוח אתרים לכל שימוש! דפי עסקים, דפי נחיתה, חנויות אינטרנטיות, משחקי רשת, וכו'.",
                    'ידע נרחב, מקצועי ועשיר במגוון שפות תכנות ובטכנולוגיות הכי חדשות בשוק לבניית כל סוגי האתרים.',
                    'שימוש במסדי נתונים רלוונטים בהתאם ועל פי סוג האתר, בנייה ושימוש בשרתי API במידת הצורך.',
                    'כתובת האתר, אחסון ואחזקת האתר, עלינו!'
                ]
            },
            projects: {
                links: {
                    live: 'צפייה באתר',
                    demo: 'דוגמה',
                    repository: 'צפייה בקוד'
                }
            },
            contact: {
                message: 'שליחת הודעה',
                "email": 'כתובת אימייל',
                "whatsapp": 'WhatsApp',
                "instagram": 'אינסטגרם',
                "discord": "דיסקורד",
                form: {
                    name: 'שם פרטי',
                    email: 'כתובת אימייל',
                    message: 'הודעה',
                    placeholder: 'סיבת הפנייה, במידה ואתם מעוניינים לקבל הצעת מחיר, יש לרשום את פרטי האתר, שימוש ודוגמאות רלוונטיות',
                    send: 'אישור ושליחה',
                    alreadySent: 'ההודעה נשלחה',
                    loading: 'אנא המתן...',
                    alert: {
                        title: "!הפנייה נשלחה",
                        message: '.קיבלנו את הפנייה שלך, אנו נחזור אליך בקרוב',
                        button: 'אישור',
                        error: '!שגיאה',
                        errorMessage: '...יתכן שחלק מהפרטים חסרים',
                        errorMessage2: '!לא ניתן לשלוח יותר מפנייה אחת'
                    }
                }
            }
        }
    }
]

export default Lang