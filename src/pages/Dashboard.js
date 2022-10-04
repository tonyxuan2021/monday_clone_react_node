import React from "react";
import TicketCard from "../components/TicketCard";

const Dashboard = () => {
  const tickets = [
    {
      category: "Q1 2022",
      color: "red",
      title: "NFT Safety 101 Video",
      owner: "Ania Kubow",
      avatar:
        "https://www.freecodecamp.org/news/content/images/size/w150/2021/05/ania-kubow-gravatar.jpeg",
      status: "done",
      priority: 5,
      progress: 40,
      description:
        "Make a video showcasing how to work with NFTs safely, including how to know if one is not genuine.",
      timestamp: "2022-02-11T07:36:17+0000",
    },
    {
      category: "Q1 2022",
      color: "red",
      title: "Build and Sell AI Model",
      owner: "Ania Kubow",
      avatar:
        "https://www.freecodecamp.org/news/content/images/size/w150/2021/05/ania-kubow-gravatar.jpeg",
      status: "WIP",
      priority: 2,
      progress: 70,
      description: "Make a about AI.",
      timestamp: "2022-02-13T07:36:17+0000",
    },
    {
      category: "Q2 2022",
      color: "blue",
      title: "Build a bot",
      owner: "Ania Kubow",
      avatar:
        "https://www.freecodecamp.org/news/content/images/size/w150/2021/05/ania-kubow-gravatar.jpeg",
      status: "WIP",
      priority: 3,
      progress: 10,
      description: "Make a bot.",
      timestamp: "2022-02-15T07:36:17+0000",
    },
  ];

  const uniqueCategories = [
    ...new Set(
      tickets?.map(({ category }) => {
        return category;
      })
    ),
  ];

  console.log(uniqueCategories);

  return (
    <div className="dashboard">
      <h1>My Projects</h1>
      <div className="ticket-container">
        <TicketCard />
      </div>
    </div>
  );
};

export default Dashboard;
