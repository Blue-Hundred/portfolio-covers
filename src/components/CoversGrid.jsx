import "./CoversGrid.css";
import ProjectCover from "./ProjectCover";
import { projects } from "../data/projects"; // <-- IMPORTANT: named export

export default function CoversGrid() {
  return (
    <div className="coversPage">
      <div className="coversGrid">
       {projects.map((p) => (
  <ProjectCover key={p.title} {...p} />
))}
      </div>
    </div>
  );
}
