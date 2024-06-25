import { ProjectModel } from '@/models/project-model'
import dbConnect from '@/services/mongo'
import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

export async function DELETE(request) {
  const { id } = await request.json()
//   console.log('id', id)

  try {
    await dbConnect()
    await ProjectModel.deleteOne({ _id: id })
    revalidatePath('/projects')
    return new NextResponse('Project has been delete successfully', {
      status: 200,
    })
  } catch (error) {
    console.log(error)
    return new NextResponse(error.message, {
      status: 500,
    })
  }
}
