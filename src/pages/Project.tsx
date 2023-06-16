import React from "react";
import ProjectCard from "../components/molecules/ProjectCard";
import Modal from "../components/templates/Modal";
import { project } from "../project";

export default function Project() {
  return (
    <div className="bg-[#2a2a2a] text-[#8a8a8a] py-8 ">
      <div className="container p-10 mx-auto">
        <h1 className="text-[#cacaca] text-3xl sm:text-5xl font-bold mb-8">
          개인 작업물 입니다.
        </h1>

        <div className="grid gap-4 md:grid-cols-2 ">
          {project.map((item) => (
            <ProjectCard item={item}></ProjectCard>
          ))}
        </div>
      </div>
    </div>
  );
}
