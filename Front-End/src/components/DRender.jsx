import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from "three"

const DRender = () => {
    let texture = useTexture("./Images/c.png");
    useFrame((state, delta) => {
        cylinderRef.current.rotation.y += delta
    })
    let cylinderRef = useRef()
    return (
        <group rotation={[0, 1.4, 0.5]}>
            <mesh ref={cylinderRef}>
                <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
                <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
            </mesh>
        </group>
    )
}

export default DRender