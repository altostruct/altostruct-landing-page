import * as React from "react";
import Footer from "@components/Footer/Footer";
import Topbar from "@components/Topbar/Topbar";
import Icon from "@components/Icon";
import "@styles/global.scss";
import "./aboutus.scss";
import TeamMember from "@components/TeamMember/TeamMember";

function AboutUs() {
  const teamMembers = [
    {
      name: "Rasmus Holmgren",
      title: "Fullstack developer",
      presentation: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Etiam condimentum ligula sed augue congue, et bibendum sem ultricies. 
      Quisque interdum dolor nec aliquam aliquam. 
      Mauris id massa dui. 
      Vivamus hendrerit tincidunt mattis. `,
      mail: "rasmus.holmgren@altostruct.se",
      id: 1,
    },
    {
      name: "Rasmus Holmgren",
      title: "Fullstack developer",
      presentation: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Etiam condimentum ligula sed augue congue, et bibendum sem ultricies.
      Quisque interdum dolor nec aliquam aliquam.
      Mauris id massa dui.
      Vivamus hendrerit tincidunt mattis. `,

      mail: "rasmus.holmgren@altostruct.se",
      id: 2,
    },
    {
      name: "Rasmus Holmgren",
      title: "Fullstack developer",
      presentation: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Etiam condimentum ligula sed augue congue, et bibendum sem ultricies.
      Quisque interdum dolor nec aliquam aliquam.
      Mauris id massa dui.
      Vivamus hendrerit tincidunt mattis. `,

      mail: "rasmus.holmgren@altostruct.se",
      id: 3,
    },
  ];

  return (
    <main className="page">
      <Topbar></Topbar>
      <Icon.Top className="top-icon" />

      <div className="title content screen-height">
        {/* <Icon.Square className="top-image" /> */}

        <div className="aboutus-content">
          <div>
            <h3 className="aboutus-title">Om vårt</h3>
            <h1 className="primary">Team</h1>
          </div>
          <div>
            {teamMembers.map((teamMember) => (
              <TeamMember member={teamMember} key={teamMember.id}></TeamMember>
            ))}
          </div>
        </div>
      </div>
      <Icon.Middle className="middle-icon"></Icon.Middle>
      <Icon.Bottom className="bottom-icon"></Icon.Bottom>
      {/* <Footer></Footer> */}
    </main>
  );
}
export default AboutUs;
