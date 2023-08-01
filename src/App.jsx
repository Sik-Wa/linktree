
import sikwa from "../src/sikwa.jpg";
import '../src/App.css';
import {
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaDiscord,
  FaTelegram,
  FaGithub,
} from "react-icons/fa";


function App() {
  const links = [
    {
      url: "https://www.youtube.com/",
      title: "YouTube",
      icon: <FaYoutube />,
    },
    {
      url: "https://twitter.com/",
      title: "Twitter",
      icon: <FaTwitter />,
    },
    {
      url: "https//www.instagram.com/",
      title: "Instagram ",
      icon: <FaInstagram />,
    },
    {
      url: "https//www.discord.com/",
      title: "Discord ",
      icon: <FaDiscord />,
    },
    {
      url: "https//telegram.com/",
      title: "Telegram",
      icon: <FaTelegram />,
    },
    {
      url: "https://github.com/",
      title: "Github",
      icon: <FaGithub />,
    },
  ];

  return (
    <>
      <div className="  w-full h-full flex items-center justify-center flex-col 
      container mx-auto">
        <a>
          <img
            src={sikwa}
            className=" w-20 h-20 mb-4 rounded-full "
            alt="Vite logo"
          />
        </a>
        <ul className=" flex flex-col w-full   " >
          { links.map((link,index) => (
            <li key={index} className=" text-center cursor-pointer  
             m-2 py-3 px-5 border-black border-2 text-sm md:text-md  ">
              <a href={link.url} className=" flex items-center " title={link.title} target="blank" rel="noreferrer">
              {link.icon} <p className=" ml-3  " >{link.title}</p>
              </a>
             

            </li>
          ))
}
        </ul>
      </div>
    </>
  );
} 

export default App;
