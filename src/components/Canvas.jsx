import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei"
import { Button } from "@mui/material";

function Box(){
    return(
        <mesh>
            <boxBufferGeometry attach={"geometry"} />
            <meshLambertMaterial attach={"material"} color="hotpink" />
        </mesh>
    )
}

function Saturn() {
    return(
        <>
            <mesh rotateX={Math.PI/2}>
                <sphereBufferGeometry args={[1, 16, 16]} />
                <meshLambertMaterial 
                    attach={"material"} 
                    color="yellow" 
                    wireframe ={true}/>
            </mesh>
            <mesh>
                <ringBufferGeometry args={[1.2, 2, 200]} />
                <meshLambertMaterial color="grey" wireframe={true} />
            </mesh>
        </>
        
    )
}
export default function ThreeCanvas() {
    return(
        <>
            <Canvas
                style={{ 
                    width: window.innerWidth, 
                    height: window.innerHeight,
                    backgroundColor: '#000',
                    }}>
                <Stars />
                <OrbitControls />
                <ambientLight intensity={0.5} />
                <spotLight
                    position={[10, 15, 10]} angle={0.3}
                />
                {/* <Box /> */}
                <Saturn />
            </Canvas>
        </>
    )
}