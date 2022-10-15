import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partsOfSpeech}</h3>
      {props.meaning.defenitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}