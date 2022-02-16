import AsideHeader from "./AsideHeader";
import AsideContent from "./AsideContent";
import uniqid from "uniqid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function AsideItem(props) {
  const [contentArray, setContentArray] = useState([
    <AsideContent key={uniqid()} deleteSelf={() => deleteAsideContent(0)} />,
  ]);
  function addAsideContent() {
    setContentArray((preContentArray) => [
      ...preContentArray,
      <AsideContent
        key={uniqid()}
        deleteSelf={() => deleteAsideContent(contentArray.length)}
      />,
    ]);
  }
  function deleteAsideContent(index) {
    setContentArray((preContentArray) => {
      preContentArray.splice(index, 1);
      return [...preContentArray];
    });
  }
  return (
    <div className="aside-item">
      <AsideHeader />
      {contentArray}

      <FontAwesomeIcon
        icon={faCircleXmark}
        color="red"
        onClick={props.deleteSelf}
      />
      <FontAwesomeIcon
        icon={faCirclePlus}
        color="green"
        onClick={addAsideContent}
      />
    </div>
  );
}
