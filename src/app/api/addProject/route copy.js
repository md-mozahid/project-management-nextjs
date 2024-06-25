import { ProjectModel } from '@/models/project-model'
import dbConnect from '@/services/mongo'
import { NextResponse } from 'next/server'
import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'

export async function POST(request) {
  await dbConnect()
  const {
    projectName,
    projectHead,
    manpowerFactory,
    manpowerSite,
    workingTime,
    breakTime,
    offDay,
    overTime,
    startDate,
    endDate,
    remarks,
  } = await request.json()

  const newProject = {
    projectName,
    projectHead,
    manpowerFactory,
    manpowerSite,
    workingTime,
    breakTime,
    offDay,
    overTime,
    startDate,
    endDate,
    remarks,
  }
  try {
    await ProjectModel.create(newProject)
    redirect('/')
    return new NextResponse('Project has been created', {
      status: 201,
    })
  } catch (error) {
    console.log(error)
    return new NextResponse(error.message, {
      status: 500,
    })
  }
}
