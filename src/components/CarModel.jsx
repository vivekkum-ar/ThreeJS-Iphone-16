import { useGLTF } from '@react-three/drei'
import React from 'react'

const CarModel = () => {
    const scene = useGLTF("batmobil_car.glb");
  return (
    <mesh>
        <primitive object={scene}/>
    </mesh>
  )
}

export default CarModel