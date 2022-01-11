import React from "react";

const Team = () => {
  const cardData = [
    {
      img: "numa-saca.png",
      title: "Numa Saca",
      des: "Founder Community manager",
      cardStyle: "Card1",
    },
    {
      img: "solomonk.png",
      title: "Solo Monk",
      des: "Founder Creative director",
      cardStyle: "Card2",
    },
    {
      img: "pixdus.png",
      title: "Pixdus",
      des: "Artist",
      cardStyle: "Card3",
    },
    {
      img: "olof888.png",
      title: "Olof888",
      des: "Discord Admin Marketing Manager",
      cardStyle: "Card1",
    },
    {
      img: "sayonara.png",
      title: "sayonara",
      des: "Developer",
      cardStyle: "Card4",
    },
    {
      img: "parliamentdev.png",
      title: "parliamentDEV",
      des: "Developer",
      cardStyle: "Card5",
    },
    {
      img: "69hunter.png",
      title: "69Hunter",
      des: "Developer",
      cardStyle: "Card6",
    },
    {
      img: "macovey.png",
      title: "macovey",
      des: "UI/UX Designer",
      cardStyle: "Card3",
    },
  ];
  return (
    <div className="Team" id="teamSection">
      <div className="container">
        <h1>Team</h1>
        <div className="row">
          {cardData.map((item) => (
            <div className="col-md-3 my-3">
              <div className={item.cardStyle}>
                <img className="img-fluid" src={`/images/team/${item.img}`} alt="" />
                <h5>{item.title}</h5>
                <p>{item.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
