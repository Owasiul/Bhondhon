import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
const Loading = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center ">
      <DotLottieReact src="path/to/animation.lottie" loop autoplay />
    </div>
  );
};

export default Loading;
