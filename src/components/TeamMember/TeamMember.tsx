import React, { useEffect, useState } from "react";
import "./TeamMember.scss";

interface TeamProps {
  member: {
    name: string;
    title: string;
    presentation: string;
    mail: string;
    id: number;
  };
}

function TeamMember(props: TeamProps) {
  const member = props.member;
  return (
    <div className="split-members">
      <h2 className="name">{member.name}</h2>
      <h4 className="team-title">{member.title}</h4>
      <div className="presentation">
        <span>{member.presentation}</span>
      </div>
      <div className="mail">
        <a className="primary" href={"mailto:" + member.mail}>
          {member.mail}
        </a>
      </div>
    </div>
  );
}
export default TeamMember;
