import { ProjectModel } from '@/models/project-model'
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from '@/utils/convertData'

export async function getAllProjects() {
  const projects = await ProjectModel.find().lean()
  return replaceMongoIdInArray(projects)
}

export async function getSingleProject(id) {
  const project = await ProjectModel.findById(id).lean()
  return replaceMongoIdInObject(project)
}
