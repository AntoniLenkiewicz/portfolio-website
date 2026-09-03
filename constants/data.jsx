import projectImage from '../src/assets/homepage.png';
import f1Image from '../src/assets/f1Image.png';
const F1Dashboard = {
    name: "F1 Dashboard",
    languages: "JS | Python | React | TailwindCSS",
    description: "A full stack web app to view current and past Formula 1 Statistics.",
    link: "https://github.com/AntoniLenkiewicz/F1-Dashboard",
    img: f1Image
}

const GymTracker = {
    name: "Gym Tracker",
    languages: "Swift | SwiftUI",
    description: "Client Side only gym tracking application. Saves workout data and entries directly to device.",
    link: "https://github.com/AntoniLenkiewicz/GymTrackerSwiftUi",
    img: projectImage
}
const BargainsCentral = {
    name: "Amazing Bargains Central",
    languages: "Python | Flask | HTML | CSS",
    description: "A Full Stack web application for my Security Module at university.",
    link: "https://github.com/AntoniLenkiewicz/GymTrackerSwiftUi",
    img: null
}

const Dissertation= {
    name: "Note detection in polyphonic chords",
    languages: "Python | TensorFlow | Scikit-Learn",
    description: "The code for my dissertation at University, a project exploring lighterweight alternatives for note detection in musical chords.",
    link: "https://github.com/AntoniLenkiewicz/note-detection-in-chords",
    img: null
}

export const currentProject = {
    name: "F1 Dashboard",
    languages: "JS | Python | React | TailwindCSS",
    description: "A full stack web app to view current and past Formula 1 Statistics. Current Status: In progress, waiting for Summer break to end to add live statistics and race monitoring.",
    link: "https://github.com/AntoniLenkiewicz/F1-Dashboard",
    img: projectImage
}


export const projects = [F1Dashboard, GymTracker, BargainsCentral, Dissertation]