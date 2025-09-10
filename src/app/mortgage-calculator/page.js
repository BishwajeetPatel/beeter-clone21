// app/mortgage-calculator/page.js
'use client'
import { useState, useEffect } from 'react'
import styled from 'styled-components'

const CalculatorContainer = styled.div`
  padding-top: 100px;
  min-height: 100vh;
  background: #f8f9fa;
`

const CalculatorSection = styled.section`
  padding: 80px 0;
`

const CalculatorTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: #017848;
  margin-bottom: 60px;
  font-weight: 800;
`

const CalculatorGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  max-width: 1000px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`

const InputSection = styled.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
`

const ResultSection = styled.div`
  background: #017848;
  color: white;
  padding: 40px;
  border-radius: 12px;
  text-align: center;
`

const InputGroup = styled.div`
  margin-bottom: 24px;
  
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: #1a1a1a;
  }
  
  input {
    width: 100%;
    padding: 12px;
    border: 2px solid #e0e0e0;
    border-radius: 6px;
    font-size: 1rem;
    transition: border-color 0.2s;
    
    &:focus {
      outline: none;
      border-color: #017848;
    }
  }
`

const MonthlyPayment = styled.div`
  h2 {
    font-size: 3rem;
    margin-bottom: 16px;
    font-weight: 800;
  }
  
  p {
    font-size: 1.1rem;
    opacity: 0.9;
  }
`

const PaymentBreakdown = styled.div`
  margin-top: 40px;
  
  h3 {
    margin-bottom: 20px;
    font-size: 1.3rem;
  }
  
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(255,255,255,0.2);
  }
`

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(400000)
  const [downPayment, setDownPayment] = useState(80000)
  const [interestRate, setInterestRate] = useState(7.5)
  const [loanTerm, setLoanTerm] = useState(30)
  const [taxes, setTaxes] = useState(265)
  const [insurance, setInsurance] = useState(150)
  const [hoa, setHoa] = useState(0)
  
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [principalInterest, setPrincipalInterest] = useState(0)

  useEffect(() => {
    calculatePayment()
  }, [homePrice, downPayment, interestRate, loanTerm, taxes, insurance, hoa])

  const calculatePayment = () => {
    const loanAmount = homePrice - downPayment
    const monthlyRate = (interestRate / 100) / 12
    const numPayments = loanTerm * 12
    
    const monthlyPI = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                     (Math.pow(1 + monthlyRate, numPayments) - 1)
    
    const totalMonthly = monthlyPI + taxes + insurance + hoa
    
    setPrincipalInterest(monthlyPI)
    setMonthlyPayment(totalMonthly)
  }

  return (
    <CalculatorContainer>
      <CalculatorSection>
        <div className="container">
          <CalculatorTitle>Mortgage Calculator</CalculatorTitle>
          
          <CalculatorGrid>
            <InputSection>
              <h3 style={{ marginBottom: '32px', color: '#017848' }}>Loan Details</h3>
              
              <InputGroup>
                <label>Home Price</label>
                <input
                  type="number"
                  value={homePrice}
                  onChange={(e) => setHomePrice(Number(e.target.value))}
                />
              </InputGroup>
              
              <InputGroup>
                <label>Down Payment</label>
                <input
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                />
              </InputGroup>
              
              <InputGroup>
                <label>Interest Rate (%)</label>
                <input
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                />
              </InputGroup>
              
              <InputGroup>
                <label>Loan Term (years)</label>
                <input
                  type="number"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                />
              </InputGroup>
              
              <InputGroup>
                <label>Property Taxes (monthly)</label>
                <input
                  type="number"
                  value={taxes}
                  onChange={(e) => setTaxes(Number(e.target.value))}
                />
              </InputGroup>
              
              <InputGroup>
                <label>Home Insurance (monthly)</label>
                <input
                  type="number"
                  value={insurance}
                  onChange={(e) => setInsurance(Number(e.target.value))}
                />
              </InputGroup>
              
              <InputGroup>
                <label>HOA Fees (monthly)</label>
                <input
                  type="number"
                  value={hoa}
                  onChange={(e) => setHoa(Number(e.target.value))}
                />
              </InputGroup>
            </InputSection>
            
            <ResultSection>
              <MonthlyPayment>
                <h2>${Math.round(monthlyPayment).toLocaleString()}</h2>
                <p>Monthly Payment</p>
              </MonthlyPayment>
              
              <PaymentBreakdown>
                <h3>Payment Breakdown</h3>
                <div>
                  <span>Principal & Interest</span>
                  <span>${Math.round(principalInterest).toLocaleString()}</span>
                </div>
                <div>
                  <span>Property Taxes</span>
                  <span>${taxes.toLocaleString()}</span>
                </div>
                <div>
                  <span>Home Insurance</span>
                  <span>${insurance.toLocaleString()}</span>
                </div>
                <div>
                  <span>HOA Fees</span>
                  <span>${hoa.toLocaleString()}</span>
                </div>
              </PaymentBreakdown>
            </ResultSection>
          </CalculatorGrid>
        </div>
      </CalculatorSection>
    </CalculatorContainer>
  )
}
