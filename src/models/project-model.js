import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema({
  projectName: {
    type: String,
    required: true,
  },
  manpowerSite: {
    type: String,
    required: false,
  },
  manpowerFactory: {
    type: String,
    required: false,
  },
  projectHead: {
    type: String,
    required: true,
  },
  workingTime: {
    type: String,
    required: false,
  },
  breakTime: {
    type: String,
    required: false,
  },
  overTime: {
    type: String,
    required: false,
  },
  offDay: {
    type: String,
    required: false,
  },
  startDate: {
    type: String,
    required: false,
  },
  endDate: {
    type: String,
    required: false,
  },
  remarks: {
    type: String,
    required: false,
  },
});

export const ProjectModel =
  mongoose.models.Project ?? mongoose.model("Project", projectSchema);
