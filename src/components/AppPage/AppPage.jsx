import { Sidebar } from "../Sidebar/Sidebar";
import { StartPage } from "../StartPage/StartPage";
import { NewProject } from "../AddProject/NewProject";
import { useState } from "react";

export const AppPage = () => {
  const [addingProject, setAddingProject] = useState(false);
  const handleAddProject = () => {
    setAddingProject(true);
  };
  return (
    <main className="h-screen my-8 flex gap-8 ">
      <Sidebar addProject={handleAddProject} />
      {/* <StartPage addProject={handleAddProject} /> */}
      <NewProject />
    </main>
  );
};
