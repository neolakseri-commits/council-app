'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = (e) => {
    setScrolled(window.scrollY > 50)
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll)
  }

  return (
    <main>
      {/* HEADER */}
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerContent}>
            <div>
              <h1 className={styles.logo}>COUNCIL</h1>
              <p className={styles.logoSubtitle}>MEET YOUR 25-AGENT SELF</p>
            </div>
            <div className={styles.headerStatus}>
              <div>STATUS: READY</div>
              <div className={styles.connected}>[CONNECTED]</div>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <div className={styles.howWorks}>
                <h2>HOW IT WORKS</h2>
                <ol>
                  <li>Answer 5 quick questions about your values</li>
                  <li>Meet your personal council of 25 AI agents</li>
                  <li>Pose any life decision</li>
                  <li>Watch them debate in real time</li>
                  <li>Get a verdict & share it</li>
                </ol>
                <div className={styles.features}>
                  <div>⚡ Takes 2 minutes</div>
                  <div>⚡ Your data stays yours</div>
                  <div>⚡ No tracking</div>
                </div>
              </div>
            </div>

            <div className={styles.heroCenter}>
              <h2 className={styles.centerTitle}>START HERE</h2>
              <p className={styles.centerDescription}>
                Your future self is debating with your past self. Let 25 versions of your brain solve what you can't decide alone.
              </p>
              <Link href="/quiz">
                <button className={styles.ctaButton}>ANSWER QUESTIONS</button>
              </Link>
              <p className={styles.demoLink}>or try <Link href="/demo">demo debate</Link></p>
            </div>

            <div className={styles.heroRight}>
              <div className={styles.pricing}>
                <h2>YOUR COUNCIL</h2>
                <div className={styles.pricingItem}>
                  <div>5 archetypes</div>
                  <div>25 unique agents</div>
                  <div>Each with their own bias</div>
                </div>
                <div className={styles.pricingDivider}></div>
                <h3>PRICING</h3>
                <div className={styles.pricingItem}>
                  <div>Free: 3 debates</div>
                  <div>Pro: $9/mo (soon)</div>
                  <div>Pay in crypto</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AGENTS PREVIEW */}
      <section className={styles.agentsSection}>
        <div className="container">
          <h2>YOUR COUNCIL</h2>
          <div className={styles.agentGrid}>
            {[
              { name: 'THE RECKLESS', desc: 'Takes all risks' },
              { name: 'THE CAUTIOUS', desc: 'Avoids all risks' },
              { name: 'THE ANALYST', desc: 'Follows data' },
              { name: 'THE DREAMER', desc: 'Chases vision' },
              { name: 'THE REALIST', desc: 'Sees facts' },
            ].map((agent, i) => (
              <div key={i} className={styles.agentCard}>
                <div className={styles.agentNumber}>0{i + 1}</div>
                <h3>{agent.name}</h3>
                <p>{agent.desc}</p>
              </div>
            ))}
          </div>
          <p className={styles.agentNote}>+ 20 more specialized agents based on your profile</p>
        </div>
      </section>

      {/* HOW DEBATE WORKS */}
      <section className={styles.debateSection}>
        <div className="container">
          <h2>HOW THE DEBATE WORKS</h2>
          <div className={styles.debateSteps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3>You ask a question</h3>
              <p>"Should I take this job offer?"</p>
            </div>
            <div className={styles.arrow}>→</div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>Your council debates</h3>
              <p>Each agent argues from their perspective</p>
            </div>
            <div className={styles.arrow}>→</div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>You get a verdict</h3>
              <p>The consensus decision + confidence score</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerContent}>
            <div>© 2026 COUNCIL • Made for thinkers</div>
            <div className={styles.footerLinks}>
              <a href="#">Docs</a>
              <a href="#">GitHub</a>
              <a href="#">X</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
