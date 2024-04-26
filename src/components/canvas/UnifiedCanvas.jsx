// import React, { Suspense, useRef, useState } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, Preload, Points, PointMaterial, useGLTF } from "@react-three/drei";
// import CanvasLoader from "../Loader";
// import * as random from "maath/random/dist/maath-random.esm";

// const Earth = () => {
//   const earth = useGLTF("./planet/scene.gltf");
//   return <primitive object={earth.scene} scale={2.5} />;
// };

// const Stars = () => {
//   const ref = useRef();
//   const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 50 }));  // Significantly increased radius to ensure stars are in the background

//   useFrame((state, delta) => {
//     ref.current.rotation.x -= delta * 0.01; // Slowed rotation for a more subtle effect
//     ref.current.rotation.y -= delta * 0.01;
//   });

//   return (
//     <Points ref={ref} positions={sphere} stride={3}>
//       <PointMaterial
//         color="white"  // Changed to a neutral color for better visibility and blending
//         size={0.01}  // Adjusted size for visibility at increased radius
//         sizeAttenuation
//         depthWrite={false}
//         transparent
//       />
//     </Points>
//   );
// };

// const UnifiedCanvas = () => {
//   return (
//     <div className='w-full h-auto absolute inset-0 z-[-1]'>
//       <Canvas
//         shadows
//         frameloop='demand'
//         dpr={[1, 2]}
//         gl={{ preserveDrawingBuffer: true }}
//         camera={{
//           fov: 75,  // Adjusted for a wider field of view
//           near: 0.1,
//           far: 1000,
//           position: [0, 0, 20],  // Adjusted to a more frontal view
//         }}
//       >
//         <Suspense fallback={<CanvasLoader />}>
//           <ambientLight intensity={0.3} />
//           <pointLight position={[10, 10, 10]} intensity={0.5} />
//           <OrbitControls
//             autoRotate
//             enableZoom={false}
//             maxPolarAngle={Math.PI / 2}
//             minPolarAngle={Math.PI / 2}
//           />
//           <Earth />
//           <Stars />
//           <Preload all />
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// };

// export default UnifiedCanvas;


// THIS IS ABOVE A GOOD CENTER EXAMPLE


import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, Points, PointMaterial, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import * as random from "maath/random/dist/maath-random.esm";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  return <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />;
};

const Stars = () => {
  const ref = useRef();
  // Adjust the radius to ensure the stars are in the background and do not visually interfere with the Earth
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 50 })); 

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta * 0.005; // Slow rotation for a subtle background effect
    ref.current.rotation.y -= delta * 0.005;
  });

  return (
    <Points ref={ref} positions={sphere} stride={3}>
      <PointMaterial
        color="#ffffff" // Changed color to white for a classic starry appearance
        size={0.01} // Adjusted size for better visibility at a distance
        sizeAttenuation
        depthWrite={false}
        transparent
      />
    </Points>
  );
};

const UnifiedCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas
        shadows
        frameloop='demand'
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6], // Camera settings as per the original Earth setup
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <Earth />
          <Stars />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default UnifiedCanvas;
