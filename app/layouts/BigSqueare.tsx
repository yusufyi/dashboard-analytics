import React from "react";

const BigSqueare = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-slate-100  h-80 flex-1 rounded-2xl p-2 m-4">
      {children}
    </div>
  );
};

export default BigSqueare;
