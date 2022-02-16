import ResumeContent from "./ResumeContent";
import ResumeHeader from "./ResumeHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import uniqid from "uniqid";

export default function ResumeItem(props) {
  const [contentArray, setContentArray] = useState([
    <ResumeContent key={uniqid()} deleteSelf={() => deleteResumeContent(0)} />,
  ]);
  function addResumeContent() {
    setContentArray((preContentArray) => [
      ...preContentArray,
      <ResumeContent
        key={uniqid()}
        deleteSelf={() => deleteResumeContent(contentArray.length)}
      />,
    ]);
  }
  function deleteResumeContent(index) {
    setContentArray((prevContentArray) => {
      prevContentArray.splice(index, 1);
      return [...prevContentArray];
    });
  }
  return (
    <div className="resume-item">
      <ResumeHeader />
      {contentArray}
      <FontAwesomeIcon
        icon={faCircleXmark}
        color="red"
        onClick={props.deleteSelf}
      />
      <FontAwesomeIcon
        icon={faCirclePlus}
        color="green"
        onClick={addResumeContent}
      />
    </div>
  );
}
