"use client"
import { AnimatePresence } from "framer-motion";

export default function ScrollToSection({children}:{children?:any}) {
     const handleExitComplete = () => {
       if (typeof window !== "undefined") {
         const hashId = window.location.hash;
         const element = document.querySelector(hashId);
         if (element) {
           element.scrollIntoView({
             behavior: "smooth",
             block: "start",
             inline: "nearest",
           });
         }
       }
     };
  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={handleExitComplete}
    >
{children}
    </AnimatePresence>
  );
}
