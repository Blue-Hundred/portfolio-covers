import ProjectCover from "./ProjectCover";
import { projects } from "../data/projects";
import "./CoversGrid.css";

export default function CoversGrid() {
  return (
    <div className="covers-grid">
      {projects.map((project) => (
        <ProjectCover key={project.title} {...project} />
      ))}
    </div>
  );
}
