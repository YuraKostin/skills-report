import styled from 'styled-components';

const ThemedButton = styled.button`
  color: ${props => props.theme.highlight};
  background-color: ${props => props.theme.secondary};
  padding: 10px 15px;
  border: none;
  font-weight: bold;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

export default ThemedButton;