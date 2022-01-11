import React from "react";
import GameCards from "./cards/GameCards";

const Game = () => {
  return (
    <div className="Game" id="gameSection">
      <div className="container">
        <h1 className="mainHeading">THE DAO GAME</h1>
        <p className="subText">Psychics vs Alchemists</p>
        <p>
          Depending on which type of Future Punk you hold, you gain access to
          different areas of the game and different VP’s (voting power)
        </p>
        <div>
          <GameCards />
        </div>
        <div className="row my-4">
          <div className="col-md-4">
            <p>Psychic Punkz have the power to buy and flip.</p>
          </div>
          <div className="col-md-4">
            <p>Alchemist Punkz have the power to buy and hold.</p>
          </div>
          <div className="col-md-4">
            <p>Legendary Monkz have the power to pick a side</p>
          </div>
          <div className="col-12 my-3">
            <p>
              The goal is to have more in your wallet than the other team by the
              end of the game. Small battles and attacks gives your team the
              opportunity to challenge the others and steal from them.
            </p>
            <p>
              The winner gets the right over both wallets. We will not only
              focus on buying NFTs but also on crypto currencies and metaverse
              land. Share your best alpha with your tribe, strategize and raise
              the value of your token. Let the battle begin!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
