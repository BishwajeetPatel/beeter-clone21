// app/start/page.js
'use client'
import { useState } from 'react'
import styled from 'styled-components'

const StartContainer = styled.div`
  padding-top: 100px;
  min-height: 100vh;
  background: linear-gradient(135deg, #017848 0%, #024d33 100%);
  color: white;
`

const StartSection = styled.section`
  padding: 80px 0;
  text-align: center;
`

const StartTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 24px;
  font-weight: 800;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const StartSubtitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: 60px;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`

const FormContainer = styled.div`
  background: white;
  color: #1a1a1a;
  padding: 60px 40px;
  border-radius: 16px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
`

const StepIndicator = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  
  span {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #e0e0e0;
    margin: 0 6px;
    
    &.active {
      background: #017848;
    }
  }
`

const Question = styled.div`
  margin-bottom: 40px;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 24px;
    text-align: center;
  }
`

const OptionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
`

const Option = styled.button`
  padding: 20px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
  
  &:hover, &.selected {
    border-color: #017848;
    background: #f0f8f5;
  }
  
  h4 {
    font-size: 1.1rem;
    margin-bottom: 8px;
    color: #1a1a1a;
  }
  
  p {
    color: #666;
    font-size: 0.9rem;
  }
`

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`

const NavButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  
  &.primary {
    background: #017848;
    color: white;
  }
  
  &.secondary {
    background: #f0f0f0;
    color: #666;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const questions = [
  {
    title: "What are you looking to do?",
    options: [
      { id: 'buy', title: 'Buy a home', description: 'I want to purchase a new home' },
      { id: 'refinance', title: 'Refinance', description: 'I want to refinance my existing mortgage' },
      { id: 'cashout', title: 'Cash-out refinance', description: 'I want to refinance and get cash out' }
    ]
  },
  {
    title: "What type of property?",
    options: [
      { id: 'single', title: 'Single family home', description: 'A standalone house' },
      { id: 'condo', title: 'Condominium', description: 'A condo or co-op' },
      { id: 'townhouse', title: 'Townhouse', description: 'A townhouse or row house' },
      { id: 'multi', title: 'Multi-family', description: '2-4 unit building' }
    ]
  },
  {
    title: "How will this property be used?",
    options: [
      { id: 'primary', title: 'Primary residence', description: 'This will be my main home' },
      { id: 'secondary', title: 'Secondary home', description: 'This will be a vacation or secondary home' },
      { id: 'investment', title: 'Investment property', description: 'I plan to rent this property' }
    ]
  }
]

export default function Start() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState({})

  const handleOptionSelect = (questionIndex, optionId) => {
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: optionId
    }))
  }

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      alert('Thank you! Your application has been started. You would normally be redirected to the next step.')
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const currentQuestion = questions[currentStep]
  const canProceed = answers[currentStep]

  return (
    <StartContainer>
      <StartSection>
        <div className="container">
          <StartTitle>Get started with Better</StartTitle>
          <StartSubtitle>
            Answer a few questions to get your personalized mortgage experience
          </StartSubtitle>
          
          <FormContainer>
            <StepIndicator>
              {questions.map((_, index) => (
                <span 
                  key={index} 
                  className={index <= currentStep ? 'active' : ''}
                />
              ))}
            </StepIndicator>
            
            <Question>
              <h3>{currentQuestion.title}</h3>
              <OptionGrid>
                {currentQuestion.options.map(option => (
                  <Option
                    key={option.id}
                    className={answers[currentStep] === option.id ? 'selected' : ''}
                    onClick={() => handleOptionSelect(currentStep, option.id)}
                  >
                    <h4>{option.title}</h4>
                    <p>{option.description}</p>
                  </Option>
                ))}
              </OptionGrid>
            </Question>
            
            <NavigationButtons>
              <NavButton 
                className="secondary" 
                onClick={handleBack}
                disabled={currentStep === 0}
              >
                Back
              </NavButton>
              <NavButton 
                className="primary" 
                onClick={handleNext}
                disabled={!canProceed}
              >
                {currentStep === questions.length - 1 ? 'Get Started' : 'Next'}
              </NavButton>
            </NavigationButtons>
          </FormContainer>
        </div>
      </StartSection>
    </StartContainer>
  )
}
