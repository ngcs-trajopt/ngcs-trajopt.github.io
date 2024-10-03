import { Button } from "./3dButton";
import { Gltf } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export function Links() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <Button position-x={-6} name="Paper" link="/wrangel24IROS.pdf">
        <Suspense fallback={null}>
          <Gltf scale={2} position-y={1} src="/models/Parchment.glb" />
        </Suspense>
      </Button>

      <Button position-x={0} name="Thesis" link="#Thesis">
        <Suspense fallback={null}>
          <Gltf
            scale={2.5}
            rotation-y={2}
            position-y={1}
            src="/models/Book.glb"
          />
        </Suspense>
      </Button>

      <Button position-x={6} name="Code">
        <Suspense fallback={null}>
          <Gltf
            scale={10}
            position-x={-0.5}
            rotation-y={Math.PI}
            rotation-x={Math.PI / 4}
            src="/models/Laptop.glb"
          />
        </Suspense>
      </Button>
      {/* Ambient Light for general illumination */}
      <ambientLight intensity={1.5} />

      {/* Directional Light to simulate sunlight */}
      <directionalLight
        position={[10, 10, 5]}
        intensity={2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
    </Canvas>
  );
}
