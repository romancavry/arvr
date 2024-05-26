import * as React from 'react';
import { Link } from 'react-router-dom';

import routes from 'core/routes/routes';

import { Button } from 'uikit/atoms';

import {
  Annot as AnnotType,
  getDataNormal,
  getDataPosition,
} from 'modules/viewer';

import { Annot, Title, Wrap } from './styled';
import model from './model.glb';

const Home = () => {
  const modelRef = React.useRef();
  const [annots, setAnnots] = React.useState<AnnotType[]>([]);

  const handleClick = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;

    if (modelRef.current) {
      // @ts-ignore
      const hit = modelRef.current.positionAndNormalFromPoint(clientX, clientY);

      if (hit) {
        setAnnots(annots => [...annots, hit]);
      }
    }
  };

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
        style={{
          width: '500px',
          height: '500px',
        }}
        ref={modelRef}
      >
        {annots.map((annot, idx) => (
          <Annot
            key={idx}
            slot={`hotspot-${idx}`}
            data-position={getDataPosition(annot)}
            data-normal={getDataNormal(annot)}
          />
        ))}
        {/* @ts-ignore */}
      </model-viewer>

      <Link to={routes.shoe}>
        <Button>Shoe</Button>
      </Link>
    </Wrap>
  );
};

export default Home;
