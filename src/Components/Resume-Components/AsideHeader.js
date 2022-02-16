import React, { useState } from "react";
export default function AsideHeader() {
  const [isEdit, setIsEdit] = useState(false);
  const [headerContent, setHeaderContent] = useState("Contact");
  function handleClick() {
    setIsEdit((preIsEdit) => !preIsEdit);
  }
  function handleChange(event) {
    const { value } = event.target;
    setHeaderContent(value);
  }
  function handleKey(event) {
    if (event.key === "Enter") {
      handleClick();
    }
  }
  return isEdit ? (
    <input
      type="text"
      value={headerContent}
      onChange={handleChange}
      onDoubleClick={handleClick}
      onKeyPress={handleKey}
    />
  ) : (
    <h3 onClick={handleClick}>{headerContent}</h3>
  );
}
