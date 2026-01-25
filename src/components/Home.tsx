import { locations, type FolderItem, type WindowId } from "@constants";
import { useGSAP } from "@gsap/react";
import useLocationStore from "@store/location";
import useWindowStore from "@store/window";
import clsx from "clsx";
// @ts-ignore
import { Draggable } from "gsap/Draggable";

const projects = locations.work.children ?? [];
const Home = () => {
  const { setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();
  const handleOpenProject = (project: FolderItem) => {
    setActiveLocation(project);
    openWindow("finder" as WindowId);
  };

  useGSAP(() => {
    Draggable.create("#home .folder");
  }, []);
  return (
    <section id="home">
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            className={clsx("group folder", project.position)}
            onClick={() => handleOpenProject(project as FolderItem)}
          >
            <img src="/images/folder.png" />
            <p>{project.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
