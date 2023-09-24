import styled from 'styled-components/macro'

export const ListItem = styled.li`
  width: 50%;
  list-style-type: none;
  @media screen and (min-width: 768px) {
    width: 25%;
  }
`
export const DirectionButton = styled.button`
  text-align: center;
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  background-color: #ffffff;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 700;
  width: 100%;
  border-radius: 7px;
  border: none;
  padding-left: 25px;
  padding-top: 13px;
  padding-bottom: 13px;
  padding-right: 25px;
  margin-bottom: 12px;
  outline: none;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  cursor: pointer;
`
