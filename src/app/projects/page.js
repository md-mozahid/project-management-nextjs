import ProjectList from "./_components/ProjectList";

export default function Projects() {
  return (
    <>
      <div className="">
        <h1 className="text-left md:text-center md:text-3xl font-bold md:py-7 py-5 uppercase">
          Project List
        </h1>
        <div className="flex justify-center">
          <ProjectList />
        </div>
      </div>
    </>
  );
}
