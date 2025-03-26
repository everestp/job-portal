import { Avatar, AvatarGroup, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import React from "react";

const DreamJob = () => {
  return (
    <div className="flex items-center px-16">
      <div className="flex flex-col w-[45%] gap-3">
        <div className="text-6xl font-bold text-mine-shaft-100 [&>span]:text-bright-sun-400">
          Find your <span> Dream</span> <span> job</span> with us
        </div>
        <div className="text-lg text-mine-shaft-200">
          Good life begin with a good company .Start explore thousand of job in
          one place
        </div>
        <div className="flex gap-3 mt-10">
          <TextInput
            className="bg-mine-shaft-900 rounded-lg gap-3 py-1 px-2 text-mine-shaft-100 [&_input]:text-mine-shaft-100"
            label="Job title"
            //   description="Input description"
            variant="unstyled"
            placeholder="Software Engineer"
          />
          <TextInput
            className="bg-mine-shaft-900 rounded-lg gap-3 py-1 px-2 text-mine-shaft-100 [&_input]:text-mine-shaft-100"
            label="Job Type"
            variant="unstyled"
            //   description="Input description"
            placeholder="Full-time"
          />
          <div className="flex items-center justify-center w-20 h-full bg-bright-sun-400 rounded-lg hover:bg-bright-sun-500 hover:cursor-pointer">
            <IconSearch className="h-[85%] w-[85%] text-mine-shaft-100 " />
          </div>
        </div>
      </div>
      <div className="w-[55%] flex items-center justify-center">
        <div className="w-[30rem] relative">
          <img src="/job.png" alt="" />
          <div className=" absolute -right-10 w-fit top-[50%] border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md">
            <div className="text-center mb-1 text-sm text-mine-shaft-100">
              10k+ got Job
            </div>
            <Avatar.Group>
              <Avatar src={`https://avatar.iran.liara.run/public`} />
              <Avatar src={`https://avatar.iran.liara.run/public/boy`} />
              <Avatar src={`https://avatar.iran.liara.run/public/girl`} />
              <Avatar>+9k</Avatar>
            </Avatar.Group>
          </div>
          <div className=" absolute -left-10 w-fit top-[35%] border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md flex flex-col gap-3">
            <div className="flex gap-2 items-center">
              <div className="w-10 h-12 p-1 bg-mine-shaft-900">
                <img src="/google.png" alt="" />
              </div>
              <div>
                <div className="text-mine-shaft-100">Software Engineer</div>
                <div className="text-mine-shaft-100">New York</div>
              </div>
            </div>

            <div className="flex justify-around gap-3 text-mine-shaft-100">
              <span>1 day ago</span>
              <span>120 Applicants</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamJob;
