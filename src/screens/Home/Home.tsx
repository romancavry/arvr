import * as React from 'react';

import { Title, Wrap } from './styled';
import model from './model.glb';

const Home = () => {
  const modelRef = React.useRef();
  const [annots, setAnnots] = React.useState([]);

  const handleClick = event => {
    const { clientX, clientY } = event;

    if (modelRef.current) {
      const hit = modelRef.current.positionAndNormalFromPoint(clientX, clientY);
      if (hit) {
        setAnnots(annots => [...annots, hit]);
      }
    }
  };

  const getDataPosition = annot =>
    `${annot.position.x} ${annot.position.y} ${annot.position.z}`;

  const getDataNormal = annot =>
    `${annot.normal.x} ${annot.normal.y} ${annot.normal.z}`;

  return (
    <Wrap>
      <Title>AR / VR</Title>

      {/* @ts-ignore */}
      <model-viewer
        data-name='coke'
        src={model}
        ar
        ar-modes='webxr scene-viewer quick-look'
        ar-scale='auto'
        camera-controls
        onClick={handleClick}
        ref={modelRef}
      >
        {annots.map((annot, idx) => (
          <button
            key={idx}
            className='view-button'
            slot={`hotspot-${idx}`}
            type='button'
            data-position={getDataPosition(annot)}
            data-normal={getDataNormal(annot)}
          >
            {idx}
          </button>
        ))}
        {/* @ts-ignore */}
      </model-viewer>
    </Wrap>
  );
};

export default Home;
