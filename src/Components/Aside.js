import AsidePhoto from "./Resume-Components/AsidePhoto";
import AsideItem from "./Resume-Components/AsideItem";
import uniqid from "uniqid";
import { useState } from "react";

export default function Aside() {
  const [itemArray, setItemArray] = useState([<AsideItem key={uniqid()} />]);
  function addAsideItem() {
    setItemArray((preItemArray) => [
      ...preItemArray,
      <AsideItem key={uniqid()} />,
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
