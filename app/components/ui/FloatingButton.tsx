"use client"

import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingButton() {


  return (
    <a href="#">
      <motion.div  initial={{ y: 100 }} animate={{ y: 0 }} className=" bg-blue-500 text-white size-10 rounded-full fixed bottom-20 md:bottom-10 right-10 flex justify-center items-center">
        <ArrowUp />
      </motion.div>
    </a>
  )
}
