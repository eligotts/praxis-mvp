import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faPaperPlane, faEye, faHeart } from '@fortawesome/free-solid-svg-icons';

interface CardProps {
  title: string;
  author: string;
  date: string;
  imageSrc: string;
  stats: {
    likes: number;
    comments: number;
    shares: number;
    views: number;
  };
}

const Header: React.FC = () => (
  <div className="flex justify-between items-center p-4 bg-yellow-50 border-b border-black">
    <div className="flex items-center">
      <div className="w-8 h-8 bg-gray-200 border border-black rounded-full"></div>
    </div>
    <h1 className="text-xl font-bold text-black">Praxis</h1>
    <div className="flex space-x-4">
      <FontAwesomeIcon icon={faBookmark} className="text-gray-600" />
      <div className="w-5 h-4 bg-gray-200 border border-black"></div>
    </div>
  </div>
);

const MainContent: React.FC<Omit<CardProps, 'stats'>> = ({ title, author, date, imageSrc }) => (
  <div className="border border-black bg-yellow-50 rounded-md m-4 p-4">
    <img src={imageSrc} alt="green-economy" className="w-full h-64 object-cover rounded-md border border-gray-200" />
    <h2 className="text-center text-lg font-bold mt-4">{title}</h2>
    <h3 className="text-center text-base mt-2">By {author}</h3>
    <div className="flex justify-center items-center mt-4">
      <span className="text-sm">Swipe to browse</span>
    </div>
    <div className="text-center text-sm mt-4">
      Over the past two decades, climate change has wreaked havoc on Canada’s maple tree population, leading to a sharp decline in the country’s only export...
    </div>
    <div className="text-right text-sm mt-4">{date}</div>
  </div>
);

const Footer: React.FC<Pick<CardProps, 'stats'>> = ({ stats }) => (
  <div className="flex justify-around items-center p-4 bg-yellow-50 border-t border-black">
    <div className="text-xs"><FontAwesomeIcon icon={faHeart} /> {stats.likes}</div>
    <div className="text-xs"><FontAwesomeIcon icon={faPaperPlane} /> {stats.comments}</div>
    <div className="text-xs"><FontAwesomeIcon icon={faPaperPlane} /> {stats.shares}</div>
    <div className="text-xs"><FontAwesomeIcon icon={faEye} /> {stats.views}</div>
  </div>
);

const Card: React.FC<CardProps> = ({ title, author, date, imageSrc, stats }) => (
  <div className="w-full max-w-sm bg-yellow-50 border border-black">
    <Header />
    <MainContent title={title} author={author} date={date} imageSrc={imageSrc} />
    <Footer stats={stats} />
  </div>
);

const HomePage: React.FC = () => {
  const cardData = {
    title: "Why is Canada’s Economy Failing?",
    author: "David Brooks",
    date: "Dec 22 2024",
    imageSrc: "/images/dc2d3a7368da385b4fbf50d727e2cc1a408c4737.png",
    stats: {
      likes: 8710,
      comments: 1125,
      shares: 350,
      views: 51423,
    },
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card {...cardData} />
    </div>
  );
};

export default HomePage;