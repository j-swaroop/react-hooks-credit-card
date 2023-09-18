// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #ffffff;
  height: 100vh;
  background-size: cover;
`

export const ContentContainer = styled.div`
  display: flex;
  height: 100%;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`

export const CreditCardBgContainer = styled.div`
  background-color: #3b4b69;
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  @media (max-width: 576px) {
    width: 100%;
    height: 50%;
  }
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #f9f4fb;
  font-size: 30px;
  border: none;
  border-bottom: 3px solid #ffd773;
  padding-bottom: 10px;
`

export const CreditCardContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  width: 80%;
  max-width: 400px;
  height: 250px;
  border-radius: 16px;
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px;
  padding-bottom: 10px;
  @media (max-width: 576px) {
    height: 200px;
  }
`

export const CardHolderName = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 400;
  @media (max-width: 576px) {
    font-size: 14px;
  }
`

export const TextFeild = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 19px;
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 500;
  @media (max-width: 576px) {
    font-size: 17px;
  }
`
export const CardNumber = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 28px;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 30%;
  font-weight: 500;
  @media (max-width: 576px) {
    font-size: 25px;
  }
`

export const PaymentMethodContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
  @media (max-width: 576px) {
    width: 100%;
    margin: auto;
  }
`

export const InputContainer = styled.div`
  width: 80%;
  max-width: 500px;
  border-radius: 8px;
  box-shadow: 0 4px 16px 0 #c3cad9;
  padding: 20px;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
`

export const PaymentMethodHeading = styled.h1`
  color: #475569;
  font-family: 'Roboto';
  font-size: 18px;
  text-align: center;
`

export const Input = styled.input`
  font-family: 'Roboto';
  width: 90%;
  outline: none;
  height: 40px;
  background-color: transparent;
  border: 1px solid #d3d9e0;
  margin-top: 25px;
  padding-left: 15px;
  border-radius: 3px;
  font-size: 14px;
  margin-left: auto;
  margin-right: auto;
`
