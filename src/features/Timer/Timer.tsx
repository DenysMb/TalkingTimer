/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Button, Text} from 'react-native-elements';
import CircleTimer from '../../components/CircleTimer';
import OptionOverlay from '../../components/OptionOverlay';
import {checkTts, speakWord} from '../../shared/utils';
import {
  ButtonsContainer,
  Container,
  MoreOptionButtonStyle,
  StartButtonStyle,
} from './Timer.style';

let timeout: NodeJS.Timeout;

const Timer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState(false);
  const [openOverlay, setOpenOverlay] = useState(false);
  const [mode, setMode] = useState<'timer' | 'hour'>('timer');
  const [halfStep, setHalfStep] = useState(false);

  useEffect(() => {
    checkTts();
  }, []);

  useEffect(() => {
    if (mode === 'hour') {
      const now = new Date();
      setSeconds(now.getSeconds());
      setMinutes(now.getMinutes());
      setStart(true);
    }
  }, [mode]);

  useEffect(() => {
    if (start) {
      if (halfStep && seconds === 30) {
        const message =
          minutes > 0 ? `${minutes} minutos e meio` : 'meio minuto';
        speakWord(message);
      }

      timeout = setTimeout(() => {
        if (seconds < 59) {
          setSeconds(seconds + 1);
        } else {
          setSeconds(0);
          setMinutes(minutes + 1);
        }
      }, 1000);
    } else {
      clearTimeout(timeout);
      setMinutes(0);
      setSeconds(0);
      setMode('timer');
    }
  }, [start, seconds, minutes]);

  useEffect(() => {
    if (start) {
      speakWord(`${minutes} minutos`);
    }
  }, [minutes]);

  const toggleOverlay = () => {
    setOpenOverlay(!openOverlay);
  };

  const toggleHalfStep = () => {
    setHalfStep(!halfStep);
  };

  const toggleMode = () => {
    setMode(mode === 'timer' ? 'hour' : 'timer');
    toggleOverlay();
  };

  return (
    <Container>
      <Text h1>TalkingTimer</Text>

      <CircleTimer minutes={minutes} seconds={seconds} />

      <ButtonsContainer>
        <Button
          title={start ? 'Parar' : seconds || minutes ? 'Recomeçar' : 'Começar'}
          onPress={() => {
            if (!start) {
              speakWord('Começando');
              setMinutes(0);
              setSeconds(0);
            }
            setStart(!start);
          }}
          containerStyle={StartButtonStyle.container}
          buttonStyle={StartButtonStyle.button}
        />
        <Button
          title="Mais opções"
          onPress={toggleOverlay}
          buttonStyle={MoreOptionButtonStyle.button}
          titleStyle={MoreOptionButtonStyle.tittle}
          disabled={start}
        />
      </ButtonsContainer>

      <OptionOverlay
        openOverlay={openOverlay}
        halfStep={halfStep}
        toggleOverlay={toggleOverlay}
        toggleHalfStep={toggleHalfStep}
        toggleMode={toggleMode}
      />
    </Container>
  );
};

export default Timer;
