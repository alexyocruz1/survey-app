import mongoose, { Document, Model, Schema } from 'mongoose';

interface ISchedule extends Document {
  name: string;
  email: string;
  preferredDate: Date;
}

const ScheduleSchema: Schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  preferredDate: { type: Date, required: true },
});

const Schedule: Model<ISchedule> = mongoose.models.Schedule || mongoose.model<ISchedule>('Schedule', ScheduleSchema);

export default Schedule;