import React, { Component, useEffect, useState } from "react";
import "./TeamMember.scss";
import ImageFlip from "@components/ImageFlip/ImageFlip";
import MailIcon from "../../pages/about/assets/emailIcon.png";

interface TeamProps {
  member: Member;
}

export interface Member {
  name: string;
  title: string;
  presentation?: string;
  mail: string;
  id: number;
  frontImage?: string;
  backImage?: string;
  link?: string;
}

function TeamMember(props: TeamProps) {
  const member = props.member;
  return (
    <div className="flex-container">
      <ImageFlip
        frontImage={props.member.frontImage}
        backImage={props.member.backImage}
        link={props.member.link}
      ></ImageFlip>
      <div className="split-members">
        <h2 className="name">{member.name}</h2>
        <h4 className="team-title">{member.title}</h4>
        <div className="presentation">
          <span>{member.presentation}</span>
        </div>
        <div className="mail-container">
          <img className="mail-icon" src={MailIcon} alt="Mail icon" />
          <a className="primary mail" href={"mailto:" + member.mail}>
            {member.mail}
          </a>
        </div>
      </div>
    </div>
  );
}
export default TeamMember;
