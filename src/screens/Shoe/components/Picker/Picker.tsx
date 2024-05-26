import { HexColorPicker } from 'react-colorful';
import { useSnapshot } from 'valtio';

import state from 'screens/Shoe/state';

import { Wrap } from './styled';

export const Picker = () => {
  const snap = useSnapshot(state);

  return (
    <Wrap data-snap={snap.current || undefined}>
      <HexColorPicker
        className='picker'
        color={snap.items[snap.current as unknown as keyof typeof snap.items]}
        onChange={color => {
          state.items[snap.current as unknown as keyof typeof snap.items] =
            color;
        }}
      />
      <h1>{snap.current}</h1>
    </Wrap>
  );
};
