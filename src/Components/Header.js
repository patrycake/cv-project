import { useState } from "react";

export default function Header() {
  const [isEditName, setIsEditName] = useState(false);
  const [isEditTitle, setIsEditTitle] = useState(false);
  const [info, setInfo] = useState({
    firstname: "Patricia",
    lastname: "Bird",
    title: "Frontend Developer",
  });
  function toggleEditName() {
    setIsEditName((preIsEdit) => !preIsEdit);
  }
  function toggleEditTitle() {
    setIsEditTitle((preIsEdit) => !preIsEdit);
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setInfo((preInfo) => ({ ...preInfo, [name]: value }));
  }
  return (
    <div className="header">
      {isEditName ? (
        <div>
          <input
            type="text"
            value={info.firstname}
            onDoubleClick={toggleEditName}
            onChange={handleChange}
            name="firstname"
          />
          <input
            type="text"
            value={info.lastname}
            onDoubleClick={toggleEditName}
            onChange={handleChange}
            name="lastname"
          />
        </div>
      ) : (
        <h1 className="name" onClick={toggleEditName}>
          <strong>{info.firstname} </strong>
          {info.lastname}
        </h1>
      )}
      {isEditTitle ? (
        <input
          type="text"
          value={info.title}
          onChange={handleChange}
          onDoubleClick={toggleEditTitle}
          name="title"
        />
      ) : (
        <p className="title" onClick={toggleEditTitle}>
          {info.title}
        </p>
      )}
    </div>
  );
}
