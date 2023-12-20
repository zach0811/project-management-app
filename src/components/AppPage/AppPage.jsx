import { Sidebar } from "../Sidebar/Sidebar";
import { StartPage } from "../StartPage/StartPage";
import { useState } from "react";
import styles from "./AppPage.module.css";

export const AppPage = () => {
  const [addingProject, setAddingProject] = useState(false);
  const handleAddProject = () => {
    setAddingProject(true);
  };
  return (
    <div className={styles.main}>
      <Sidebar addProject={handleAddProject} />
      <StartPage addProject={handleAddProject} />
    </div>
  );
};
