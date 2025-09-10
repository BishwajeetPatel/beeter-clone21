// app/components/Footer.js
'use client'
import styled from 'styled-components'
import Link from 'next/link'

const FooterContainer = styled.footer`
  background: #1a1a1a;
  color: white;
  padding: 60px 0 30px;
`

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
`

const FooterSection = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 20px;
    color: #017848;
  }
  
  ul {
    list-style: none;
    
    li {
      margin-bottom: 12px;
      
      a {
        color: #ccc;
        text-decoration: none;
        transition: color 0.2s;
        
        &:hover {
          color: white;
        }
      }
    }
  }
`

const FooterBottom = styled.div`
  border-top: 1px solid #333;
  padding-top: 30px;
  text-align: center;
  color: #888;
  
  p {
    margin-bottom: 10px;
  }
`

const CompanyInfo = styled.div`
  h3 {
    font-size: 1.5rem;
    color: #017848;
    margin-bottom: 16px;
  }
  
  p {
    color: #ccc;
    line-height: 1.6;
    margin-bottom: 12px;
  }
`

export default function Footer() {
  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <CompanyInfo>
            <h3>Better</h3>
            <p>Making homeownership simpler, faster, and more accessible for all Americans.</p>
            <p>📧 hello@better.com</p>
            <p>📞 1-415-523-8837</p>
          </CompanyInfo>
          
          <FooterSection>
            <h3>Products</h3>
            <ul>
              <li><Link href="/mortgage-calculator">Mortgage Calculator</Link></li>
              <li><Link href="/start">Get Pre-approved</Link></li>
              <li><a href="#">Refinance</a></li>
              <li><a href="#">HELOC</a></li>
            </ul>
          </FooterSection>
          
          <FooterSection>
            <h3>Company</h3>
            <ul>
              <li><Link href="/about-us">About Us</Link></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Investor Relations</a></li>
            </ul>
          </FooterSection>
          
          <FooterSection>
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Home Buying Guide</a></li>
              <li><a href="#">Mortgage Rates</a></li>
              <li><a href="#">Learning Center</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </FooterSection>
        </FooterContent>
        
        <FooterBottom>
          <p>© 2024 Better.com Clone. This is a demonstration project.</p>
          <p>Built with Next.js and React for educational purposes.</p>
        </FooterBottom>
      </div>
    </FooterContainer>
  )
}
