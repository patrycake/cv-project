import Aside from "./Aside";
import Header from "./Header";
import ResumeItem from "./Resume-Components/ResumeItem";
import { useState } from "react";
import uniqid from "uniqid";

export default function Resume() {
  const [itemArray, setItemArray] = useState([<ResumeItem key={uniqid()} />]);
  function addResumeItem() {
    setItemArray((preItemArray) => [
      ...preItemArray,
      <ResumeItem key={uniqid()} />,
    ]);
  }
  return (
    <div className="resume">
      <Aside />
      <main>
        <Header />
        {itemArray}
        <button onClick={addResumeItem}>Add Resume Item</button>
      </main>
    </div>
  );
}
