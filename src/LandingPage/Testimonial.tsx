import { Avatar, Rating } from "@mantine/core";
import React from "react";
import { testimonials } from "../Data/Data";

const Testimonial = () => {
  return (
    <div>
      <div className=" text-4xl text-center font-semibold mb-3 text-mine-shaft-100">
        What <span className="text-bright-sun-400">{` User `}</span>
        Say About us
      </div>
      <div className="flex justify-evenly">

    
{testimonials.map((item,index)=>(
    <div key={index} className="flex flex-col gap-3 w-[23%] border rounded-xl border-bright-sun-400 ">
<div className="flex gap-2 items-center">
{/* avatar */}

<Avatar className="!h-14 !w-14" src={`https://avatar.iran.liara.run/public`} />

<div className="flex  flex-col items-center ">
<div className="text-mine-shaft-200 font-semibold text-lg">{item.name}</div>
<Rating value={item.rating} />;
</div>
</div>
<div className="text-xs text-mine-shaft-200">{item.testimonial}</div>
</div>
))}
  
  </div>
    </div>
  );
};

export default Testimonial;
