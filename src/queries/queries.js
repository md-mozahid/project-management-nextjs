import { ProjectModel } from "@/models/project-model";
import { replaceMongoIdInArray } from "@/utils/convertData";

export async function getAllProjects() {
  const projects = await ProjectModel.find().lean();
  return replaceMongoIdInArray(projects);
}
