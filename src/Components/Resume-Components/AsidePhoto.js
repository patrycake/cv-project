import { useState } from "react";
import profile from "../../user.png";
export default function AsidePhoto() {
  const [isEdit, setIsEdit] = useState(false);
  const [imgSrc, setImgSrc] = useState(profile);
  function toggleImgEdit() {
    setIsEdit((prevEdit) => !prevEdit);
  }
  function onImageChange(event) {
    console.log(event.target.files[0]);
    setImgSrc(URL.createObjectURL(event.target.files[0]));
    setIsEdit((prevEdit) => !prevEdit);
  }
  return isEdit ? (
    <input type="file" multiple accept="image/*" onChange={onImageChange} />
  ) : (
    <div className="photo">
      <img className="img-profile" src={imgSrc} onClick={toggleImgEdit} />
    </div>
  );
}
