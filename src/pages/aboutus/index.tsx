import * as React from "react";
import Footer from "@components/Footer/Footer";
import Topbar from "@components/Topbar/Topbar";
import Icon from "@components/Icon";
import "@styles/global.scss";
import "./index.scss";
import TeamMember, { Member } from "@components/TeamMember/TeamMember";
import { MemberName } from "typescript";
import ErikFrontImage from "./assets/frontImage.jpg";
import ErikBackImage from "./assets/aboutTest.png";

function AboutUs() {
  //interface
  //bilder
  const teamMembers: Member[] = [
    {
      name: "Erik Rehn",
      title: "CEO & Cloud Consultant",
      presentation: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Etiam condimentum ligula sed augue congue, et bibendum sem ultricies. 
      Quisque interdum dolor nec aliquam aliquam. 
      Mauris id massa dui. 
      Vivamus hendrerit tincidunt mattis. `,
      mail: "erik.rehn@altostruct.se",
      id: 1,
      frontImage: ErikFrontImage,
      backImage: ErikBackImage,
    },
    /*
    {
      name: "Emilio Gustavsson",
      title: "Solutions architect & backend developer",
      presentation: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Etiam condimentum ligula sed augue congue, et bibendum sem ultricies.
      Quisque interdum dolor nec aliquam aliquam.
      Mauris id massa dui.
      Vivamus hendrerit tincidunt mattis. `,

      mail: "rasmus.holmgren@altostruct.se",
      id: 2,
    },
    {
      name: "Gustav Kasche",
      title: "Lead UX/Frontend developer",
      presentation: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Etiam condimentum ligula sed augue congue, et bibendum sem ultricies.
      Quisque interdum dolor nec aliquam aliquam.
      Mauris id massa dui.
      Vivamus hendrerit tincidunt mattis. `,

      mail: "rasmus.holmgren@altostruct.se",
      id: 3,
    },
    {
      name: "Joakim Tornert",
      title: "Webb developer",
      presentation: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Etiam condimentum ligula sed augue congue, et bibendum sem ultricies.
      Quisque interdum dolor nec aliquam aliquam.
      Mauris id massa dui.
      Vivamus hendrerit tincidunt mattis. `,

      mail: "rasmus.holmgren@altostruct.se",
      id: 4,
    },
    {
      name: "Axel Hedengren",
      title: "Communications manager",
      presentation: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Etiam condimentum ligula sed augue congue, et bibendum sem ultricies.
      Quisque interdum dolor nec aliquam aliquam.
      Mauris id massa dui.
      Vivamus hendrerit tincidunt mattis. `,

      mail: "rasmus.holmgren@altostruct.se",
      id: 5,
    },
    {
      name: "Alrik Jonek",
      title: "Backend developer",
      presentation: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Etiam condimentum ligula sed augue congue, et bibendum sem ultricies.
      Quisque interdum dolor nec aliquam aliquam.
      Mauris id massa dui.
      Vivamus hendrerit tincidunt mattis. `,

      mail: "rasmus.holmgren@altostruct.se",
      id: 6,
    },
    {
      name: "Gustav Rubbestad",
      title: "Fullstack developer",
      presentation: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Etiam condimentum ligula sed augue congue, et bibendum sem ultricies.
      Quisque interdum dolor nec aliquam aliquam.
      Mauris id massa dui.
      Vivamus hendrerit tincidunt mattis. `,

      mail: "rasmus.holmgren@altostruct.se",
      id: 7,
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
      id: 8,
    },
    */
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
