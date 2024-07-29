"use client"
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectData = [
    {
        id: 1,
        title: "React Portfolio Website",
        description: "Project 1 description",
        //TODO: PUT IMAGE IN HERE
        image: "images/project.png",
        tag: ["All", "Web", "Blog"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "React Portfolio Website",
        description: "Project 1 description",
        //TODO: PUT IMAGE IN HERE
        image: "images/project.png",
        tag: ["All", "Web", "Blog"],
        gitUrl: "/",
        previewUrl: "/",

    },
    {
        id: 3,
        title: "React Portfolio Website",
        description: "Project 1 description",
        //TODO: PUT IMAGE IN HERE
        image: "images/project.png",
        tag: ["All", "Web", "Blog"],
        gitUrl: "/",
        previewUrl: "/",
    }
]

const ProjectSection = () => {
    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag) => { setTag(newTag) }

    const filteredProjects = projectData.filter((project) => project.tag.includes(tag))

    return (
        <section id='projects'>
            <h2>
                My Projects
            </h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === "Web"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Mobile"
                    isSelected={tag === "Mobile"}
                />
            </div>
            <div>
                {filteredProjects.map((project => <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    imgUrl={project.image}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                />
                ))}
            </div>
        </section>
    )
}

export default ProjectSection