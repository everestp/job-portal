import React from "react";
import { IconAnchor, IconAsset, IconBell, IconSettings } from "@tabler/icons-react";
import { Avatar, Indicator } from "@mantine/core";
import NavLinks from "./Navlink";
const Header = () => {
  return (
    <div className="w-full bg-mine-shaft-950 px-6 text-white  h-28 flex justify-between items-center">
      <div className="flex gap-1 items-center text-bright-sun-400">
        <IconAnchor className="h-18 w-8" stroke={2.5} />
        <div className="text-3xl font-semibold">JobDEv</div>
      </div>
      <NavLinks/>
      <div className="flex items-center gap-3">
      <div className="flex items-center gap-2">
            <div>Everest</div>
            <Avatar src={`https://avatar.iran.liara.run/public`} />
        </div>
        <div className="bg-mine-shaft-900 p-1.5 rounded-full">
        <IconSettings stroke={1.5}/>
        </div>
    <div  className="bg-mine-shaft-900 p-1.5 rounded-full">
      <Indicator color="brightSun.4" size={8} processing offset={5}>
      <IconBell  stroke={1.5} /> 
        </Indicator>   
   
    </div>
      

      </div>
    </div>
  );
};

export default Header;
