
const structure = {
    home: {
        carousel: {
            slide1: {
                img: 'img.jpg',
                title: 'Hello!!!',
                description1: "I'm Akinola Victor",
                description2: "Welcome to my portfolio website"
            },
            slide2: {
                img: 'img.jpg',
                title: 'Javascript',
                description1: "I'm a Javascript Developer",
                description2: "i'm passionate about cutting edge technologies"
            },
            slide3: {
                img: 'img.jpg',
                title: 'Web App',
                description1: "I build webapps using VueJS and ReactJs",
                description2: "i'm passionate about cutting edge technologies"
              },
            slide4: {
                img: 'img.jpg',
                title: 'Fullstack Development',
                description1: "Front-End + Back-End",
                description2: "I do this with the use of NodeJs"
              },
            slide5: {
                img: 'img.jpg',
                title: 'Algorithms',
                description1: "Much can be achieved with the use of algorithms.",
                description2: "Welcome to my portfolio website"
              }
        },
        vision: `I'm a self-taught developer with a passion for developing innovative services that adds value to lives of billions of people in the world
                    i look forward to keep pursuing after excellence in my career path while advancing my scope of knowledge in cutting-edge technologies that
                    Enable me to achieve my ultimate goal in life.`,
        skill: {
            a: {
                name: 'Html5',
                font: 'fa-brands fa-html5',
                content: `I have a really good drasp of HTML, using it in combination with CSS, i'm able to build stunning user interface. 
                            i'm proficient with this skill with a 5-year experience.`
            },
            b: {
                name: 'Css3',
                font: 'fa-brands fa-css3-alt',
                content: `I come up with beautiful stylings for webapps, leading to a responsive webapp and an outstanding user experience.
                            i'm proficient with this skill with a 5-year experience.`
            },
            c: {
                name: 'Javascript',
                font: 'fa-brands fa-js-square',
                content: `With javascript, i gain more vastness and scalability, writting reusable code, leading to an elegant user experience.
                            i'm proficient with this skill with a 4-year experience.`
            },
            d: {
                name: 'React',
                font: 'fa-brands fa-react',
                content: `With React,i build web Apps by building resuable components and in combination with context API, i'm able to handle robust Apps.
                            I have a 2-year experience working with this framework.`
            },
            e: {
                name: 'Vue',
                font: 'fa-brands fa-vuejs',
                content: `VueJs gives me more flexibility and ease of development. With vue, i build elegant Web Apps that are scalable across different platforms
                            I have a 2-year experience working with this framework.`
            },
            f: {
                name: 'Sass',
                font: 'fa-brands fa-sass',
                content: `Styling is made easy with the flexibility of writting Nested CSS rules, and styling in a programmatic way.
                            I have a 6-month experience working with this framework.`
            },
            g: {
                name: 'Node',
                font: 'fa-brands fa-node',
                content: `I Build scallable backend services with nodejs. With nodejs, i'm also able to achieve building RESTful APIs to power the front-end of an application.
                            I have a 3-year experience working with this framework.`
            },
            h: {
                name: 'ExpressJS',
                font: 'fa-brands fa-node',
                content: `I use ExpressJS and other NPM modules with NodeJs in building backend services.
                            I have a 3-year experience working with this framework.`
            },
            i: {
                name: 'Firebase',
                font: 'fa-solid fa-database',
                content: `With firebase, i'm able to give more stability to webapps, leading to retainablity of data on the web and a good data structure.
                            I have a 1-year experience working with this tool.`
            }
        }
    },
    project: {
        TimerApp:{
            name: 'Timer App',
            content: "Designed a Timer App with an interactable user interface, and a beautiful animated design layout using VueJs.",
            link: 'google.com'
        },
        MatchCardGame:{
            name: 'Match Card Game',
            content: "Dynamically rendered shuffled cards using the fisher-yate algorithm which improved the game's speed at runtime, using ReactJs.",
            link: 'google.com'
        },
        Portfolio:{
            name: 'This Portfolio',
            content: "Implementes a simple MVC architectural design pattern in building this portfolio, using VueJs, Vuex, Sass, Nodejs, Expressjs, and fiebase.",
            link: 'google.com'
        },
        // Portfolio:{
        //     name: 'Previous Portfolio',
        //     content: 'iat cupiditate.',
        //     link: 'google.com'
        // },
        // Fesshr:{
        //     name: 'Fesshr',
        //     content: ' cupiditate.',
        //     link: 'google.com'
        // }
    },
    about:{
        Education: {
            name: 'Education',
            content: 'Bachelor of Science. \n Agricultural and Environmental Engineering, \n Obafemi Awolowo University\n ile-ife, Osun-state, Nigeria. \n March 2015-Dec 2019'
        },
        Udacity: {
            name: 'Udacity',
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae dignissimos quidem, voluptate enim ea nam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae dignissimos quidem, voluptate enim ea nam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae dignissimos quidem, voluptate enim ea nam.'
        },
        Experience: {
            name: 'Experience',
            content: 'My Experience have so far come from the personally handled projects which i get engaged in, to advance my scope and solidify my skillsets'
        },
        Goals: {
            name: 'Goals',
            content: `To Keep pursuing after excellence in my path, while advancing my scope of knowledge in cutting-edge technologies that get the work done better and faster, leading to the delivery of quality works.`
        },
        Learn: {
            name: 'How i Learn',
            content: `I'm a self-taught developer with a passion for learning new skills that are in line with my career path, while also improvingon my
                        current skillset. I learn from resources made available on the internet: Video tutorials, books, online schools(Udacity, udemy, etc), and from my friends`
        },
        Team: {
            name: 'Team Work',
            content: `I believe in team work, i love the oneness of purpose that brings a team together, and that motivates us to pursue our endgoals to the delivery of quality work of excellence.`
        }
    },
    contact: {
        message1: {
            name: 'Adesewa kunle',
            phoneNumber: '+2348101700105',
            Email: 'soandso.gmail.com',
            message: 'The Lord is my light and my strength, whom shall i fear?'
        },
    }
}
// console.log('ddd')
module.exports = structure