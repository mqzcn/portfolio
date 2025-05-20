"use client";
import { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Expert Language",
    description: "A platform for interpreting and translation services",
    image: "/images/projects/krypterm.png",
    tag: ["All", "React", "Express", "MongoDB", "Node.js"],
    gitUrl: "https://github.com/mqzcn/expert",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Quizzard",
    description: "A multiplayer trivia game",
    image: "/images/projects/krypterm.png",
    tag: ["All", "React", "Springboot", "PostgreSQL", "Socket.io"],
    gitUrl: "https://github.com/olnov/trivia",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Spy Invest",
    description: "An investment tracking web and mobile app",
    image: "/images/projects/krypterm.png",
    tag: ["All", "React", "Express", "PostgreSQL", "Node.js", "Swift"],
    gitUrl: "https://github.com/olnov/spyinvest",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Acebook",
    description: "A web app clone of Facebook",
    image: "/images/projects/krypterm.png",
    tag: ["All", "React", "Express", "MongoDB", "Node.js"],
    gitUrl: "https://github.com/Matt-Wilkes/acebook-Fire",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "MakersBnb",
    description: "A web app clone of AirBnB",
    image: "/images/projects/krypterm.png",
    tag: ["All", "React", "Flask", "PostgreSQL"],
    gitUrl: "https://github.com/petesteele98/makersbnbTVD",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Ascend",
    description: "A platform for centralising Costa store orders",
    image: "/images/projects/krypterm.png",
    tag: ["All", "React", "Strapi", "GraphQL", "Next.js"],
    gitUrl: "https://github.com/mqzcn/ascend2",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row flex-wrap justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React"
          isSelected={tag === "React"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Node.js"
          isSelected={tag === "Node.js"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="MongoDB"
          isSelected={tag === "MongoDB"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="PostgreSQL"
          isSelected={tag === "PostgreSQL"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Next.js"
          isSelected={tag === "Next.js"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Springboot"
          isSelected={tag === "Springboot"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Socket.io"
          isSelected={tag === "Socket.io"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Swift"
          isSelected={tag === "Swift"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Flask"
          isSelected={tag === "Flask"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Strapi"
          isSelected={tag === "Strapi"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="GraphQL"
          isSelected={tag === "GraphQL"}
        />
      </div>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
