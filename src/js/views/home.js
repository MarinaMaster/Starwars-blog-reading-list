import React, { useState, useEffect } from "react";
import "../../styles/home.css";
import { Characters } from "./CharactersCards";
import { Planets } from "./PlanetsCards";

export const Home = () => {
  const [contacts, setContacts] = useState([]);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.results) {
          const promises = data.results.map((person) => {
            return fetch(`https://www.swapi.tech/api/people/${person.uid}`)
              .then((response) => response.json())
              .then((detailsData) => detailsData.result.properties);
          });

          Promise.all(promises).then((characters) => setContacts(characters));
        }
      })
      .catch((error) => console.error("ERROR:", error));
  }, []);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/planets")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.results) {
          const promises = data.results.map((planet) => {
            return fetch(`https://www.swapi.tech/api/planets/${planet.uid}`)
              .then((response) => response.json())
              .then((detailsData) => detailsData.result.properties);
          });

          Promise.all(promises).then((planets) => setDetails(planets));
        }
      })
      .catch((error) => console.error("ERROR:", error));
  }, []);

  return (
    <>
      <div className="container pb-3">
        <h1>Characters</h1>
        <div
          className="row"
          style={{ display: "flex", flexWrap: "nowrap", overflowX: "auto" }}
        >
          {contacts.map((contact, index) => (
            <Characters key={contact.uid || index} contact={contact} />
          ))}
        </div>
      </div>
      <div className="container pb-3">
        <h1>Planets</h1>
        <div
          className="row"
          style={{ display: "flex", flexWrap: "nowrap", overflowX: "auto" }}
        >
          {details.map((detail, index) => (
            <Planets key={detail.uid || index} detail={detail} />
          ))}
        </div>
      </div>
    </>
  );
};
