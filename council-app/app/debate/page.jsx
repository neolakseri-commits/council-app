'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import styles from './debate.module.css'

const debateArguments = {
  reckless: [
    "This is the opportunity you've been waiting for!",
    "The upside is massive if you act now.",
    "Playing it safe is how you miss life-changing moments.",
    "Go all in. Regret beats what-ifs.",
    "Your future self will thank you for the courage.",
  ],
  cautious: [
    "Let's identify all the risks first.",
    "What's the downside scenario here?",
    "We need a backup plan before moving forward.",
    "Safety first, then we can evaluate.",
    "One mistake could derail everything.",
  ],
  analyst: [
    "The data suggests a 65% success rate.",
    "Historical precedent shows mixed results.",
    "We need more information to decide.",
    "ROI potential is 3.2x if variables hold.",
    "Correlation doesn't equal causation here.",
  ],
  dreamer: [
    "Imagine what you could become from this!",
    "This aligns with your deeper purpose.",
    "The potential transformation is incredible.",
    "Your vision is worth pursuing.",
    "This could change everything about who you are.",
  ],
}

export default function Debate() {
  const [phase, setPhase] = useState('question')
  const [question, setQuestion] = useState('')
  const [debating, setDebating] = useState(false)
  const [arguments, setArguments] = useState({})
  const [verdict, setVerdict] = useState(null)
  const canvasRef = useRef(null)
  const router = useRouter()

  const startDebate = () => {
    if (!question.trim()) return

    setDebating(true)
    setPhase('debate')
    setArguments({})

    // Simulate debate with delays
    const archetypes = ['reckless', 'cautious', 'analyst', 'dreamer']
    let delay = 0

    archetypes.forEach((arch, idx) => {
      setTimeout(() => {
        const randomArg = debateArguments[arch][Math.floor(Math.random() * debateArguments[arch].length)]
        setArguments((prev) => ({ ...prev, [arch]: randomArg }))
      }, delay)
      delay += 1000
    })

    // Show verdict after debate
    setTimeout(() => {
      const verdictOptions = [
        { recommendation: 'YES, DO IT', confidence: 78, reasoning: 'The upside outweighs the risks with proper planning.' },
        { recommendation: 'WAIT & PREPARE', confidence: 65, reasoning: 'Gather more data before committing fully.' },
        { recommendation: 'PIVOT STRATEGY', confidence: 72, reasoning: 'The core idea is sound but needs refinement.' },
        { recommendation: 'PASS FOR NOW', confidence: 61, reasoning: 'Timing might not be optimal yet.' },
      ]
      const chosen = verdictOptions[Math.floor(Math.random() * verdictOptions.length)]
      setVerdict(chosen)
      setPhase('verdict')
      setDebating(false)
    }, 5000)
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button className={styles.backButton} onClick={() => router.push('/')}>
          ← Back
        </button>
        <h1>COUNCIL DEBATE</h1>
      </header>

      {phase === 'question' && (
        <div className={styles.questionPhase}>
          <div className={styles.questionBox}>
            <h2>Ask Your Question</h2>
            <p>What decision do you need help with?</p>
            <textarea
              className={styles.textarea}
              placeholder="Example: Should I leave my job to start a company?"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <button
              className={styles.debateButton}
              onClick={startDebate}
              disabled={!question.trim() || debating}
            >
              START DEBATE
            </button>
          </div>
        </div>
      )}

      {(phase === 'debate' || phase === 'verdict') && (
        <div className={styles.debatePhase}>
          <div className={styles.debateCanvas}>
            <canvas ref={canvasRef} width={800} height={400} className={styles.canvas}></canvas>
          </div>

          <div className={styles.debateArguments}>
            <div className={`${styles.argument} ${arguments.reckless ? styles.active : ''}`}>
              <div className={styles.archType}>🎯 RECKLESS</div>
              <p>{arguments.reckless || '...'}</p>
              {arguments.reckless && <div className={styles.confidence}>78%</div>}
            </div>

            <div className={`${styles.argument} ${arguments.cautious ? styles.active : ''}`}>
              <div className={styles.archType}>⚠️ CAUTIOUS</div>
              <p>{arguments.cautious || '...'}</p>
              {arguments.cautious && <div className={styles.confidence}>62%</div>}
            </div>

            <div className={`${styles.argument} ${arguments.analyst ? styles.active : ''}`}>
              <div className={styles.archType}>📊 ANALYST</div>
              <p>{arguments.analyst || '...'}</p>
              {arguments.analyst && <div className={styles.confidence}>71%</div>}
            </div>

            <div className={`${styles.argument} ${arguments.dreamer ? styles.active : ''}`}>
              <div className={styles.archType}>💫 DREAMER</div>
              <p>{arguments.dreamer || '...'}</p>
              {arguments.dreamer && <div className={styles.confidence}>75%</div>}
            </div>
          </div>
        </div>
      )}

      {phase === 'verdict' && verdict && (
        <div className={styles.verdictPhase}>
          <div className={styles.verdictBox}>
            <h2 className={styles.recommendation}>{verdict.recommendation}</h2>
            <div className={styles.confidenceBar}>
              <div className={styles.confidenceFill} style={{ width: `${verdict.confidence}%` }}></div>
              <div className={styles.confidenceLabel}>{verdict.confidence}% confidence</div>
            </div>
            <p className={styles.reasoning}>{verdict.reasoning}</p>

            <div className={styles.actions}>
              <button className={styles.shareButton} onClick={() => alert('Share coming soon!')}>
                SHARE VERDICT
              </button>
              <button className={styles.newButton} onClick={() => setPhase('question')}>
                ASK ANOTHER QUESTION
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
