import React from "react";
import { FaDownload, FaInfoCircle } from "react-icons/fa";
import IconeIlustrativo from "/ilustrativo.webp";
import { Server } from "../interfaces/Server";

interface ServerInfoProps {
  server: Server;
}

const ServerInfo: React.FC<ServerInfoProps> = ({ server }) => {
  return (
    <div className="relative max-w-md rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-800 to-gray-900 m-4 p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 via-blue-500 to-blue-600 opacity-20"></div>
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <img
              src={IconeIlustrativo}
              alt="Server"
              className="h-16 w-16 rounded-full border-2 border-white mr-4"
            />
            <div className="font-bold text-4xl text-white">{server.name}</div>
          </div>
          <span className="bg-blue-500 text-xs px-2 py-1 rounded-full text-gray-100">
            New
          </span>
        </div>
        <div className="text-sm text-gray-400 mb-4">
          {new Date(server.openingDate).toLocaleDateString()}
        </div>
        <div className="flex justify-between text-lg mb-4 space-x-4">
          <div className="text-center">
            <p className="font-bold text-white">{server.rate}</p>
            <p className="text-xs text-gray-400">Exp</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-white">{server.ml}</p>
            <p className="text-xs text-gray-400">ML</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-white">{server.skill}</p>
            <p className="text-xs text-gray-400">Skill</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-white">{server.loot}</p>
            <p className="text-xs text-gray-400">Drop/Loot</p>
          </div>
        </div>
        <div className="flex justify-between text-sm mt-4 space-x-4">
          <a
            href={server.downloadLink}
            className="text-white flex items-center hover:underline transition-colors hover:text-blue-400"
          >
            <FaDownload className="mr-2" /> Download files
          </a>
          <a
            href={server.descriptionLink}
            className="text-white flex items-center hover:underline transition-colors hover:text-blue-400"
          >
            <FaInfoCircle className="mr-2" /> Full server description
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServerInfo;
