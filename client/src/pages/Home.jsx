import React from 'react';
import '../styles/Home.css';
import quizmeLogo from '../assets/quizme-logo.svg';
import gearIcon from '../assets/gear-icon.svg';
import peopleIcon from '../assets/people-icon.svg';
import lightningBolt from '../assets/lightning-bolt-icon.svg';

const Home = () => {
  return (
    <main>
      {/* Header Section */}
      <div className="header">
        <img src={quizmeLogo} alt="Quiz-Me Logo" />
        <h1>Your guided path to programming enlightenment</h1>
        <button>Begin Journey</button>
      </div>

      {/* Informational Boxes */}
      <div className="informational-boxes">
        <div className="personalized-quizzes-box">
          <img src={lightningBolt} alt="Personalized Quizzes" />
          <h3>Personalized Quizzes</h3>
          <p>
            Our app can create personalized quizzes that align with your skills and interests. 
            Whether you are a novice or a master, our system can generate questions that will 
            test your proficiency in a multitude of topics.
          </p>
        </div>

        <div className="rewarding-box">
          <img src={peopleIcon} alt="Rewarding Experience" />
          <h3>Rewarding</h3>
          <p>
            Our app is designed to be both challenging and rewarding, so you can learn new concepts 
            while enjoying the process. With our personalized quiz app, you can track your progress, 
            compete with your peers, and discover new areas of expertise.
          </p>
        </div>

        <div className="personal-box">
          <img src={gearIcon} alt="Personal SME" />
          <h3>Personal SME</h3>
          <p>
            Welcome to the path of knowledge. Our app is like having a personal subject matter expert 
            at your side, guiding you on your journey towards wisdom.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
