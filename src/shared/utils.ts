import Tts from 'react-native-tts';

export const checkTts = () => {
  Tts.getInitStatus().then(
    () => {
      console.warn('TTS installed');
    },
    err => {
      if (err.code === 'no_engine') {
        console.warn('TTS not installed');
        Tts.requestInstallEngine();
      }
    },
  );
};

export const speakWord = (word: string) => {
  Tts.speak(word);
};

export const formatNumber = (number: number) => ('0' + number).slice(-2);
