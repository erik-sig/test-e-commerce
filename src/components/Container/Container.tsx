import { ReactNode } from "react";

export const Container = ({ children }: { children: ReactNode }) => {
  return <div className='w-full max-w-screen-lg m-auto'>{children}</div>;
};
