import Link from "next/link";
import TableTd from "./td";

export default function Project({ project = {} }) {
  const {
    id,
    projectName = "BOF",
    manpowerSite,
    manpowerFactory,
    projectHead,
    workingTime,
    breakTime,
    totalOverTime,
    offDay,
    startDate,
    endDate,
    remarks,
  } = project;

  return (
    <>
      <tr className="bg-slate-600 even:bg-slate-700 hover:bg-slate-800">
        <TableTd>
          <Link href="#">
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
        <TableTd>
          <p>{breakTime}</p>
        </TableTd>
        <TableTd>
          <Link href="#">
            <p>{totalOverTime}</p>
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
