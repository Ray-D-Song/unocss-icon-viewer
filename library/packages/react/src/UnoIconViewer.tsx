"use client";
import * as React from "react";

export interface UnoIconViewerProps {
  icon: string;
  setIcon: (icon: string) => void;
}

import "virtual:uno.css";
import { icons } from "@iconify-json/fe/index";

function UnoIconViewer(props: UnoIconViewerProps) {
  return (
    <div className="dark:bg-[#181818] bg-[#ffffff] w-full h-40 rounded-lg overflow-y-scroll">
      <div className="grid grid-cols-6 gap-4">
        {Object.keys(icons.icons)
          .slice(0, 40)
          ?.map((item) => (
            <div
              className="flex flex-col items-center justify-center cursor-pointer p-4px dark:hover:bg-[#2A2A2A] hover:bg-[#EBEAEA]"
              key={item}
              onClick={(event) => props.setIcon(item)}
            >
              <div className={`mb-2px i-${icons.prefix}-${item}`} />
              <div className="text-xs text-center">{item}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default UnoIconViewer;
