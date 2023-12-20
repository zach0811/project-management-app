export const NewProject = () => {

  const handleCancelProject = () => {};

  const handleSaveProject = () => {};

  return (
    <div>
      <div>
        <button onClick={handleCancelProject}>Cancel</button>
        <button onClick={handleSaveProject}>Save</button>
      </div>
      <h1>Title</h1>
      <input></input>
      <h1>Description</h1>
      <input></input>
      <h1>Due Date</h1>
      <input type="date"></input>
    </div>
  );
};
