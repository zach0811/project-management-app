import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  const handleAddProject = () => {};
  return (
    <div className={styles.main}>
      <h1>Your Projects</h1>
      <button onClick={handleAddProject}>+ Add Project</button>
    </div>
  );
};
