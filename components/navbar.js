"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

let tabs = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "thoughts", label: "Thoughts" },
];

export const Navbar = ()  => {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="flex space-x-1 backdrop-blur-[135px] bg-[#f4f2f2] gap-2 w-fit p-2 rounded-[20px]">
      <TabsList >
      {tabs.map((tab) => (
        <TabsTrigger key={tab.id} value={tab.id}>
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`${
            activeTab === tab.id ? "" : "hover:text-black/60"
          } relative rounded-[18px] p-3 px-4 text-md font-LufgaLight  outline-sky-400  transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 rounded-[18px] shadow-sm bg-slate-300 mix-blend-multiply"
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
