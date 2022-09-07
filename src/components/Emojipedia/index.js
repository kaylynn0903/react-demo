import React from "react";
import Entry from "./Entry";
import emoji from "./emoji";
import "./index.css";

// 1. Create Entry Component
// 2. Create props to replace hardcode data
// 3a. Import the emojipedia const
// 3b. Map through the emojipedia array and render Entry Components

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

function Emojipedia() {
  return (
    <div className="Emojipedia">
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emoji.map(createEntry)}</dl>
    </div>
  );
}

export default Emojipedia;
