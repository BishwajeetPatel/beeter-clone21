// app/page.js (Home Page)
'use client'
import styled from 'styled-components'
import Link from 'next/link'
import { useState } from 'react'

const HomeContainer = styled.div`
  min-height: 100vh;
`

const HeroSection = styled.section`
  background: linear-gradient(135deg, #017848 0%, #024d33 100%);
  color: white;
  padding: 120px 0;
  text-align: center;
`

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 24px;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 40px;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

const CTAButton = styled(Link)`
  background: white;
  color: #017848;
  padding: 16px 32px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1.1rem;
  text-decoration: none;
  display: inline-block;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`

const StatsSection = styled.section`
  padding: 80px 0;
  background: #f8f9fa;
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  text-align: center;
`

const StatItem = styled.div`
  h3 {
    font-size: 2.5rem;
    color: #017848;
    font-weight: 800;
    margin-bottom: 12px;
  }
  
  p {
    font-size: 1.1rem;
    color: #666;
  }
`

const FeaturesSection = styled.section`
  padding: 80px 0;
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 60px;
  margin-top: 60px;
`

const FeatureCard = styled.div`
  text-align: center;
  
  h3 {
    font-size: 1.8rem;
    margin: 24px 0 16px;
    color: #1a1a1a;
  }
  
  p {
    color: #666;
    font-size: 1.1rem;
    line-height: 1.6;
  }
`

export default function Home() {
  return (
    <HomeContainer>
      <HeroSection>
        <div className="container">
          <HeroTitle>
            Get a mortgage,<br />
            not a headache
          </HeroTitle>
          <HeroSubtitle>
            Better is a digital mortgage lender dedicated to making homeownership easier, faster, and most of all, more affordable.
          </HeroSubtitle>
          <CTAButton href="/start">
            Get started
          </CTAButton>
        </div>
      </HeroSection>

      <StatsSection>
        <div className="container">
          <StatsGrid>
            <StatItem>
              <h3>$100B+</h3>
              <p>Home loans funded entirely online</p>
            </StatItem>
            <StatItem>
              <h3>400K+</h3>
              <p>Customers who chose a Better mortgage</p>
            </StatItem>
            <StatItem>
              <h3>$131M</h3>
              <p>In savings we've returned to our customers</p>
            </StatItem>
          </StatsGrid>
        </div>
      </StatsSection>

      <FeaturesSection>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '24px' }}>
            Why Better?
          </h2>
          <FeaturesGrid>
            <FeatureCard>
              <h3>🏠 Digital-first</h3>
              <p>
                Get pre-approved in as little as 3 minutes all online. We use technology to make the home loan process faster and more efficient.
              </p>
            </FeatureCard>
            <FeatureCard>
              <h3>💰 Lower costs</h3>
              <p>
                Our technology allows us to build a more efficient business and pass those savings on to you.
              </p>
            </FeatureCard>
            <FeatureCard>
              <h3>⚡ Faster process</h3>
              <p>
                Our digital-first approach means fewer forms, less paperwork, and a faster path to closing.
              </p>
            </FeatureCard>
          </FeaturesGrid>
        </div>
      </FeaturesSection>
    </HomeContainer>
  )
}
