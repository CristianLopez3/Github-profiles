import React, { useState, useEffect } from "react";

import Card from "./Card";
import GithubForm from "./GithubForm";
import GithubError from "./GithubError";
import Loading from "./Loading";

const initalSeachr = {
  avatar_url: null,
  bio: null,
  name: null,
  public_repos: null,
};

export default function GithubSearch() {
  const [name, setName] = useState(null);
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (name === null || name === "") {
      return;
    }

    let url = `https://api.github.com/users/${name}`;

    // Peticion a la api para obtener los datos del perfil
    const request = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);

        if (!response.ok) {
          let err = new Error("Usuario no encontrado");
          err.status = response.status || "00";
          err.statusText =
            response.statusText || "Ocurrió un error en la búsqueda.";
          throw err;
        }

        const data = await response.json();

        // Actualiza el formulario con la información del usuario
        setProfile({
          avatar: data.avatar_url,
          bio: data.bio,
          public_repos: data.public_repos,
          username: data.name,
          url: data.html_url,
        });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    request();
  }, [name]);

  useEffect(() => {
    console.log("Perfil de la base de datos");
    console.log(profile);
  }, [profile]);

  const searchPerfil = (name) => {
    setName(name);
    // console.log(name);
  };

  // https://api.github.com/users/CristianLopez3
  return (
    <section className="search-section">
      <h1>Search </h1>
      <GithubForm key="23455115" searchPerfil={searchPerfil} />

      {loading && <Loading />}

      {error && (
        <GithubError status={error.status} statusText={error.statusText} />
      )}

      {profile !== null && (
        <Card
          key="2345"
          name={profile.username}
          avatar={profile.avatar}
          bio={profile.bio}
          repos={profile.public_repos}
          link={profile.url}
        />
      )}
    </section>
  );
}
