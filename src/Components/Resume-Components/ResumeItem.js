import ResumeContent from "./ResumeContent";
import ResumeHeader from "./ResumeHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import uniqid from "uniqid";

export default function ResumeItem() {
  const [contentArray, setContentArray] = useState([
    <ResumeContent key={uniqid()} />,
  ]);
  function addResumeContent() {
    setContentArray((preContentArray) => [
      ...preContentArray,
      <ResumeContent key={uniqid()} />,
    ]);
  }
  return (
    <div className="resume-item">
      <ResumeHeader />
      {contentArray}
      <FontAwesomeIcon icon={faCircleXmark} color="red" />
      <FontAwesomeIcon
        icon={faCirclePlus}
        color="green"
        onClick={addResumeContent}
      />
    </div>
  );
}
