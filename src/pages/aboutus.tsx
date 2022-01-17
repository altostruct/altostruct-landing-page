import * as React from "react";
import Footer from "@components/Footer/Footer";
import Topbar from "@components/Topbar/Topbar";
import Icon from "@components/Icon";
import "@styles/global.scss";
import "./aboutus.scss";

function AboutUs() {
  const team = [
    {
      name: "Rasmus Holmgren",
      title: "Fullstack developer",
      presentation: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        Aenean commodo ligula eget dolor. Aenean massa. 
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.`,
      mail: "rasmus.holmgren@altostruct.se",
      id: 1,
    },
    {
      name: "Rasmus Holmgren",
      title: "Fullstack developer",
      presentation: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        Aenean commodo ligula eget dolor. Aenean massa. 
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.`,
      mail: "rasmus.holmgren@altostruct.se",
      id: 1,
    },
  ];

  return (
    <main className="page">
      <Topbar></Topbar>
      <div className="title content screen-height">
        <Icon.Square className="top-image" />
        <div className="aboutus-content">
          <div className="sm-screen-height">
            <label>Om vårt</label>
            <h1 className="primary">Team</h1>
          </div>

          {team.map((teamMember) => (
            <div className="split-members" key={teamMember.id}>
              <h2>{teamMember.name}</h2>
              <label>{teamMember.title}</label>
              <p>
                <span className="aboutus-presentation">
                  {teamMember.presentation}
                </span>
              </p>
              <a
                className="aboutus-mail primary"
                href={"mailto:" + teamMember.mail}
              >
                {teamMember.mail}
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </main>
  );
}
export default AboutUs;
