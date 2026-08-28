'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './quiz.module.css'

const questions = [
  {
    id: 1,
    question: 'When facing uncertainty, you typically:',
    options: [
      { text: 'Jump in headfirst', value: 'reckless' },
      { text: 'Think it through carefully', value: 'cautious' },
      { text: 'Gather more data', value: 'analyst' },
      { text: 'Trust your gut', value: 'dreamer' },
    ],
  },
  {
    id: 2,
    question: 'What drives your decisions most?',
    options: [
      { text: 'Potential upside', value: 'reckless' },
      { text: 'Avoiding downside', value: 'cautious' },
      { text: 'Logic and facts', value: 'analyst' },
      { text: 'Vision and purpose', value: 'dreamer' },
    ],
  },
  {
    id: 3,
    question: 'In a group discussion, you:',
    options: [
      { text: 'Push bold ideas', value: 'reckless' },
      { text: 'Question risky proposals', value: 'cautious' },
      { text: 'Analyze the facts', value: 'analyst' },
      { text: 'Dream big', value: 'dreamer' },
    ],
  },
  {
    id: 4,
    question: 'Your ideal outcome is:',
    options: [
      { text: 'Maximum gain', value: 'reckless' },
      { text: 'Zero loss', value: 'cautious' },
      { text: 'Optimal efficiency', value: 'analyst' },
      { text: 'Transformative change', value: 'dreamer' },
    ],
  },
  {
    id: 5,
    question: 'When things go wrong, you:',
    options: [
      { text: 'Move fast to fix it', value: 'reckless' },
      { text: 'Follow a careful plan', value: 'cautious' },
      { text: 'Analyze root cause', value: 'analyst' },
      { text: 'See opportunity in it', value: 'dreamer' },
    ],
  },
]

export default function Quiz() {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState({})
  const router = useRouter()

  const handleAnswer = (value) => {
    const newAnswers = { ...answers, [current]: value }
    setAnswers(newAnswers)

    if (current < questions.length - 1) {
      setCurrent(current + 1)
    } else {
      // Quiz complete - navigate to debate
      localStorage.setItem('userProfile', JSON.stringify(newAnswers))
      router.push('/debate')
    }
  }

  const progress = ((current + 1) / questions.length) * 100

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>BUILD YOUR COUNCIL</h1>
        <div className={styles.progress}>
          <div className={styles.progressBar} style={{ width: `${progress}%` }}></div>
        </div>
        <p className={styles.counter}>
          Question {current + 1} of {questions.length}
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.question}>
          <h2>{questions[current].question}</h2>

          <div className={styles.options}>
            {questions[current].options.map((option, idx) => (
              <button
                key={idx}
                className={`${styles.option} ${answers[current] === option.value ? styles.selected : ''}`}
                onClick={() => handleAnswer(option.value)}
              >
                <span className={styles.optionText}>{option.text}</span>
              </button>
            ))}
          </div>
        </div>

        <div className={styles.sidebar}>
          <div className={styles.tips}>
            <h3>There's no wrong answer</h3>
            <p>We're building YOUR council based on how YOU think, not on what's "correct".</p>
          </div>

          <div className={styles.archetype}>
            <h3>The 5 Archetypes</h3>
            <div className={styles.arcList}>
              <div>🎯 Reckless</div>
              <div>⚠️ Cautious</div>
              <div>📊 Analyst</div>
              <div>💫 Dreamer</div>
              <div>🎭 Realist</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
