import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
    const links = [
      { name: "Find Jobs", url: "find-jobs" },
      { name: "Find Talent", url: "find-talent" },
      { name: "Upload Job", url: "upload-job" },
      { name: "About us", url: "about" }
    ];
  const location = useLocation()
    return (
      <div className="flex gap-5 text-mine-shaft-300 h-full items-center">
       {
        
        links.map((link,index)=>(
            <div key={link.url} className={`border-t-[3px] h-full flex items-center ${location.pathname==="/"+link.url? "border-bright-sun-400 text-bright-sun-400 ":"border-transparent"} `}>

                <Link to={links[index].url}>{link.name}</Link>
            </div>
        ))
       }
      </div>
    );
  };
  
  export default NavLinks;
  