import React, { useState, useEffect } from "react";
import "../../styles/home.css";
import { Characters } from "./CharactersCards";

export const Home = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.results) {
          setContacts(data.results);
        }
      })
      .catch((error) => console.error("ERROR:", error));
  }, []);

  return (
    <>
      <div className="container pb-3">
        <div className="row">
          {contacts.map((contact, index) => (
            <Characters
              key={index}
              contact={contact}
              contacts={contacts}
              setContacts={setContacts}
            />
          ))}
        </div>
      </div>
    </>
  );
};
