import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';

function Diamond(props) {
    return (
      <Canvas>
        <Suspense fallback={null}></Suspense>
      </Canvas>
    );
}

export default Diamond
