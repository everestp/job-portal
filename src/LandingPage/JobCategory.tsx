import { Carousel } from "@mantine/carousel";
import { jobCategory } from "../Data/Data";

const JobCategory = () => {
  return (
    <div className="mt-20 pb-5">
      <div className=" text-4xl text-center font-semibold mb-3 text-mine-shaft-100">
        Browse <span className="text-bright-sun-400">Job</span>
        Category
      </div>
      <div className="text-lg mb-10 mx-auto text-mine-shaft-300 text-center w-1/2">
        Explore diverse job opportunities tailored to your skill.Start your
        career journey today
      </div>
<Carousel slideSize="22%" slideGap="md" loop>
{
  jobCategory.map((category,index)=>(
    <Carousel.Slide key={index}>
  <div key={index} className="flex flex-col items-center w-64">
        <div className="p-2 bg-bright-sun-300 rounded-full">
        <img className="h-8 w-8" src={`/Category/${category.name}.png`} alt="" />
        </div>
       
        <div className="text-mine-shaft-100 text-xl font-semibold">{category.name}</div>
        <div className="text-sm text-mine-shaft-300 text-center">{category.desc}</div>
        <div className="text-bright-sun-300 text-lg">{`${category.jobs}+ Job Posted`}</div>
        
     </div>
    </Carousel.Slide>
  
  ))
}
</Carousel>

     
    </div>
  );
};

export default JobCategory;
