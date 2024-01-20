import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 name-heading">
            About
          </p>
        </div>

        <p className="text-xl ">
I am Om Chaudhari, currently pursuing my third year in Computer Science at the Indian Institute of Information Technology, graduating in the batch of 2025. Over the course of my studies, I have honed my skills in several popular programming languages, including C, C++, Java, and Python. Additionally, I have strengthened my understanding of Data Structures and Algorithms.

In the realm of Web Development, I have acquired knowledge in technologies such as React, Node, Express, MongoDB, and more. My exploration extends to emerging fields, and I am currently delving into Blockchain and Web3 technologies.
        </p>
        <p className="text-xl mt-20">
        In addition to my technical pursuits, I find joy in various personal hobbies. During my leisure time, I indulge in playing console and PC games, immersing myself in virtual worlds and challenging scenarios.other passion of mine is music, which I often turn to for relaxation. Whether it's exploring different genres, discovering new artists, or simply enjoying familiar tunes, music has a profound impact on my well-being. 
        If you share similar interests, I would be delighted to connect with you. Exchanging recommendations, discussing favorite titles, or discovering new tracks could be a fantastic way to bond over shared passions. Let me know if you're up for connecting and exploring these interests together!
        </p>

        <br />
      </div>
    </div>
  );
};

export default About;
