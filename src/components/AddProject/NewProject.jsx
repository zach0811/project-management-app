import { Input } from "../Input";

export const NewProject = () => {
  const handleCancelProject = () => {};

  const handleSaveProject = () => {};

  return (
    <div>
      <menu>
        <button onClick={handleCancelProject}>Cancel</button>
        <button onClick={handleSaveProject}>Save</button>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" textarea />
        <Input label="Start Date" type="date" />
      </div>
    </div>
  );
};
