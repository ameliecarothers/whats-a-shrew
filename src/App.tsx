import { useState, useEffect } from 'react'
import './App.css'
import shrewHero from './assets/shrew-hero.svg'
import commonShrew from './assets/common-shrew.svg'
import waterShrew from './assets/water-shrew.svg'
import starNosedShrew from './assets/star-nosed-shrew.svg'
import pygmyShrew from './assets/pygmy-shrew.svg'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Navigation */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <ul>
          <li><a onClick={() => scrollToSection('home')}>Home</a></li>
          <li><a onClick={() => scrollToSection('about')}>About</a></li>
          <li><a onClick={() => scrollToSection('facts')}>Facts</a></li>
          <li><a onClick={() => scrollToSection('species')}>Species</a></li>
          <li><a onClick={() => scrollToSection('conservation')}>Conservation</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>What's a Shrew?</h1>
          <p className="subtitle">Discover the World's Tiniest, Mightiest Mammals</p>
          <button onClick={() => scrollToSection('about')} className="cta-button">
            Begin Your Journey
          </button>
        </div>
      </section>

      {/* Introduction */}
      <section id="about" className="intro">
        <h2>Meet the Shrew</h2>
        <div className="intro-content">
          <div className="intro-text">
            <p>
              Shrews are among nature's most remarkable creatures - tiny insectivorous mammals 
              that look like miniature mice but are actually more closely related to moles and 
              hedgehogs. Despite their small size (some species weigh less than a penny!), 
              shrews are fierce predators with extraordinary metabolisms.
            </p>
            <br />
            <p>
              These incredible animals must eat every 2-3 hours to survive, consuming up to 
              three times their body weight daily. With hearts beating up to 1,200 times per 
              minute, shrews live life at an incredible pace that most other mammals couldn't sustain.
            </p>
          </div>
          <div className="shrew-image">
            <img src={shrewHero} alt="A shrew in its natural habitat showing its distinctive pointed snout and tiny, bright eyes" />
          </div>
        </div>
      </section>

      {/* Amazing Facts */}
      <section id="facts" className="facts">
        <h2>Incredible Shrew Facts</h2>
        <div className="fact-grid">
          <div className="fact-card">
            <h3>Lightning Fast</h3>
            <span className="fact-number">1,200</span>
            <p>Heartbeats per minute - one of the fastest heart rates in the animal kingdom!</p>
          </div>
          <div className="fact-card">
            <h3>Tiny but Mighty</h3>
            <span className="fact-number">1.8g</span>
            <p>The Etruscan shrew weighs less than a dime, making it the world's smallest mammal by weight.</p>
          </div>
          <div className="fact-card">
            <h3>Venomous Bite</h3>
            <span className="fact-number">3</span>
            <p>Number of venomous shrew species in North America - they're among the few venomous mammals!</p>
          </div>
          <div className="fact-card">
            <h3>Constant Hunger</h3>
            <span className="fact-number">3x</span>
            <p>Their body weight in food consumed daily - imagine eating 450 hamburgers every day!</p>
          </div>
          <div className="fact-card">
            <h3>Echo Masters</h3>
            <span className="fact-number">✓</span>
            <p>Some shrews use echolocation like bats to navigate in complete darkness.</p>
          </div>
          <div className="fact-card">
            <h3>Global Citizens</h3>
            <span className="fact-number">385</span>
            <p>Species of shrews found on every continent except Australia and Antarctica.</p>
          </div>
        </div>
      </section>

      {/* Species Gallery */}
      <section id="species" className="species">
        <h2>Common Shrew Species</h2>
        <div className="species-gallery">
          <div className="species-card">
            <div className="species-image">
              <img src={commonShrew} alt="Common Shrew with distinctive brown fur and pointed snout" />
            </div>
            <h3>Common Shrew</h3>
            <p>Found across Europe, with distinctive brown fur and a pointed snout.</p>
          </div>
          <div className="species-card">
            <div className="species-image">
              <img src={waterShrew} alt="Water Shrew with water-repellent fur and fringed feet" />
            </div>
            <h3>Water Shrew</h3>
            <p>Semi-aquatic species with water-repellent fur and fringed feet for swimming.</p>
          </div>
          <div className="species-card">
            <div className="species-image">
              <img src={starNosedShrew} alt="Star-nosed Mole with unique star-shaped nose" />
            </div>
            <h3>Star-nosed Mole</h3>
            <p>Features a unique star-shaped nose with 22 fleshy appendages.</p>
          </div>
          <div className="species-card">
            <div className="species-image">
              <img src={pygmyShrew} alt="Pygmy Shrew, one of the world's smallest mammals" />
            </div>
            <h3>Pygmy Shrew</h3>
            <p>One of the world's smallest mammals, weighing less than a teaspoon of sugar.</p>
          </div>
        </div>
      </section>

      {/* Conservation */}
      <section id="conservation" className="conservation">
        <h2>Why Shrews Matter</h2>
        <div className="conservation-content">
          <p>
            Shrews play a vital role in our ecosystems as natural pest controllers, consuming 
            vast quantities of insects, slugs, and other invertebrates. Their presence indicates 
            a healthy environment, and they serve as an important food source for owls, hawks, 
            and other predators.
          </p>
          <br />
          <p>
            Despite their importance, many people have never heard of shrews or mistake them for 
            mice. By learning about these remarkable creatures, we can better appreciate the 
            incredible diversity of life around us and understand why even the smallest animals 
            deserve our protection and respect.
          </p>
          <br />
          <p>
            <strong>You can help shrews by:</strong> Creating wildlife-friendly gardens, avoiding 
            pesticides, leaving leaf litter and fallen logs for shelter, and spreading awareness 
            about these amazing tiny predators!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 What's a Shrew? | Dedicated to raising awareness about nature's tiniest predators</p>
        <p>Made with ❤️ for shrews everywhere</p>
        <div className="social-links">
          <a href="#">Learn More</a>
          <a href="#">Share</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </>
  )
}

export default App