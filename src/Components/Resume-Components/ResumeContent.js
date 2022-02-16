import { useState } from "react";

export default function ResumeContent() {
  const [isEditName, setIsEditName] = useState(false);
  const [content, setContent] = useState({
    title: "Job 1",
    date: "Date till Date",
    description:
      "Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation",
  });

  function handleClick(event) {
    setIsEditName((preIsEdit) => !preIsEdit);
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setContent((prevContent) => ({ ...prevContent, [name]: value }));
  }
  function handleKey(event) {
    if (event.key === "Enter") {
      handleClick();
    }
  }
  return isEditName ? (
    <div>
      <input
        type="text"
        name="title"
        value={content.title}
        onChange={handleChange}
        onDoubleClick={handleClick}
        onKeyPress={handleKey}
      />
      <input
        type="text"
        name="date"
        value={content.date}
        onChange={handleChange}
        onDoubleClick={handleClick}
        onKeyPress={handleKey}
      />
      <textarea
        name="description"
        value={content.description}
        onChange={handleChange}
        onDoubleClick={handleClick}
        onKeyPress={handleKey}
      />
    </div>
  ) : (
    <div>
      <h3 onClick={handleClick}>{content.title}</h3>
      <h4 onClick={handleClick}>{content.date}</h4>
      <p onClick={handleClick}>{content.description}</p>
    </div>
  );
}
