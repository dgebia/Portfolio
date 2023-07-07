import { Data, Links } from "./interface";


export const navbarClasses = ["navbar", "icon", "text"];
export const navbarIds = ["text", "icon"];
export const headerClasses = ["header-contant"];
export const footerClasses = ["footer-container"];
export const burgerClasses = ["burger-container", "burg"];





export const stack: Data = {
    topic: "Stack",
    stack: [
        { lang: "TypeScript", logo: "/images/typescript.svg", alt: "typescript" },
        { lang: "HTML", logo: "/images/html.svg", alt: "HTML" },
        { lang: "Cascading Style Sheets", logo: "/images/css.svg", alt: "css" },
        { lang: "VITE", logo: "/images/vitejs.svg", alt: "VITE" },
        { lang: "GIT", logo: "/images/git.svg", alt: "GIT" },
        { lang: "GitHub ", logo: "/images/github.svg", alt: "GitHub" },
    ],
}

export const links: Links[] = [
    {
        title: "Education", iconClasses: ["fa-solid", "fa-graduation-cap"]
    },
    { title: "Employment", iconClasses: ["fa-solid", "fa-briefcase"] },
    { title: "Certificates", iconClasses: ["fa-solid", "fa-certificate"] },
    { title: "Experience", iconClasses: ["fa-solid", "fa-ranking-star"] },
    { title: "Main qualities", iconClasses: ["fa-solid", "fa-person-rays"] },
    { title: "Languages", iconClasses: ["fa-solid", "fa-language"] },
    { title: "Personal details", iconClasses: ["fa-solid", "fa-circle-info"] },

];





export const Education: Data = {
    topic: "Education",
    about: [
        {
            title: "Academy of Social-Economic development, Moscow",
            descripion: "Faculty of Management, master’s degree in management of organizations",
            startDate: "september 2007",
            finishDate: "august 2008",
        },
        {
            title: "Moscow humanitarian University, Moscow",
            descripion: "Finance and credit department, bachelor's degree in financial management",
            startDate: "september 2002",
            finishDate: "august 2007",
        }
    ]
};


export const Certificates: Data = {
    topic: "Certificates",
    about: [
        {
            title: "Udemy",
            descripion: "Additional courses of JavaScript, React and React Redux",
            startDate: "october 2022",
            finishDate: "august 2008",
        },
        {
            title: "Sololearn",
            descripion: "Theoretical and practical understanding of JavaScript",
            startDate: "december 2021",
            finishDate: "january 2022",
        },
        {
            title: "Project Management",
            descripion: "Project Management Training Programme at the International Black Sea University",
            startDate: "may 2017",
            finishDate: "june 2017",
        },
        {
            title: "Project Management",
            descripion: "Project Management courses at the LEPL STC “DELTA”",
            startDate: "may 2015",
            finishDate: "june 2015",
        },
        {
            title: "English language course",
            descripion: "English language at the Moscow humanitarian University",
            startDate: "february 2005",
            finishDate: "june 2005",
        }
    ]
};

export const Employment: Data = {
    topic: "Employment",
    about: [
        {
            title: "JavaScript Developer ",
            company: "www.Xfusion.app, Georgia/Tbilisi",
            descripion: `Mainly processed the data received from the server 
            and display it in the necessary DOM elements. Also I involved in 
            improving the form builder, optimizing existing code, and other tasks.`,
            startDate: "october 2022",
            finishDate: "february 2023",
        },
        {
            title: "React Developer",
            company: "Monite, Germany/Berlin",
            descripion: `I was developing UI components in accordance with
            the design system, documenting them in Storybook, working with 
            forms, validating forms and performing many other tasks. I was 
            interacting with the backend to receive and send data using 
            REST API, as well as conducting code reviews and performing 
            many other tasks.`,
            startDate: "may 2022",
            finishDate: "august 2022",
        },
        {
            title: "JavaScript Developer ",
            company: "www.Xfusion.app, Georgia/Tbilisi",
            descripion: `I participated in the development of a form builder,
            creating about 270 unique pages. processed and displayed the data 
            received from the server.`,
            startDate: "may 2021",
            finishDate: "may 2022",
        },
        {
            title: "internship / practice JavaScript Developer",
            company: "www.business.fertimo.com, Georgia/Tbilisi",
            descripion: "",
            startDate: "january 2021",
            finishDate: "may 2021",
        },
        {
            title: "Project manager",
            company: "LEPL STC “DELTA”, Georgia/Tbilisi",
            descripion: `Participated in a research project for 
            the manufacture of a prototype, its testing and
            production. Current short projects`,
            startDate: "february 2014",
            finishDate: "may 2019",
        },
        {
            title: "Business process manager",
            company: "LEPL STC “DELTA, Georgia/Tbilisi",
            descripion: `Participated in the analysis of 
            existing work processes. Adjustment of existing 
            processes. Implementation of new processes.
            Participated in the development of regulations.`,
            startDate: "december 2013",
            finishDate: "february 2014",
        },
        {
            title: "Assistant Accountant",
            company: "LEPL STC “DELTA, Georgia/Tbilis",
            descripion: `Accountant in the center of demilitarization`,
            startDate: "april 2014",
            finishDate: "december 2019",
        },
        {
            title: "Owner",
            company: "Sole Trader “SP Kakulia Irakli Temurovich”, Russia/Moscow",
            descripion: `Trade - “Auto Accessories Store”`,
            startDate: "december 2009",
            finishDate: "november 2012",
        },
        {
            title: "Procurement Specialists",
            company: "JSC “STC Electricity”, Russia/Moscow",
            descripion: ``,
            startDate: "july 2007",
            finishDate: "november 2009",
        },
        {
            title: "3rd category engineer",
            company: "JSC “STC Electricity”, Russia/Moscow",
            descripion: ``,
            startDate: "may 2006",
            finishDate: "july 2007",
        }
    ]
};

export const Experience: Data = {
    topic: "Experience",
    done: ["fa-solid", "fa-circle"],
    not: ["fa-regular", "fa-circle"],
    about: [
        {
            title: "Programming languages and frameworks",
            skils: [
                { lang: "JavaScript", logo: "/images/javascript.svg", alt: "javascript", rate: 4 },
                { lang: "React", logo: "/images/reactjs.svg", alt: "reactjs", rate: 4 },
                { lang: "Next", logo: "/images/nextjs.svg", alt: "nextjs", rate: 2 },
                { lang: "React Redux", logo: "/images/redux.svg", alt: "material-ui", rate: 4 },
                { lang: "TypeScript", logo: "/images/typescript.svg", alt: "typescript", rate: 3 },
                { lang: "Node", logo: "/images/nodejs.svg", alt: "nodejs", rate: 2 },
                { lang: "Express", logo: "/images/expressjs.svg", alt: "expressjs", rate: 3 },
                { lang: "Nest", logo: "/images/nestjs.svg", alt: "nestjs", rate: 2 },
            ],
        },
        {
            title: "Database",
            skils: [
                { lang: "mongoDB", logo: "/images/mongodb.svg", alt: "mongodb", rate: 3 },
                { lang: "Mongoose ODM ", logo: "/images/mongoose.svg", alt: "mongoose", rate: 4 },
            ],
        },
        {
            title: "Communications",
            skils: [
                { lang: "Rest API ", logo: "/images/restAPI.png", alt: "restAPI", rate: 4 },
            ],
        },
        {
            title: "Authentication",
            skils: [
                { lang: "JSON Web Token (JWT)", logo: "/images/jwt.svg", alt: "jwt", rate: 3 },
            ],
        },
        {
            title: "Version control",
            skils: [
                { lang: "GIT", logo: "/images/git.svg", alt: "GIT", rate: 3 },
                { lang: "GitHub ", logo: "/images/github.svg", alt: "GitHub", rate: 3 },
            ],
        },
        {
            title: "Styling",
            skils: [
                { lang: "Cascading Style Sheets", logo: "/images/css.svg", alt: "css", rate: 4 },
                { lang: "SCSS", logo: "/images/sass.svg", alt: "sass", rate: 4 },
                { lang: "Styled Component", logo: "/images/sc.png", alt: "sc", rate: 3 },
                { lang: "Material UI", logo: "/images/muaterialui.svg", alt: "muaterialui", rate: 3 },
                { lang: "Bootstrap", logo: "/images/bootstrap.svg", alt: "bootstrap", rate: 3 },
            ],
        },
        {
            title: "Markup Language",
            skils: [
                { lang: "HTML", logo: "/images/html.svg", alt: "HTML", rate: 4 },
            ],
        },
    ]
};

export const MainQualities: Data = {
    topic: "Main qualities",
    about: [
        {
            qualities: " - attention to detail",
        },
        {
            qualities: " - ability to work independently and in a team",
        },
        {
            qualities: " - willingness to learn new technologies",
        },
        {
            qualities: " - dedication to producing high-quality work",
        }
    ]
};

export const Languages: Data = {
    topic: "Languages",
    about: [
        {
            languages: " Georgia  - native",
        },
        {
            languages: " Russian - C2",
        },
        {
            languages: " English - pre intermediate",
        }
    ]
};

export const PersonalDetails: Data = {
    topic: "Personal details",
    about: [
        {
            personal_details: [
                { text: "mail", network: "kakulia.irakly@gmail.com", logo: "/images/gmail.svg", alt: "mail", selector: 'h5' },
                { text: "phone", network: "+995 568 798 655", logo: "/images/phone.png", alt: "phone", selector: 'h5' },
                { text: "address", network: "Georgia, Tbilisi 0144", logo: "/images/direction.png", alt: "address", selector: 'h5' },
                { text: "linkedin", network: "https://www.linkedin.com/in/irakli-kakulia-b0843a95/", logo: "/images/linkedin.svg", alt: "linkedin", selector: 'a' },
                { text: "github", network: "https://github.com/dgebia", logo: "/images/github.svg", alt: "material-ui", selector: 'a' },
                { text: "instagram", network: "https://www.instagram.com/kakulia.irakly/", logo: "/images/Instagram.svg", alt: "instagram", selector: 'a' },
            ]

        }
    ]
};


export const notInfo: Data = {
    topic: "NOT INFORMATION",
    about: [
        {
            title: "NOT INFORMATION",
        }
    ]
};

export type { Data };
