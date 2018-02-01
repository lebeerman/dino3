import React from 'react';

export default function Inputform() {
  return <form id="application-input">
      <label>Apply Here: </label>
      <textarea id="application-text" rows="8" cols="100" />
      <input id="submit" type="submit" value="Submit" />
    </form>;
}
