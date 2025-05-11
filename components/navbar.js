"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

let tabs = [
  // { id: "about", label: "About" },
  { id: "work", label: "Work" },
  // { id: "thoughts", label: "Thoughts" },
];

export const Navbar = ()  => {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="flex space-x-1 shrink-0 bg-[#f4f2f2]/96 backdrop-blur-[15px] border-2 border-grey-600 z-[100] [filter:drop-shadow(0_16px_20px_rgba(0,0,0,0.1))] w-[160px] gap-2 items-center justify-center p-1 px-4 rounded-[20px]">
      <TabsList  className="shrink-0">
      {tabs.map((tab) => (
        <TabsTrigger key={tab.id} value={tab.id}>
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`${
            activeTab === tab.id ? "" : "hover:text-black/60"
          } relative rounded-[18px] p-2  px-4 text-sm font-Copernicus2 transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-[100] rounded-[18px]  shadow-sm bg-[#d2a999] mix-blend-multiply"
            //   style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
            />
          )}
          {tab.label}
        </button>
        </TabsTrigger>
      ))}
      </TabsList>
    </div>
  );
}
