// import Image from 'next/image'
import BugTracker  from       "./../../assets/BugTracker.png"    ///"./../../assets/BugTracker.png"
import FoodOdering  from "./../../assets/foodOrdering.png"
import SwitfDrive  from "./../../assets/SWIFTDRIVE.png"
import Slackbot  from "./../../assets/Slackbot.png"
import Php  from "./../../assets/php_Icon.png"
export default function Projects() {
  const projects = [
    {
      title: "Car Rental-Platform",
      description: "A car Rental Platform with host normal users and Admin build in Laravel HTML And CSS",
      image:  SwitfDrive,
      githubLink:"https://github.com/keneil2/SwiftDrive"
    },
    {
      title: "Bug Tracker",
      description: "Bug Tracker  HTML, CSS and Laravel",
      image: BugTracker,
       githubLink:"https://github.com/keneil2/the-bugTracker"
    },
    {
      title: "Food Ordering Website",
      description: "Food Ordering website build in HTML,CSS and PHP",
      image: FoodOdering,
       githubLink:"https://github.com/keneil2/BYTE"
    },
    {
        title: "PHP FRAMEWORK",
        description: "Built using PHP Singleton Design Pattern and  Facade (still a working Progress)",
        image:  Php ,
         githubLink:"https://github.com/keneil2/Lara-2.0"
      },
      {
        title: "SLACK BOT",
        description: "Built using OOP PHP and Curl",
        image: Slackbot,
         githubLink:"https://github.com/keneil2/slack-Bot"
      }
  ]

  return (
    <section id="projects" className="py-20 bg-slate-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
           <a href={project.githubLink} target="_blank"> <div key={index} className="bg-white w-80 rounded-lg shadow-md overflow-hidden">
              <img src={project.image} alt={project.title}   width={"300px"} height={"200px"} className="w-full" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </div></a>
          ))}
        </div>
      </div>
    </section>
  )
}

