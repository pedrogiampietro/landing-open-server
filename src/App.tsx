import React from "react";
import ServerInfo from "./components/ServerInfo";
import Countdown from "./components/Countdown";
import Footer from "./components/Footer";
import { Server } from "./interfaces/Server";

const App: React.FC = () => {
  const servers: Server[] = [
    {
      name: "Telara",
      openingDate: "2024-04-20",
      rate: "x30",
      ml: "x10",
      skill: "x15",
      loot: "x20",
      downloadLink: "#",
      descriptionLink: "#",
    },
    {
      name: "Aldorion",
      openingDate: "2020-04-11",
      rate: "x50",
      ml: "x10",
      skill: "x15",
      loot: "x20",
      downloadLink: "#",
      descriptionLink: "#",
    },
    {
      name: "Warmen",
      openingDate: "2021-01-01",
      rate: "x100",
      ml: "x50",
      skill: "x75",
      loot: "x100",
      downloadLink: "#",
      descriptionLink: "#",
    },
  ];

  const targetDate = "2024-07-01T18:00:00";
  const openingDetails = {
    date: "1st July",
    time: "18:00 GMT +3",
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center">
      <Countdown targetDate={targetDate} openingDetails={openingDetails} />
      <h1 className="text-4xl font-bold mb-12 text-white drop-shadow-lg mt-12">
        Tibia Servers
      </h1>
      <div className="flex flex-wrap justify-center">
        {servers.map((server, index) => (
          <ServerInfo key={index} server={server} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
