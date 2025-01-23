import PlayerItem from "./PlayerItem";

export default function Player({ activePlayer, handlePlayerChangeName }) {
  return (
    <ol id="players" className="highlight-player">
      <PlayerItem
        isActive={activePlayer === "X"}
        name={"Player 1"}
        symbol={"X"}
        handlePlayerChangeName={handlePlayerChangeName}
      />
      <PlayerItem
        isActive={activePlayer === "O"}
        name={"Player 2"}
        symbol={"O"}
        handlePlayerChangeName={handlePlayerChangeName}
      />
    </ol>
  );
}
