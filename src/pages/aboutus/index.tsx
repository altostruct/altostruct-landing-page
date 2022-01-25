import * as React from "react";
import Footer from "@components/Footer/Footer";
import Topbar from "@components/Topbar/Topbar";
import Icon from "@components/Icon";
import "@styles/global.scss";
import "./index.scss";

import TeamMember, { Member } from "@components/TeamMember/TeamMember";
import ErikFrontImage from "./assets/frontImage.jpg";
import ErikBackImage from "./assets/aboutTest.png";

import AddFrontImage from "./assets/AddFrontImage.png";

function AboutUs() {
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

    {
      name: "Emilio Gustavsson",
      title: "Solutions architect & backend developer",
      presentation: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Etiam condimentum ligula sed augue congue, et bibendum sem ultricies.
      Quisque interdum dolor nec aliquam aliquam.
      Mauris id massa dui.
      Vivamus hendrerit tincidunt mattis. `,
      mail: "emilio.gustavsson@altostruct.se",
      id: 2,
      frontImage: ErikFrontImage,
      backImage: ErikBackImage,
    },
    {
      name: "Gustav Kasche",
      title: "Lead UX/Frontend developer",
      presentation: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Etiam condimentum ligula sed augue congue, et bibendum sem ultricies.
      Quisque interdum dolor nec aliquam aliquam.
      Mauris id massa dui.
      Vivamus hendrerit tincidunt mattis. `,
      mail: "gustav.kasche@altostruct.se",
      id: 3,
      frontImage: ErikFrontImage,
      backImage: ErikBackImage,
    },
    {
      name: "Joakim Tornert",
      title: "Webb developer",
      presentation: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Etiam condimentum ligula sed augue congue, et bibendum sem ultricies.
      Quisque interdum dolor nec aliquam aliquam.
      Mauris id massa dui.
      Vivamus hendrerit tincidunt mattis. `,

      mail: "joakim.tornert@altostruct.se",
      id: 4,
      frontImage: ErikFrontImage,
      backImage: ErikBackImage,
    },
    {
      name: "Axel Hedengren",
      title: "Communications manager",
      presentation: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Etiam condimentum ligula sed augue congue, et bibendum sem ultricies.
      Quisque interdum dolor nec aliquam aliquam.
      Mauris id massa dui.
      Vivamus hendrerit tincidunt mattis. `,

      mail: "axel.hedengren@altostruct.se",
      id: 5,
      frontImage: ErikFrontImage,
      backImage: ErikBackImage,
    },
    {
      name: "Alrik Jonek",
      title: "Backend developer",
      presentation: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Etiam condimentum ligula sed augue congue, et bibendum sem ultricies.
      Quisque interdum dolor nec aliquam aliquam.
      Mauris id massa dui.
      Vivamus hendrerit tincidunt mattis. `,
      mail: "alrik.jonek@altostruct.se",
      id: 6,
      frontImage: ErikFrontImage,
      backImage: ErikBackImage,
    },
    {
      name: "Gustav Rubbestad",
      title: "Fullstack developer",
      presentation: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Etiam condimentum ligula sed augue congue, et bibendum sem ultricies.
      Quisque interdum dolor nec aliquam aliquam.
      Mauris id massa dui.
      Vivamus hendrerit tincidunt mattis. `,
      mail: "gustav.rubbestad@altostruct.se",
      id: 7,
      frontImage: ErikFrontImage,
      backImage: ErikBackImage,
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
      frontImage: ErikFrontImage,
      backImage: ErikBackImage,
    },
  ];

  return (
    <main className="page">
      <Topbar></Topbar>
      <Icon.Top className="top-icon" />

      <div className="title content screen-height">
        <div className="aboutus-content sm-screen-height">
          <div>
            <h3 className="aboutus-title secondary-title">Om vårt</h3>
            <h1 className="aboutus-title primary-title">Team</h1>
          </div>
          <div>
            {teamMembers.map((teamMember) => (
              <TeamMember member={teamMember} key={teamMember.id}></TeamMember>
            ))}
            <TeamMember
              member={{
                name: "Lägg till person!",
                title:
                  "Är du näst på denna lista? Tveka inte på att skriva till oss!",
                mail: "info@altostruct.se",
                id: 1,
                frontImage: AddFrontImage,
                link: "mailto:info@altostruct.se",
              }}
            ></TeamMember>
          </div>
        </div>
      </div>
      <Icon.Middle className="middle-icon"></Icon.Middle>
      <Icon.Bottom className="bottom-icon"></Icon.Bottom>
      <Footer></Footer>
    </main>
  );
}
export default AboutUs;
