import { Canvas } from "@react-three/fiber";
import React from "react";
import "./style.css";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";

const App = () => {
  return (
    <div
      className="w-full h-screen -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    background-size: cover;
    filter: blur(40px);
    opacity: 0.8; "
    >
      <div className="navbar line flex gap-10 pt-10 pb-3 absolute top-0 left-1/2 -translate-x-1/2">
        {[
          "iphone",
          "iPad",
          "services",
          "ios",
          "mac",
          "products",
          "iphone",
          "iPad",
          "services",
          "ios",
          "mac",
          "products",
        ].map((e) => (
          <a href="" className="text-white font-[500] text-sm capitalize">{e}</a>
        ))}
      </div>
      <div className="absolute flex flex-col items-center  text-white top-40 left-1/2 -translate-x-1/2 ">
        <h3 className="masked text-7xl tracking-tighter font-[700]">
          macbook pro.
        </h3>
        <h5>oh so pro !</h5>
      </div>
      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
        <OrbitControls />
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_08_4k.exr",
          ]}
        />
        <ScrollControls>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
