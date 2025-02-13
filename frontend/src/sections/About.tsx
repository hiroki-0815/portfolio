import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import React from "react";
import Image from "next/image";
import AtomixHabitImage from "@/assets/images/book-cover.png";
import { toolboxItems } from "@/components/ToolboxItemsList";
import { hobbies } from "@/components/Hobbies";
import CardHeader from "@/components/CardHeader";
import ToolBoxItems from "@/components/ToolboxItems";

const About = () => {
  return (
    <section id="about">
      <div className="py-10">
        <div className="container">
          <SectionHeader
            eyebrow="about me"
            title="a glimpse into my world"
            description="Learn more about who I am. what I do, and what inspires me"
          />
          <div className="md:flex md:grid-rows-2 md:gap-5">
            <Card className="">
              <CardHeader
                title={"My Reads"}
                description={"Explore the books shaping my perspectives"}
              />
              <div className="w-40 mx-auto">
                <Image src={AtomixHabitImage} alt="atomic habit cover pic" />
              </div>
            </Card>
            <Card className="">
              <CardHeader
                title={"My Toolbox"}
                description={
                  "Explore the technologies and tools I use to craft digital experiences"
                }
              />
              <ToolBoxItems
                className="text-sm md:text-lg"
                toolboxItems={toolboxItems}
              />
            </Card>
          </div>
          <Card>
            <CardHeader
              title={"Beyond the code"}
              description={
                "Explore my interests and hobbies beyond the digital realm"
              }
            />
            <div className="">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="flex justify-around gap-2 px-2 md:px-6 rounded-full 
                    text-black font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 py-1.5 max-w-[180px] items-center"
                  >
                    <span className="text-[12px] md:text-lg">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
