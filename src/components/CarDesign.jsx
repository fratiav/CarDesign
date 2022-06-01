import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../components/Loading";
import Box from "../three/Box";
import { Canvas } from "@react-three/fiber";

const CarDesign = () => {
    const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

    if (isLoading) {
        return <Loading />;
    }

    return (
        isAuthenticated ? (
            <div style={{height: '100vh', overflow: 'hidden'}}>
                <Canvas>
                    <color attach="background" args={['#165566']}/>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <Box position={[0, 0, 0]} />
                </Canvas>
            </div>
        ) : (
            loginWithRedirect()
        )
    );
};

export default CarDesign;