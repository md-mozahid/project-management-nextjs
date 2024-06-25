'use server'

import { signIn } from '../../../auth'
import dbConnect from '@/services/mongo'

// login
export async function Login(formData) {
  // console.log(formData)
  try {
    const response = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    })
    return response
  } catch (error) {
    throw new Error(error.message)
  }
}

// social login
export async function doSocialLogin(formData) {
  const action = formData.get('action')
  await signIn(action, { redirectTo: '/' })
}

// add new project
export async function handleAddProject(formData, id) {
  try {
    const projectName = formData.get('projectName')
    const projectHead = formData.get('projectHead')
    const manpowerSite = formData.get('manpowerSite')
    const manpowerFactory = formData.get('manpowerFactory')
    const workingTime = formData.get('workingTime')
    const breakTime = formData.get('breakTime')
    const overTime = formData.get('overTime')
    const offDay = formData.get('offDay')
    const startDate = formData.get('startDate')
    const endDate = formData.get('endDate')
    const remarks = formData.get('remarks')
    const projectId = id

    const response = await fetch(`${process.env.BASE_URL}/api/addProject`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
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
        projectId,
      }),
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

// update project
export async function handleUpdateProject(formData, id) {
  try {
    const projectName = formData.get('projectName')
    const projectHead = formData.get('projectHead')
    const manpowerSite = formData.get('manpowerSite')
    const manpowerFactory = formData.get('manpowerFactory')
    const workingTime = formData.get('workingTime')
    const breakTime = formData.get('breakTime')
    const overTime = formData.get('overTime')
    const offDay = formData.get('offDay')
    const startDate = formData.get('startDate')
    const endDate = formData.get('endDate')
    const remarks = formData.get('remarks')
    const projectId = id

    const response = await fetch(`${process.env.BASE_URL}/api/updateProject`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
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
        projectId,
      }),
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

// delete project
export async function handleDeleteProject(id) {
  // console.log('index id', id)
  try {
    await dbConnect()
    const response = await fetch(`${process.env.BASE_URL}/api/deleteProject`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
