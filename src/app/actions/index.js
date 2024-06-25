'use server'

import dbConnect from '@/services/mongo'

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

export async function handleDeleteProject(id) {
  // console.log('index id', id)
  try {
    await dbConnect()
    const response = await fetch(`${process.env.BASE_URL}/api/deleteProject`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id}),
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
