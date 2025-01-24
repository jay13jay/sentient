import React from 'react'
import './LandingPage.css'

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="company-name">Sentient</div>
        <h1>Under Construction - Coming Soon</h1>
      </header>
      <main className="main-content">
        <p>We are working hard to bring you a new experience. Stay tuned!</p>
        <button className="cta-button">Notify Me</button>
      </main>
      <footer className="footer">
        <p>&copy; 2025 Sentient, LLC. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default LandingPage
