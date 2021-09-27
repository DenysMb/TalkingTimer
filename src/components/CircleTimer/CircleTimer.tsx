import React from 'react';
import {TimeCircle} from './CircleTimer.style';
import {Text} from 'react-native-elements';
import {formatNumber} from '../../shared/utils';

interface ICircleTimer {
  minutes: number;
  seconds: number;
}

const CircleTimer = ({minutes, seconds}: ICircleTimer) => {
  return (
    <TimeCircle>
      <Text h2>
        {formatNumber(minutes)}:{formatNumber(seconds)}
      </Text>
    </TimeCircle>
  );
};

export default CircleTimer;
