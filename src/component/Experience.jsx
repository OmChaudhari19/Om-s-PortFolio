import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import python from "../assets/python.png";

import mongo from "../assets/mongoDB.png";
import node from "../assets/node.png";
import c from "../assets/c.png";

import Eth from "../assets/Eth2.png";

const Experience = () => {
  const programmingSkils = [
    {
      id: 1,
      src: c,
      title: "C++",
      style: "shadow-blue-400",
    },
    {
      id: 2,
      src: python,
      title: "Python",
      style: "shadow-white",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
  ];
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
  ];
  const Backend = [
    {
      id: 5,
      src: node,
      title: "Node.js/Express.js",
      style: "shadow-green-400",
    },
    {
      id: 7,
      src: mongo,
      title: "MongoDB",
      style: "shadow-green-300",
    },
    {
      id: 8,
      src: Eth,
      title: "Web3",
      style: "shadow-gray-300",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
   
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline name-heading">
            Skills and Experience
          </p>
          <p className="py-6 font-cursive">
            I possess a diverse range of skills and proficiency in various
            programming languages. The following is a comprehensive list of the
            skills and programming languages in which I have gained considerable
            experience:
          </p>
        </div>
        <div>
        <span className="name-heading">Programming Skills</span>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {programmingSkils.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <span className="name-heading">Front-End Skills</span>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
        <span className="name-heading">Back-End Skills</span>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {Backend.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
