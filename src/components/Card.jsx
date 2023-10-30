import React from "react";

export default function Card({ name, avatar, bio, repos, link }) {
  return (
    <div className="profile-card">
      <div className="profile-body">
        <img src={avatar} alt={name} />
        <div className="profile-content">
          <h2>{name}</h2>
          <p id="bio">{bio}</p>
          <p id="repos">Public Repos: <span>{repos}</span></p>
          <a href={link}>Visit This Profile</a>
        </div>
      </div>
    </div>
  );
}
