import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ContactButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  label: string;
  subLabel?: string;
  href: string;
  delay?: number;
}

export function ContactButton({ 
  icon, 
  label, 
  subLabel, 
  href, 
  className, 
  delay = 0,
  ...props 
}: ContactButtonProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className={cn(
        "group relative flex items-center w-full p-4 rounded-xl",
        "bg-white border border-slate-100",
        "shadow-sm hover:shadow-md hover:border-slate-200",
        "transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0",
        className
      )}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-600 group-hover:bg-slate-100 group-hover:text-slate-900 transition-colors">
        {icon}
      </div>
      
      <div className="ml-4 flex flex-col items-start">
        <span className="font-medium text-slate-900 text-sm md:text-base">
          {label}
        </span>
        {subLabel && (
          <span className="text-xs text-slate-500 font-normal mt-0.5 truncate max-w-[200px]">
            {subLabel}
          </span>
        )}
      </div>

      <div className="ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-slate-400">
        →
      </div>
    </motion.a>
  );
}
