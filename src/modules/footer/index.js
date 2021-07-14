import React from "react";
import Contributor from "./contributor";
import "./index.css";

function Footer() {
  return (
    <section className={"Footer"}>
      <div className={"container footerContainer"}>
        <div className={"logoContainer"}>
          <img src={"./images/LOGO-3.svg"} alt={"logo"} />
        </div>
        <div className={"linkContainer"}>
          <h2 className={"footerTitle"}>{"Links"}</h2>
          <hr />
          <ul>
            <li>
              <a href={"#"}>{"Home"}</a>
            </li>
            <li>
              <a href={"#"}>{"Applications"}</a>
            </li>
            <li>
              <a href={"#"}>{"Technical Approach"}</a>
            </li>
            <li>
              <a href={"#"}>{"Output"}</a>
            </li>
            <li>
              <a href={"#"}>{"Code"}</a>
            </li>
            <li>
              <a href={"#"}>{"Future Scope"}</a>
            </li>
          </ul>
        </div>
        <div className={"contributorsContainer"}>
          <h2 className={"footerTitle"}>{"Contributors"}</h2>
          <hr/>
          <div className={"contributors"}>
            <Contributor
              src={"./images/user1.jpeg"}
              name={"Pushkar Khetrapal"}
              connectLink={"https://www.linkedin.com/in/pushkar-khetrapal-bb8935169/"}
            />
            <Contributor
              src={"./images/user2.jpeg"}
              name={"Mohit Chauhan"}
              connectLink={"https://www.linkedin.com/in/mohit-chauhan-48023912b/"}
            />
            <Contributor
              src={"./images/user3.jpeg"}
              name={"Pratul Hazela"}
              connectLink={"https://www.linkedin.com/in/pratul-hazela-5a7127201/"}
            />
            <Contributor
              src={"./images/user4.jpeg"}
              name={"Saraja Kadambari"}
              connectLink={"https://www.linkedin.com/in/saraja-kadambari-223b42170/"}
            />
            <Contributor
              src={"./images/user1.jpeg"}
              name={"Vaibhav Chakrabarti"}
              connectLink={"https://www.linkedin.com/in/vaibhav-chakarvarti-9b230618b/"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
