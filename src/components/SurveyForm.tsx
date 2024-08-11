"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../styles/SurveyForm.module.css';

const questions = [
  {
    question: "Is your company currently using Salesforce?",
    type: "yesno",
    options: ["Yes", "No"],
  },
  {
    question: "What industry does your company belong to?",
    type: "single",
    options: ["Technology", "Finance", "Healthcare", "Education", "Other"],
  },
  {
    question: "How many employees does your company have?",
    type: "single",
    options: ["1-10", "11-50", "51-200", "201-500", "501+"],
  },
  {
    question: "What are your current challenges?",
    type: "multiple",
    options: ["Customer Management", "Sales Tracking", "Marketing Automation", "Reporting", "Other"],
  },
  {
    question: "Do you use any CRM software?",
    type: "yesno",
    options: ["Yes", "No"],
  },
  {
    question: "How satisfied are you with your current CRM software?",
    type: "single",
    options: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very Dissatisfied"],
  },
  {
    question: "What features are most important to you in a CRM?",
    type: "multiple",
    options: ["Ease of Use", "Customization", "Integration", "Reporting", "Support"],
  },
  {
    question: "How often do you use CRM software?",
    type: "single",
    options: ["Daily", "Weekly", "Monthly", "Rarely", "Never"],
  },
  {
    question: "Would you recommend your current CRM software to others?",
    type: "yesno",
    options: ["Yes", "No"],
  },
  {
    question: "What is your budget for CRM software?",
    type: "single",
    options: ["< $1000", "$1000 - $5000", "$5000 - $10000", "$10000+"],
  },
  {
    question: "Please provide your feedback on this survey.",
    type: "feedback",
  },
];

const titles = [
  "You're doing great",
  "Almost there",
  "Curious about the results",
  "We're almost there"
];

const SurveyForm = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<any>({});
  const [feedback, setFeedback] = useState("");
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    setVisible(true);
  }, [currentQuestionIndex]);

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAnswers({
      ...answers,
      [name]: value,
    });
    setError("");
  };

  const handleNextQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    const answer = answers[`question${currentQuestionIndex}`];

    if (!answer) {
      setError("Please select an answer before proceeding.");
      return;
    }

    setVisible(false);
    setTimeout(() => {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }, 300);
  };

  const handlePreviousQuestion = () => {
    setVisible(false);
    setTimeout(() => {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const queryParams = new URLSearchParams({
      ...answers,
      feedback,
    }).toString();
    router.push(`/recommendation?${queryParams}`);
  };

  const currentQuestion = questions[currentQuestionIndex];
  const titleIndex = Math.floor(currentQuestionIndex / 3);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{titles[titleIndex]}</h1>
      <form onSubmit={handleSubmit} className={`${styles.form} ${visible ? styles.visible : ''}`}>
        {currentQuestionIndex === 0 && (
          <p className={styles.phrase}>Let&apos;s do the first one</p>
        )}
        {currentQuestionIndex < questions.length - 1 ? (
          <div>
            <label>{currentQuestion.question}</label>
            <div className={styles['radio-group']}>
              {currentQuestion.type === "yesno" && currentQuestion.options && (
                currentQuestion.options.map((option) => (
                  <label key={option} className={styles['radio-label']}>
                    <input
                      type="radio"
                      name={`question${currentQuestionIndex}`}
                      value={option}
                      onChange={handleAnswerChange}
                      className={styles['radio-input']}
                      checked={answers[`question${currentQuestionIndex}`] === option}
                    />
                    <span className={styles['radio-custom']}></span>
                    {option}
                  </label>
                ))
              )}
              {currentQuestion.type === "multiple" && currentQuestion.options && (
                currentQuestion.options.map((option) => (
                  <label key={option} className={styles['radio-label']}>
                    <input
                      type="checkbox"
                      name={`question${currentQuestionIndex}`}
                      value={option}
                      onChange={handleAnswerChange}
                      className={styles['radio-input']}
                      checked={answers[`question${currentQuestionIndex}`]?.includes(option)}
                    />
                    <span className={styles['radio-custom']}></span>
                    {option}
                  </label>
                ))
              )}
              {currentQuestion.type === "single" && currentQuestion.options && (
                <div className={styles['select-container']}>
                  <select
                    name={`question${currentQuestionIndex}`}
                    onChange={handleAnswerChange}
                    className={styles.select}
                    value={answers[`question${currentQuestionIndex}`] || ""}
                  >
                    <option value="" disabled>Select an option</option>
                    {currentQuestion.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <div className={styles.buttons}>
              {currentQuestionIndex > 0 && (
                <button type="button" onClick={handlePreviousQuestion} className={styles.backButton}>
                  ← Back
                </button>
              )}
              <button type="button" onClick={handleNextQuestion} className={styles.nextButton}>
                Next →
              </button>
            </div>
          </div>
        ) : (
          <div>
            <p className={styles.phrase}>You&apos;ve done it!</p>
            <label className={styles['feedback-label']}>{currentQuestion.question}</label>
            <textarea
              name="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className={styles['feedback-textarea']}
            />
            <button type="submit" className={styles.submitButton}>Submit Survey</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default SurveyForm;