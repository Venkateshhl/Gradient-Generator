import styled from 'styled-components/macro'

export const GradientGeneratorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${props => props.gradientValue});
  min-height: 100vh;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 99%;
  max-width: 550px;
  @media screen and (min-width: 768px) {
    width: 87%;
    max-width: 1110px;
  }
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: bold;
  text-align: center;
  font-size: 25px;
  @media screen and (min-width: 768px) {
    font-size: 33px;
  }
`

export const DirectionsDescription = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 25px;
  line-height: 1.6;
`

export const GradientDirectionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1;
  @media screen and (min-width: 768px) {
    width: 60%;
    max-width: 428px;
  }
`

export const ColorsPickersDescription = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 23px;
  line-height: 1.7;
`

export const ColorPickerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 320px;
`
export const CustomInput = styled.input`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`

export const GenerateButton = styled.button`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 600;
  background-color: #00c9b7;
  min-width: 26px;
  border-radius: 7px;
  border: none;
  padding-left: 25px;
  padding-top: 13px;
  padding-bottom: 13px;
  padding-right: 25px;
  margin-left: 16px;
  margin-bottom: 11px;
  margin-left: 1px;
  margin-top: 26px;
  outline: none;
  cursor: pointer;
`

export const CustomInputAndColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ColorValue = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
`
