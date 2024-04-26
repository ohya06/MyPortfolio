import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { listCodeLanguages } from "../constants";

const CodeLanguages = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {listCodeLanguages.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(CodeLanguages, "");
