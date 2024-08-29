"use client";
import { MutatingDots } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="#dc2626"
        secondaryColor="#dc2626"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loading;
