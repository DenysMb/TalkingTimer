import React from 'react';
import {Button, Overlay} from 'react-native-elements';
import {ButtonStyle} from './OptionOverlay.style';

interface IOptionOverlay {
  openOverlay: boolean;
  halfStep: boolean;
  toggleOverlay: () => void;
  toggleHalfStep: () => void;
  toggleMode: () => void;
}

const OptionOverlay = ({
  openOverlay,
  halfStep,
  toggleOverlay,
  toggleHalfStep,
  toggleMode,
}: IOptionOverlay) => {
  return (
    <Overlay isVisible={openOverlay} onBackdropPress={toggleOverlay}>
      <Button
        title={'Iniciar no modo tempo atual'}
        onPress={toggleMode}
        containerStyle={ButtonStyle.container}
        buttonStyle={ButtonStyle.button}
      />
      <Button
        title={`${
          halfStep ? 'Desabilitar' : 'Habilitar'
        } aviso a cada meio minuto`}
        buttonStyle={ButtonStyle.button}
        onPress={toggleHalfStep}
      />
    </Overlay>
  );
};

export default OptionOverlay;
