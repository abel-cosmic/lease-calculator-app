import { LeapFrog } from "@uiball/loaders";

const LoadingElement = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <LeapFrog size={100} speed={2} color="#1941f8" />
    </div>
  );
};

export default LoadingElement;
