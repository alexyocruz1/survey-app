import mongoose, { Document, Model, Schema } from 'mongoose';

interface ISurvey extends Document {
  companyName: string;
  industry: string;
  numberOfEmployees: number;
  currentChallenges: string;
}

const SurveySchema: Schema = new mongoose.Schema({
  companyName: { type: String, required: true },
  industry: { type: String, required: true },
  numberOfEmployees: { type: Number, required: true },
  currentChallenges: { type: String, required: true },
});

const Survey: Model<ISurvey> = mongoose.models.Survey || mongoose.model<ISurvey>('Survey', SurveySchema);

export default Survey;