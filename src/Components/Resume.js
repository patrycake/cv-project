import Aside from "./Aside";
import Header from "./Header";
import ResumeItem from "./Resume-Components/ResumeItem";
import { useState } from "react";
import uniqid from "uniqid";

export default function Resume() {
  const [itemArray, setItemArray] = useState([
    <ResumeItem key={uniqid()} deleteSelf={() => deleteResumeItem(0)} />,
  ]);
  function addResumeItem() {
    setItemArray((preItemArray) => [
      ...preItemArray,
      <ResumeItem
        key={uniqid()}
        deleteSelf={() => deleteResumeItem(itemArray.length)}
      />,
    ]);
  }
  function deleteResumeItem(index) {
    setItemArray((preItemArray) => {
      preItemArray.splice(index, 1);
      return [...preItemArray];
    });
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
