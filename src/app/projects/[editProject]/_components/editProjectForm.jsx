'use client'

import { useEffect, useState } from 'react'
import Label from './Label'

export default function EditProjectForm({ project }) {
  const [data, setData] = useState({
    projectName: '',
    projectHead: '',
    manpowerSite: '',
    manpowerFactory: '',
    workingTime: '',
    breakTime: '',
    overTime: '',
    offDay: '',
    startDate: '',
    endDate: '',
    remarks: '',
  })
  const handleUpdate = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    setData(project)
  }, [project])

  return (
    <>
      <div className="max-w-[600px] mx-auto">
        <h2 className="text-2xl uppercase text-center my-5">
          Edit Project Details
        </h2>
        <form onSubmit={handleUpdate}>
          <div className="border border-[#111827] p-5 rounded-lg">
            <div className="">
              <Label>Project Name</Label>
              <input
                type="text"
                name="projectName"
                value={data?.projectName}
                placeholder="Project name"
                className="inputElm"
              />
            </div>
            <div className="">
              <Label>Project Head</Label>
              <input
                type="text"
                name="projectHead"
                value={data?.projectHead}
                placeholder="Project head"
                className="inputElm"
              />
            </div>

            <div className="">
              <Label>Manpower</Label>
              <div className="flex space-x-3">
                <input
                  type="text"
                  name="manpowerSite"
                  value={data?.manpowerSite}
                  placeholder="Site"
                  className="inputElm w-1/2"
                />
                <input
                  type="text"
                  name="manpowerFactory"
                  value={data?.manpowerFactory}
                  placeholder="Factory"
                  className="inputElm w-1/2"
                />
              </div>
            </div>

            <div className="flex space-x-3">
              <div className="w-1/2">
                <Label>Working Time</Label>
                <input
                  type="text"
                  name="workingTime"
                  value={data?.workingTime}
                  placeholder="Working time"
                  className="inputElm"
                />
              </div>
              <div className="w-1/2">
                <Label>Break Time</Label>
                <input
                  type="text"
                  name="breakTime"
                  value={data?.breakTime}
                  placeholder="Break time"
                  className="inputElm"
                />
              </div>
            </div>

            <div className="flex space-x-3">
              <div className="w-1/2">
                <Label>Over Time</Label>
                <input
                  type="text"
                  name="overTime"
                  value={data?.overTime}
                  placeholder="Over time"
                  className="inputElm"
                />
              </div>
              <div className="w-1/2">
                <Label>Off Day</Label>
                <input
                  type="text"
                  name="offDay"
                  value={data?.offDay}
                  placeholder="Off day"
                  className="inputElm"
                />
              </div>
            </div>
            <div className="flex space-x-3">
              <div className="w-1/2">
                <Label>Start Date</Label>
                <input
                  type="text"
                  name="startDate"
                  value={data?.startDate}
                  placeholder="Start date"
                  className="inputElm"
                />
              </div>
              <div className="w-1/2">
                <Label>End Date</Label>
                <input
                  type="text"
                  name="endDate"
                  value={data?.endDate}
                  placeholder="End date"
                  className="inputElm"
                />
              </div>
            </div>
            <div className="">
              <Label>Remarks</Label>
              <textarea
                type="text"
                name="remarks"
                value={data?.remarks}
                placeholder="Remarks"
                className="inputElm"
                cols="30"
                rows="2"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-fw mt-6">
              Update Project
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
