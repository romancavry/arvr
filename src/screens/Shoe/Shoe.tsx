/* eslint-disable react/no-unknown-property */
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei';

import routes from 'core/routes/routes';

import { Button } from 'uikit/atoms';

import { Boot, Picker } from './components';
import { Footer, Wrap } from './styled';

const Shoe = () => (
  <Wrap>
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
      <ambientLight intensity={0.7} />

      <spotLight
        intensity={0.5}
        angle={0.1}
        penumbra={1}
        position={[10, 15, 10]}
        castShadow
      />

      <React.Suspense fallback={null}>
        <Boot />
        <Environment preset='city' />

        {/* @ts-ignore */}
        <ContactShadows
          rotation-x={Math.PI / 2}
          position={[0, -0.8, 0]}
          opacity={0.25}
          width={10}
          height={10}
          blur={1.5}
          far={0.8}
        />
      </React.Suspense>

      {/* @ts-ignore */}
      <OrbitControls
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        enableZoom={false}
        enablePan={false}
      />
    </Canvas>

    <Picker />

    <Footer>
      <Link to={routes.home}>
        <Button>Home</Button>
      </Link>
    </Footer>
  </Wrap>
);

export default Shoe;
