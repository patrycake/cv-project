import AsidePhoto from "./Resume-Components/AsidePhoto";
import AsideItem from "./Resume-Components/AsideItem";
import uniqid from "uniqid";
import { useState } from "react";

export default function Aside() {
  const [itemArray, setItemArray] = useState([
    <AsideItem key={uniqid()} deleteSelf={() => deleteAsideItem(0)} />,
  ]);
  function deleteAsideItem(index) {
    setItemArray((preItemArray) => {
      preItemArray.splice(index, 1);
      return [...preItemArray];
    });
  }
  function addAsideItem() {
    setItemArray((preItemArray) => [
      ...preItemArray,
      <AsideItem
        key={uniqid()}
        deleteSelf={() => deleteAsideItem(itemArray.length)}
      />,
    ]);
  }
  return (
    <aside className="aside">
      <AsidePhoto />
      {itemArray}
      <button onClick={addAsideItem}>Add Aside Item</button>
    </aside>
  );
}
