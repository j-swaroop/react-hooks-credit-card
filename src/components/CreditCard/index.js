// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  ContentContainer,
  CreditCardBgContainer,
  Heading,
  CreditCardContainer,
  CardHolderName,
  TextFeild,
  PaymentMethodContainer,
  PaymentMethodHeading,
  InputContainer,
  Input,
  CardNumber,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolder, setCardHolder] = useState('')

  const onChangeCardNumber = event => {
    setCardNumber(event.target.value)
  }

  const onChangeCardHolder = event => {
    setCardHolder(event.target.value)
  }

  return (
    <MainContainer>
      <ContentContainer>
        <CreditCardBgContainer>
          <Heading> Credit Card </Heading>
          <CreditCardContainer data-testid="creditCard">
            <CardNumber> {cardNumber} </CardNumber>
            <CardHolderName> CARDHOLDER NAME </CardHolderName>
            <TextFeild> {cardHolder.toUpperCase()} </TextFeild>
          </CreditCardContainer>
        </CreditCardBgContainer>

        <PaymentMethodContainer>
          <InputContainer>
            <PaymentMethodHeading> Payment Method</PaymentMethodHeading>
            <Input
              type="text"
              placeholder="Card Number"
              value={cardNumber}
              onChange={onChangeCardNumber}
            />
            <Input
              type="text"
              placeholder="Cardholder Name"
              value={cardHolder}
              onChange={onChangeCardHolder}
            />
          </InputContainer>
        </PaymentMethodContainer>
      </ContentContainer>
    </MainContainer>
  )
}

export default CreditCard
