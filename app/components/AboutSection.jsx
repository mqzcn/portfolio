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
        <li>Next JS</li>
        <li>React JS</li>
        <li>Express JS</li>
        <li>Mongo DB</li>
        <li>Node JS</li>
        <li>Tailwind CSS</li>
        <li>Git</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Scrum Fundamentals Certified - ScrumStudy 2023</li>
        <li>BA (Hon) Creative Sound Production - Abertay University 2016</li>
        <li>
          Higher National Certificate - Marketing - Central College of Commerece
          2012
        </li>
      </ul>
    ),
  },
  {
    title: "Projects",
    id: "projects",
    content: (
      <ul className="list-disc pl-2">
        <li>Ascend</li>
        <li>Krypterm</li>
        <li>Exercise Tracker</li>
        <li>Meme Generator</li>
        <li>Breaking Bad</li>
        <li>Calculator</li>
        <li>Keyboard Speed</li>
        <li>Shopping Cart</li>
        <li>Navbar</li>
        <li>Modal</li>
        <li>Food Menu</li>
        <li>Reviews Section</li>
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
            My coding journey has been substantial, encompassing self-taught
            coding and process management skills in personal tech projects.
            Through these experiences, I have gained proficiency in web
            technologies such as JavaScript, React JS and Node, among others and
            developed a strong foundation in algorithmic thinking, and honed my
            problem-solving skills.
          </p>{" "}
          <br></br>
          <p className="text-base lg:text-lg">
            These practical encounters have not only equipped me with the
            technical skills necessary for software development but have also
            instilled in me a passion for the iterative and creative aspects of
            coding.
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
