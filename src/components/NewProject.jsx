import { Input } from "./Input";
import { useRef } from "react";
import { Modal } from "./Modal";

export const NewProject = ({ onAdd, onCancel }) => {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const startDate = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredStartDate = startDate.current.value;
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredStartDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      startDate: enteredStartDate,
    });
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 mt-4 my-4">
          Invalid Input
        </h2>
        <p className="text-stone-600 mb-4">
          Please enter a valid title, description and start date (in the
          future).
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <button
            className="text-stone-800 hover:text-stone-950"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={handleSave}
          >
            Save
          </button>
        </menu>
        <div>
          <Input ref={title} label="Title" type="text" />
          <Input ref={description} label="Description" textarea />
          <Input ref={startDate} label="Due Date" type="date" />
        </div>
      </div>
    </>
  );
};
