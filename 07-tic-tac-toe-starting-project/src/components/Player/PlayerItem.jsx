import { useState } from "react";

export default function PlayerItem({
  name,
  symbol,
  isActive,
  handlePlayerChangeName,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [namePlayer, setNamePlayer] = useState(name);
  const [symbolPlayer, setSymbolPlayer] = useState(symbol);

  function handleEditClick(e) {
    e.preventDefault();
    setIsEditing((wasEditing) => !wasEditing);
    if (isEditing) {
      handlePlayerChangeName(symbolPlayer, namePlayer);
    }
  }
  let playerSection = <span className="player-name">{namePlayer}</span>;
  let symbolSection = <span className="player-symbol">{symbolPlayer}</span>;
  const buttonCaption = isEditing ? "Save" : "Edit";

  const handleChangeName = (e) => {
    setNamePlayer(e.target.value);
  };
  const handleChangeSymbol = (e) => {
    setSymbolPlayer(e.target.value);
  };

  if (isEditing) {
    playerSection = (
      <input
        type="text"
        required
        value={namePlayer}
        onChange={handleChangeName}
      />
    );
    /*symbolSection = (
      <input
        type="text"
        required
        value={symbolPlayer}
        onChange={handleChangeSymbol}
      />
    );*/
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerSection}
        {symbolSection}
      </span>
      <button onClick={handleEditClick}>{buttonCaption}</button>
    </li>
  );
}
