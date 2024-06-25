import { getSingleProject } from '@/queries/queries'
import EditProjectForm from './_components/editProjectForm'

export default async function EditProjects({ params: { editProject } }) {
  const id = editProject
  const project = await getSingleProject(id)
//   console.log(project)
  return (
    <>
      <EditProjectForm project={project} id={id} />
    </>
  )
}
