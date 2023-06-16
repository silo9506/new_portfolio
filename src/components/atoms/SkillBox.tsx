import React, { ReactNode } from "react";

interface SkillBoxProps {
  children: string;
}

export default function SkillBox({ children }: SkillBoxProps) {
  return (
    <li className="p-2 bg-[#313131] rounded shadow-inner m-1 cursor-pointer list-none">
      {children}
    </li>
  );
}
