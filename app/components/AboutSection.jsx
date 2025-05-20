"use client";
import { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript (ES6+)</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Next.js</li>
        <li>Java</li>
        <li>Scala</li>
        <li>Python</li>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>AWS (Cloud Practitioner Certified)</li>
        <li>Docker</li>
        <li>Git</li>
        <li>MongoDB</li>
        <li>PostgreSQL</li>
        <li>TypeScript</li>
        <li>Object-Oriented Programming (OOP)</li>
        <li>Test-Driven-Development (TDD)</li>
        <li>Behaviour-Driven-Development (BDD)</li>
        <li>Continuous Integration / Continuous Deployment (CI/CD)</li>
        <li>Scrum Fundamentals Certified</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Makers Academy, London (Remote) — Software Engineering (Scala specialization) - FEB 2025 - MAR 2025</li>
        <li>Makers Academy, London (Remote) — Software Engineering (Java specialization) - SEP 2024 - NOV 2024</li>
        <li>Makers Academy, London (Remote) — Software Engineering (JavaScript specialization) - MAY 2024 - SEP 2024</li>
        <li>Abertay University, Dundee — Sound Engineering (BA Hons) - AUG 2014 - JUN 2016</li>
        <li>Stow College, Glasgow — Sound Engineering (HND) - AUG 2011 - JUN 2013</li>
        <li>Central College of Commerce, Glasgow — Marketing (HNC) - AUG 2009 - JUN 2011</li>
      </ul>
    ),
  },
  {
    title: "Projects",
    id: "projects",
    content: (
      <ul className="list-disc pl-2">
        <li>Expert Language</li>
        <li>Quizzard</li>
        <li>Spy Invest</li>
        <li>Acebook</li>
        <li>MakersBnb</li>
        <li>Ascend</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2 space-y-2">
        <li>
          <strong>Co-founder and COO</strong> - Dukkan e-comm platform, Sudan (AUG 2016 - AUG 2019) <br /> Co-founded an e-commerce platform, overseeing all business operations. Expanded team and diversified service offerings. Managed the design and development of mobile applications for the platform.
        </li>
        <li>
          <strong>Team Leader & Costa Franchise manager</strong> - WHSmith/Costa Coffee, Bristol (FEB 2023 - AUG 2023) <br /> Establishing and training a team of baristas for the opening of a new Costa outlet allowed me to gain key skills in leadership, communication and management as I also assumed responsibilities of store manager for 50% of tenure.
        </li>
        <li>
          <strong>Sales Assistant</strong> - WHSmith, Bristol (DEC 2022 - FEB 2023) <br /> Managed stock replenishment on the sales floor. Ensured timely acceptance of supply deliveries. Provided attentive customer service throughout the store.
        </li>
        <li>
          <strong>Founder</strong> - FECT Ltd, Glasgow (MAR 2020 - MAR 2021) <br /> Founded a skincare company and launched a product line and online store.
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="flex flex-col h-full">
          <Image
            src={"/images/desk.jpeg"}
            width={500}
            height={500}
            alt="desk"
          />
        </div>

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I started my web-dev journey by leveraging online resources like the Odin project, Codecademy, and Harvard CS50 to establish a strong foundation in web development. I then Identified knowledge gaps and recognised the need for a structured learning environment to solidify my knowledge and accelerate skill development. I then joined Makers Academy bootcamp, consolidating previous learning and acquiring the necessary skills to contribute meaningfully to a software team.
          </p>
          <br />
          <p className="text-base lg:text-lg">
            These practical encounters have not only equipped me with the technical skills necessary for software development but have also instilled in me a passion for the iterative and creative aspects of coding. I&apos;ve always been drawn to translating business requirements into effective software solutions. The industry&apos;s flexibility and growth opportunities, including abundant opportunities for growth through certifications and ongoing learning make it an ideal fit for my goals. I am excited to add value by creating efficient, user-friendly solutions through code as previously done in Dukkan’s launching of digital platforms and Costa’s ordering system.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("projects")}
              active={tab === "projects"}
            >
              {" "}
              Projects{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
