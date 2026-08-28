'use client'

import { useRouter } from 'next/navigation'
import styles from './demo.module.css'

export default function Demo() {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button className={styles.backButton} onClick={() => router.push('/')}>
          ← Back
        </button>
        <h1>DEMO DEBATE</h1>
      </header>

      <div className={styles.content}>
        <div className={styles.demoBox}>
          <h2>Should I leave my job to start a company?</h2>

          <div className={styles.debateContainer}>
            <div className={`${styles.argument} ${styles.reckless}`}>
              <div className={styles.title}>🎯 RECKLESS</div>
              <p>"This is the opportunity you've been waiting for! The upside is massive if you act now. Go all in. Your future self will thank you for the courage."</p>
              <div className={styles.meter}>78%</div>
            </div>

            <div className={`${styles.argument} ${styles.cautious}`}>
              <div className={styles.title}>⚠️ CAUTIOUS</div>
              <p>"Let's identify all the risks first. We need a backup plan before moving forward. One mistake could derail everything."</p>
              <div className={styles.meter}>62%</div>
            </div>

            <div className={`${styles.argument} ${styles.analyst}`}>
              <div className={styles.title}>📊 ANALYST</div>
              <p>"The data suggests a 65% success rate. We need more information to decide. ROI potential is 3.2x if variables hold."</p>
              <div className={styles.meter}>71%</div>
            </div>

            <div className={`${styles.argument} ${styles.dreamer}`}>
              <div className={styles.title}>💫 DREAMER</div>
              <p>"Imagine what you could become from this! This aligns with your deeper purpose. Your vision is worth pursuing."</p>
              <div className={styles.meter}>75%</div>
            </div>
          </div>

          <div className={styles.verdict}>
            <h3>COUNCIL VERDICT</h3>
            <div className={styles.verdict__title}>YES, BUT PREPARE</div>
            <div className={styles.verdict__confidence}>
              <div className={styles.bar}>
                <div className={styles.fill} style={{ width: '72%' }}></div>
              </div>
              <p>72% Confidence</p>
            </div>
            <p className={styles.verdict__reasoning}>
              The council consensus: your timing is right and your vision is solid, but you need a 6-month financial runway and a contingency plan. Start building your network and validating your business model part-time first.
            </p>

            <button className={styles.ctaButton} onClick={() => router.push('/quiz')}>
              BUILD YOUR OWN COUNCIL
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

