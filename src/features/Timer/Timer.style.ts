import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 32px;
`;

export const ButtonsContainer = styled.View`
  width: 100%;
`;

export const StartButtonStyle = {
  container: {marginBottom: 16},
  button: {backgroundColor: '#000'},
};

export const MoreOptionButtonStyle = {
  button: {
    backgroundColor: '#fff',
    borderWidth: 3,
    borderColor: '#000',
  },
  tittle: {
    color: '#000',
  },
};
