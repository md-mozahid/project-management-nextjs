import { handleAddProject } from '@/app/actions'
import Label from './Label'

export default function AddProjectForm() {

  return (
    <>
      <div className="max-w-[600px] mx-auto">
        <h2 className="text-2xl uppercase text-center my-5">
          Add Project Details
        </h2>
        <form action={handleAddProject}>
          <div className="border border-[#111827] p-5 rounded-lg">
            <div className="">
              <Label>Project Name</Label>
              <input
                type="text"
                name="projectName"
                placeholder="Project name"
                className="inputElm"
              />
            </div>
            <div className="">
              <Label>Project Head</Label>
              <input
                type="text"
                name="projectHead"
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
                  placeholder="Site"
                  className="inputElm w-1/2"
                />
                <input
                  type="text"
                  name="manpowerFactory"
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
                  placeholder="Working time"
                  className="inputElm"
                />
              </div>
              <div className="w-1/2">
                <Label>Break Time</Label>
                <input
                  type="text"
                  name="breakTime"
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
                  placeholder="Over time"
                  className="inputElm"
                />
              </div>
              <div className="w-1/2">
                <Label>Off Day</Label>
                <input
                  type="text"
                  name="offDay"
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
                  placeholder="Start date"
                  className="inputElm"
                />
              </div>
              <div className="w-1/2">
                <Label>End Date</Label>
                <input
                  type="text"
                  name="endDate"
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
                placeholder="Remarks"
                className="inputElm"
                cols="30"
                rows="2"
              />
            </div>
            <button type='submit' className="btn btn-primary btn-fw mt-6">Add Project</button>
          </div>
        </form>
      </div>
    </>
  )
}
