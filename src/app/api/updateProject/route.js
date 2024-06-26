export const dynamic = "force-dynamic";
import { ProjectModel } from "@/models/project-model";
import dbConnect from "@/services/mongo";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request) {
  await dbConnect();
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
    projectId,
  } = await request.json();

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
  };
  try {
    // update
    await ProjectModel.updateOne({ _id: projectId.toString() }, newProject);
    revalidatePath("/projects");
    return new NextResponse("Project has been updated", {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse(error.message, {
      status: 500,
    });
  }
}
