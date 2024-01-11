import React from 'react'
import { Plane, useTexture } from '@react-three/drei'
import { NearestFilter } from "three"

export default function DecorationSprite({textureRoute, size, position, rotation, name}) {
    
    const planeTexture = useTexture(`./dist/${textureRoute}`)

    //this keeps the pixelart crispiness:
    planeTexture.minFilter = NearestFilter
    planeTexture.magFilter = NearestFilter

    return (
        <Plane rotation={rotation} position={position} args={size} >
            <meshStandardMaterial map={planeTexture}  transparent/>
        </Plane>
    )
}