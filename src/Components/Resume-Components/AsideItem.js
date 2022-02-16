import AsideHeader from "./AsideHeader";
import AsideContent from "./AsideContent";
import uniqid from "uniqid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function AsideItem(props) {
  const [contentArray, setContentArray] = useState([
    <AsideContent key={uniqid()} />,
  ]);
  function addAsideContent() {
    setContentArray((preContentArray) => [
      ...preContentArray,
      <AsideContent key={uniqid()} />,
    ]);
  }
  return (
    <div className="aside-item">
      <AsideHeader />
      {contentArray}

      <FontAwesomeIcon icon={faCircleXmark} color="red" />
      <FontAwesomeIcon
        icon={faCirclePlus}
        color="green"
        onClick={addAsideContent}
      />
    </div>
  );
}
