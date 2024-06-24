const Label = ({ children, className }) => {
  return (
    <>
      <label className={` text-slate-700 ${className}`}>{children}</label>
    </>
  );
};

export default Label;
