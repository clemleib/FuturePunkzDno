import React from "react";

const Roadmap = () => {
  const content = [
    {
      title: "- LAUNCH -",
      des: "4444 Future Punkz Genesis will be released to the blockchain. Alchemists, Psychics and Legendary Monkz enter the metaverse",
      borderColor: "borderOne",
    },
    {
      title: "- THE DAO GAME - ",
      des: "Psychics vs Alchemists! Flipping vs holding! Who is gonna make it? Read the game instructions and choose your tribe.",
      borderColor: "borderTwo",
    },
    {
      title: "- DONATION -",
      des: "Let’s make a donation from the team wallet to an organization of your choice. We can also add something from the DAO wallet if you feel generous;)",
      borderColor: "borderThree",
    },
    {
      title: "- NEXT LEVEL - ",
      des: "Time to expand the battle and create something unique. Future Punkz DAO members and artists will conspire to create our v2 collection. One word: Anime",
      borderColor: "borderOne",
    },
    {
      title: "- MERCH -",
      des: "Merch is merch. Let’s make something dope",
      borderColor: "borderTwo",
    },
    {
      title: "- V2 -",
      des: "V2 to the world! Imagine the first community created bluechip. A part of these sales will also be allocated to the DAO wallet.",
      borderColor: "borderThree",
    },
    {
      title: "- UTOPIA ROADMAP 2.0 -",
      des: " Metaverse - launchpad - IRL events The future is DAO!",
      borderColor: "borderOne",
    },
  ];
  return (
    <div className="Roadmap" id="roadmapSection">
      <div className="container">
        <h1>Roadmap</h1>
        <p className="subText">
          First stop moon. Second stop jupiter. Third stop UTOPIA!
        </p>
        <div className="roadmapCard">
          {content.map((item) => (
            <div className={item.borderColor}>
              <h5 className="subText">{item.title}</h5>
              <p>{item.des}</p>
            </div>
          ))}
        </div>
        <p>
          There will be a lot of discussing, exchanging, voting and
          brainstorming. Together with the community we will create the best
          roadmap for our DAO. These are some milestones on that road. But we
          will stay dynamic and fluid with the times, with our evolution and
          most importantly with what brings us joy and fulfillment.
        </p>
        <p> The destination is clear… </p>
        <p>UTOPIA</p>
      </div>
    </div>
  );
};

export default Roadmap;
