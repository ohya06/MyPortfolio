import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations, useFBX } from "@react-three/drei";
import CanvasLoader from "../Loader";
import * as THREE from 'three';

const Avatar = ({ isMobile }) => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF('/models/6619ba1b194107bec29d3727.glb');
    const { animations: sittingAnimations } = useFBX("/animations/SittingIdle.fbx");
    sittingAnimations[0].name = "Sitting";
    const { actions } = useAnimations(sittingAnimations, group);

    useEffect(() => {
        const action = actions["Sitting"];
        if (action) {
            action.reset()
                  .setLoop(THREE.LoopRepeat, Infinity)  // Set to repeat indefinitely
                  .play();
        }
    }, [actions]);

    // useEffect(() => {
    //     Object.keys(nodes).forEach(key => {
    //         const node = nodes[key];
    //         if (node.geometry && node.geometry.attributes.position) {
    //             const positions = node.geometry.attributes.position.array;
    //             let hasNaN = false;
    //             for (let i = 0; i < positions.length; i++) {
    //                 if (isNaN(positions[i])) {
    //                     console.error(`NaN found at index ${i} in positions of ${key}`);
    //                     hasNaN = true;
    //                     break;
    //                 }
    //             }
    //             if (!hasNaN) {
    //                 console.log(`No NaN values found in positions of ${key}`);
    //             }
    //         } else {
    //             console.log(`${key} has no geometry or position attribute`);
    //         }
    //     });
    // }, [nodes]);


    // Adjust the initial rotation and position here
    // const initialRotation = [-Math.PI / 2, 0, 0]; // Adjust as necessary to align the model
    // const initialPosition = isMobile ? [0, -1.5, 0] : [0, -2, 0]; // Lift the model up a bit
    const scale = isMobile ? [1, 1, 1] : [2, 2, 2];
    const position = isMobile ? [0, -1.50, 0] : [0, -2, 0];

    return (
        <group ref={group} scale={scale} position={position} rotation={[-Math.PI / 2, 0, 0]}>
            <hemisphereLight intensity={0.5} skyColor={"white"} groundColor={"gray"} position={[0, 50, 0]} />
            <spotLight position={[-30, 30, 30]} angle={0.3} penumbra={0.5} intensity={2} castShadow />
            <directionalLight position={[0, 20, 0]} intensity={0.5} />
            <ambientLight intensity={0.4}/>
            <primitive object={nodes.Hips} />
            <skinnedMesh
                name="EyeLeft"
                geometry={nodes.EyeLeft.geometry}
                material={materials.Wolf3D_Eye}
                skeleton={nodes.EyeLeft.skeleton}
                morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
            />
            <skinnedMesh
                name="EyeRight"
                geometry={nodes.EyeRight.geometry}
                material={materials.Wolf3D_Eye}
                skeleton={nodes.EyeRight.skeleton}
                morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
            />
            <skinnedMesh
                name="Wolf3D_Head"
                geometry={nodes.Wolf3D_Head.geometry}
                material={materials.Wolf3D_Skin}
                skeleton={nodes.Wolf3D_Head.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
            />
            <skinnedMesh
                name="Wolf3D_Teeth"
                geometry={nodes.Wolf3D_Teeth.geometry}
                material={materials.Wolf3D_Teeth}
                skeleton={nodes.Wolf3D_Teeth.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Hair.geometry}
                material={materials.Wolf3D_Hair}
                skeleton={nodes.Wolf3D_Hair.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Body.geometry}
                material={materials.Wolf3D_Body}
                skeleton={nodes.Wolf3D_Body.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
                material={materials.Wolf3D_Outfit_Bottom}
                skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
                material={materials.Wolf3D_Outfit_Footwear}
                skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Top.geometry}
                material={materials.Wolf3D_Outfit_Top}
                skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
            />
        </group>
    );
};

const AvatarCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");
        setIsMobile(mediaQuery.matches);
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);
        return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
    }, []);

    return (
        <Canvas
            frameloop="demand"
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 0, 0], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Avatar isMobile={isMobile} />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default AvatarCanvas;


// /*
// Auto-generated by: https://github.com/pmndrs/gltfjsx
// */

// import React, { useEffect, useRef } from 'react'
// import { useAnimations, useFBX, useGLTF } from '@react-three/drei'

// export function Avatar(props) {
  
//     const group = useRef();

//   const { nodes, materials } = useGLTF('models/6619ba1b194107bec29d3727.glb');

//   const { animations: sittingAnimations } = useFBX("animations/SittingIdle.fbx");

//   sittingAnimations[0].name = "Sitting";

//   const { actions } = useAnimations(sittingAnimations, group)

//   useEffect(() => {
//     actions["Sitting"].reset().play();
//   }, []);
  
//   return (
//     <group {...props} ref={group} dispose={null}>
//         <group rotation-x={-Math.PI / 2}>
//             <primitive object={nodes.Hips} />
//             <skinnedMesh
//                 name="EyeLeft"
//                 geometry={nodes.EyeLeft.geometry}
//                 material={materials.Wolf3D_Eye}
//                 skeleton={nodes.EyeLeft.skeleton}
//                 morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
//                 morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
//             />
//             <skinnedMesh
//                 name="EyeRight"
//                 geometry={nodes.EyeRight.geometry}
//                 material={materials.Wolf3D_Eye}
//                 skeleton={nodes.EyeRight.skeleton}
//                 morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
//                 morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
//             />
//             <skinnedMesh
//                 name="Wolf3D_Head"
//                 geometry={nodes.Wolf3D_Head.geometry}
//                 material={materials.Wolf3D_Skin}
//                 skeleton={nodes.Wolf3D_Head.skeleton}
//                 morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
//                 morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
//             />
//             <skinnedMesh
//                 name="Wolf3D_Teeth"
//                 geometry={nodes.Wolf3D_Teeth.geometry}
//                 material={materials.Wolf3D_Teeth}
//                 skeleton={nodes.Wolf3D_Teeth.skeleton}
//                 morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
//                 morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
//             />
//             <skinnedMesh
//                 geometry={nodes.Wolf3D_Hair.geometry}
//                 material={materials.Wolf3D_Hair}
//                 skeleton={nodes.Wolf3D_Hair.skeleton}
//             />
//             <skinnedMesh
//                 geometry={nodes.Wolf3D_Body.geometry}
//                 material={materials.Wolf3D_Body}
//                 skeleton={nodes.Wolf3D_Body.skeleton}
//             />
//             <skinnedMesh
//                 geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
//                 material={materials.Wolf3D_Outfit_Bottom}
//                 skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
//             />
//             <skinnedMesh
//                 geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
//                 material={materials.Wolf3D_Outfit_Footwear}
//                 skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
//             />
//             <skinnedMesh
//                 geometry={nodes.Wolf3D_Outfit_Top.geometry}
//                 material={materials.Wolf3D_Outfit_Top}
//                 skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
//             />
//             </group>
//     </group>
//   )
// }

// useGLTF.preload('models/6619ba1b194107bec29d3727.glb')
