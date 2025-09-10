// app/about-us/page.js
'use client'
import styled from 'styled-components'

const AboutContainer = styled.div`
  padding-top: 100px;
`

const AboutHero = styled.section`
  padding: 80px 0;
  text-align: center;
  
  h1 {
    font-size: 3rem;
    color: #017848;
    margin-bottom: 24px;
    font-weight: 800;
  }
  
  p {
    font-size: 1.3rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
`

const MissionSection = styled.section`
  padding: 80px 0;
  background: #f8f9fa;
  
  h2 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 60px;
    color: #1a1a1a;
  }
`

const MissionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
`

const MissionCard = styled.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  
  h3 {
    font-size: 1.5rem;
    color: #017848;
    margin-bottom: 16px;
  }
  
  p {
    color: #666;
    line-height: 1.6;
  }
`

const TeamSection = styled.section`
  padding: 80px 0;
  text-align: center;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 60px;
    color: #1a1a1a;
  }
`

export default function AboutUs() {
  return (
    <AboutContainer>
      <AboutHero>
        <div className="container">
          <h1>About Better</h1>
          <p>
            We're making homeownership simpler, faster — and most importantly, more accessible for all Americans.
          </p>
        </div>
      </AboutHero>

      <MissionSection>
        <div className="container">
          <h2>Our Mission</h2>
          <MissionGrid>
            <MissionCard>
              <h3>Make it simple</h3>
              <p>
                The current mortgage process is painful. We're fixing that with technology and transparency.
              </p>
            </MissionCard>
            <MissionCard>
              <h3>Make it fast</h3>
              <p>
                Get pre-approved in as little as 3 minutes and close your loan in weeks, not months.
              </p>
            </MissionCard>
            <MissionCard>
              <h3>Make it accessible</h3>
              <p>
                We're building tools and services to help more Americans achieve homeownership.
              </p>
            </MissionCard>
          </MissionGrid>
        </div>
      </MissionSection>

      <TeamSection>
        <div className="container">
          <h2>Our Story</h2>
          <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            Better was founded in 2016 with a simple mission: to make homeownership more accessible through technology. 
            Since then, we've helped hundreds of thousands of customers secure their dream homes with faster, more 
            transparent, and more affordable mortgage solutions.
          </p>
        </div>
      </TeamSection>
    </AboutContainer>
  )
}
