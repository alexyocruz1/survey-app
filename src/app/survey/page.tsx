import SurveyForm from '../../components/SurveyForm';
import styles from '../../styles/SurveyPage.module.css';

export default function SurveyPage() {
  return (
    <div className={styles.container}>
      <SurveyForm />
    </div>
  );
}