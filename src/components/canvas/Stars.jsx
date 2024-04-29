import { useState, useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as THREE from 'three';

const generateSphereData = () => {
  const count = 4000;
  const data = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i += 3) {
    const x = (Math.random() - 0.5) * 2.4; // Spread across a sphere of radius 1.2
    const y = (Math.random() - 0.5) * 2.4;
    const z = (Math.random() - 0.5) * 2.4;
    data[i] = x;
    data[i + 1] = y;
    data[i + 2] = z;
  }
  return data;
};

const Stars = (props) => {
  const ref = useRef();
  const [sphere, setSphere] = useState(() => generateSphereData());

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  useEffect(() => {
    const positions = new Float32Array(sphere);
    // console.log("Initial positions:", positions);

    // Check and correct any non-finite values
    for (let i = 0; i < positions.length; i++) {
      if (!isFinite(positions[i])) {
        // console.error(`Correcting non-finite position at index ${i}: ${positions[i]}`);
        positions[i] = 0;
      }
    }

    // console.log("Corrected positions:", positions);
    setSphere(positions);

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.computeBoundingSphere();

    if (geometry.boundingSphere && !isNaN(geometry.boundingSphere.radius)) {
      console.log('Bounding sphere computed successfully:', geometry.boundingSphere.radius);
    } else {
      console.error('Bounding sphere computation failed:', geometry.boundingSphere);
    }
  }, []);

  //Above is the manual input of the stars rather than math.rand function

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;


//Random.math func weird

// import { useState, useRef, Suspense, useEffect } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Points, PointMaterial, Preload } from "@react-three/drei";
// import * as random from "maath/random/dist/maath-random.esm";
// import * as THREE from 'three';

// const Stars = (props) => {
//   const ref = useRef();
//   const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

//   useFrame((state, delta) => {
//     ref.current.rotation.x -= delta / 10;
//     ref.current.rotation.y -= delta / 15;
//   });

//   //check for nan or undefined ORIGINALLLALLLALLALALSKALDFJ:LDKFJ
//   useEffect(() => {
//     const geometry = new THREE.BufferGeometry();
//     const positions = new Float32Array(sphere);
//     geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

//     // Manually check each vertex to ensure they are all finite numbers
//     for (let i = 0; i < positions.length; i += 3) {
//         if (!isFinite(positions[i]) || !isFinite(positions[i+1]) || !isFinite(positions[i+2])) {
//             console.error(`Invalid vertex at index ${i/3}: (${positions[i]}, ${positions[i+1]}, ${positions[i+2]})`);
//         }
//     }

//     geometry.computeBoundingSphere();

//     if (geometry.boundingSphere && !isNaN(geometry.boundingSphere.radius)) {
//         console.log('Bounding sphere computed successfully:', geometry.boundingSphere.radius);
//     } else {
//         console.error('Bounding sphere computation failed:', geometry.boundingSphere);
//     }
//   }, [sphere]);

//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//       <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
//         <PointMaterial
//           transparent
//           color='#f272c8'
//           size={0.002}
//           sizeAttenuation={true}
//           depthWrite={false}
//         />
//       </Points>
//     </group>
//   );
// };

// const StarsCanvas = () => {
//   return (
//     <div className='w-full h-auto absolute inset-0 z-[-1]'>
//       <Canvas camera={{ position: [0, 0, 1] }}>
//         <Suspense fallback={null}>
//           <Stars />
//         </Suspense>

//         <Preload all />
//       </Canvas>
//     </div>
//   );
// };

// export default StarsCanvas;
