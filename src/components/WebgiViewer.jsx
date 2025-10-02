import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { useScroll, useTransform } from "motion/react";

// -------------------------------------------------------------------
// 1. New component to handle R3F hooks and rendering
// -------------------------------------------------------------------
const IphoneScene = () => {
    // These R3F hooks are now safely inside the Canvas context
    const { size } = useThree(); 
    const { scene } = useGLTF("/iphone_16_black.glb"); 
    const { scrollYProgress } = useScroll();
    const targetRef = useRef(null);
    const targetRef2 = useRef(null);
    const targetRef3 = useRef(null);
    const targetRef4 = useRef(null);
    const targetRef5 = useRef(null);
    const targetRef6 = useRef(null);
    const targetRef7 = useRef(null);
    // Calculate rotation in radians (2.04 * PI radians)
    const screen = 5;

    /* ---------------------------------------------------------------------------------------------- */
    /*                                            Rotation                                            */
    /* ---------------------------------------------------------------------------------------------- */
    const rotationX = useTransform(
      scrollYProgress,
      [0, 1 / screen, 2 / screen,3.5 / screen, 4.5 / screen,],
      [0, 0,0,0,Math.PI/4]
    );
    const rotationY = useTransform(
      scrollYProgress,
      [0, 1 / screen, 2 / screen,3.5 / screen, 4.5 / screen,],
      [0, 0,Math.PI/2,Math.PI,Math.PI/4]
    );
    const rotationZ = useTransform(
      scrollYProgress,
      [0, 1 / screen, 2 / screen,3.5 / screen, 4.5 / screen,],
      [0, 0, 0,0,0]
    );

    /* ---------------------------------------------------------------------------------------------- */
    /*                                              Scale                                             */
    /* ---------------------------------------------------------------------------------------------- */
    const scale = useTransform(
      scrollYProgress,
      [0, 1 / screen, 2 / screen,3.5 / screen, 4.5 / screen,],
      [1, 1.2, 1.5,1.5,0.9]
    );

    /* ---------------------------------------------------------------------------------------------- */
    /*                                            Position                                            */
    /* ---------------------------------------------------------------------------------------------- */
    const posX = useTransform(
      scrollYProgress,
      [0, 1 / screen, 2 / screen,3.5 / screen, 4.5 / screen,],
      [0, 0, 3,4,-9]
    );
    const posY = useTransform(
      scrollYProgress,
      [0, 1 / screen, 2 / screen,3.5 / screen, 4.5 / screen,],
      [0, 10, 14,11,6]
    );
    const posZ = useTransform(
      scrollYProgress,
      [0, 1 / screen, 2 / screen,3.5 / screen, 4.5 / screen,],
      [0, -7, -7,0,0]
    );


        const posY2 = useTransform(
      scrollYProgress,
      [4.5 / screen,5 / screen],
      [-15,0]
    );

    const cameraZ = useTransform(scrollYProgress, [0, 1 / screen], [15, 19]);
useFrame(({camera}) => {
  if(!targetRef.current) return;
  targetRef.current.rotation.x = rotationX.get();
  targetRef.current.rotation.y = rotationY.get();
  targetRef.current.rotation.x = rotationZ.get();
  targetRef.current.scale.set(scale.get(), scale.get(), scale.get());
  targetRef.current.position.x = posX.get();
  targetRef.current.position.y = posY.get();
  targetRef.current.position.z = posZ.get();
  camera.position.z= cameraZ.get();


  targetRef2.current.position.y = posY2.get();
  targetRef3.current.position.y = posY2.get();
  targetRef4.current.position.y = posY2.get();
  targetRef5.current.position.y = posY2.get();
  targetRef6.current.position.y = posY2.get();
  targetRef7.current.position.y = posY2.get();
})

    return (
      <>
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          {/* The primitive mesh, now with all logic in the same scope */}
          <mesh ref={targetRef}>
            <primitive
              object={scene}
              rotation={[0, 2 * Math.PI, 0]}
              position={[-6, -4.5, 0]}
              // Use a ternary condition to adjust scale based on screen size
              scale={size.width >= 1024 ? 0.75 : 0.5}
            />
          </mesh>
          <mesh ref={targetRef2} visible={true}>
            <primitive
              object={scene.clone()}
              rotation={[0, 2 * Math.PI/5, 0]}
              position={[-9, 2, 0]}
              // Use a ternary condition to adjust scale based on screen size
              scale={size.width >= 1024 ? 0.9 : 0.5}
            />
          </mesh>
          <mesh ref={targetRef3} visible={true}>
            <primitive
              object={scene.clone()}
             rotation={[0, 2 * Math.PI/4, 0]}
              position={[-4, 2, 0]}
              // Use a ternary condition to adjust scale based on screen size
              scale={size.width >= 1024 ? 0.9 : 0.5}
            />
          </mesh>
          <mesh ref={targetRef4} visible={true}>
            <primitive
              object={scene.clone()}
              rotation={[0, 1.95 * Math.PI/3.5, 0]}
              position={[-1.5, 2, 0]}
              // Use a ternary condition to adjust scale based on screen size
              scale={size.width >= 1024 ? 0.9 : 0.5}
            />
          </mesh>
          <mesh ref={targetRef5} visible={true}>
            <primitive
              object={scene.clone()}
              rotation={[0, 2.48 * Math.PI/4, 0]}
              position={[1, 2, 0]}
              // Use a ternary condition to adjust scale based on screen size
              scale={size.width >= 1024 ? 0.88 : 0.5}
            />
          </mesh>
          <mesh ref={targetRef6} visible={true}>
            <primitive
              object={scene.clone()}
              rotation={[0, 3 * Math.PI/4, 0]}
              position={[5.8, 2, 0]}
              // Use a ternary condition to adjust scale based on screen size
              scale={size.width >= 1024 ? 0.85 : 0.5}
            />
          </mesh>
          <mesh ref={targetRef7} visible={true}>
            <primitive
              object={scene.clone()}
              rotation={[0, 3 * Math.PI/4, 0]}
              position={[11.3, 2, 0]}
              // Use a ternary condition to adjust scale based on screen size
              scale={size.width >= 1024 ? 0.73 : 0.5}
            />
          </mesh>
        </Suspense>
        <Environment preset="dawn" />
        <OrbitControls enabled={false} />
      </>
    );
};

// -------------------------------------------------------------------
// 2. The main component just sets up the Canvas container
// -------------------------------------------------------------------
const WebgiViewer = () => {
    return (
        <div id="webgi-canvas-container" className=" pointer-events-none fixed top-0 ">
            <Canvas camera={{ position: [2, 0, 15] }} id="webgi-canvas">
                {/* Render the new component inside Canvas */}
                <IphoneScene />
            </Canvas>
        </div>
    );
};

export default WebgiViewer;