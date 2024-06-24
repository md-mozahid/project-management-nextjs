import Link from "next/link";
import TableTd from "./td";

export default function Project({ project = {} }) {
  const {
    id,
    projectName,
    manpowerSite,
    manpowerFactory,
    projectHead,
    workingTime,
    breakTime,
    overTime,
    offDay,
    startDate,
    endDate,
    remarks,
  } = project;

  return (
    <>
      <tr className="bg-slate-600 text-white even:bg-slate-700 hover:bg-slate-800">
        <TableTd>
          <Link href={`/projects/${id}`}>
            <p className="cursor-pointer">{projectName}</p>
          </Link>
        </TableTd>
        <TableTd className="md:w-20 w-auto">
          <Link href="#">
            <p>{manpowerSite}</p>
          </Link>
        </TableTd>
        <TableTd>
          <p>{manpowerFactory}</p>
        </TableTd>
        <TableTd>
          <p>{projectHead}</p>
        </TableTd>
        <TableTd>
          <p>{workingTime}</p>
        </TableTd>
        {/* <TableTd>
          <p>{breakTime}</p>
        </TableTd> */}
        <TableTd>
          <Link href="#">
            <p>{overTime}</p>
          </Link>
        </TableTd>
        <TableTd>
          <p>{offDay}</p>
        </TableTd>
        <TableTd>
          <p>{startDate}</p>
        </TableTd>
        <TableTd>
          <p>{endDate}</p>
        </TableTd>
        <TableTd>
          <p>{remarks}</p>
        </TableTd>
      </tr>
    </>
  );
}
