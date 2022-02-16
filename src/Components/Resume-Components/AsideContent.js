import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faSpider } from "@fortawesome/free-solid-svg-icons";

export default function AsideContent(props) {
  const typeExamples = {
    text: "whatever",
    phone: "123-123-1234",
    link: "mywebsite.com",
  };
  const iconList = [
    faGithub,
    faSpider,
    faFacebook,
    faInstagram,
    faLinkedin,
    faPhone,
    faAddressCard,
    faReact,
    faHtml5,
    faCss3,
    faJs,
    "",
  ];
  const [icon, setIcon] = useState(faGithub);
  const [isEditContent, setIsEditContent] = useState(false);
  const [content, setContent] = useState(typeExamples.phone);
  function toggleEditContent() {
    setIsEditContent((prevIsEdit) => !prevIsEdit);
  }
  function handleChange(event) {
    setContent(event.target.value);
  }
  function newIcon() {
    let index = iconList.indexOf(icon) + 1;
    if (index > iconList.length - 1) index = 0;
    setIcon(iconList[index]);
  }
  return isEditContent ? (
    <div>
      <input
        type={props.type}
        onDoubleClick={toggleEditContent}
        value={content}
        onChange={handleChange}
      />
      <FontAwesomeIcon
        icon={faCircleXmark}
        color="red"
        onClick={props.deleteSelf}
      />
    </div>
  ) : (
    <div>
      <FontAwesomeIcon icon={icon} color="black" onClick={newIcon} />
      <span onClick={toggleEditContent}>{content}</span>
    </div>
  );
}
