"use client";
import { motion } from "framer-motion";


import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const diversionStats = [
  { state: "Arkansas", diverted: 32, custody: 12 },
  { state: "Texas", diverted: 56, custody: 10 },
  { state: "Missouri", diverted: 40, custody: 15 },
  { state: "Louisiana", diverted: 28, custody: 20 },
  { state: "Oklahoma", diverted: 35, custody: 14 },
  { state: "Mississippi", diverted: 22, custody: 18 },
  { state: "Tennessee", diverted: 30, custody: 8 },
];

export default function DiversionChart() {
  return (
    <div className="bg-white p-4 rounded shadow border border-slate-200">
      <h3 className="text-blue-800 font-semibold mb-3 text-lg">
        ⚖️ Diversion vs Custody by State
      </h3>
      <motion.div>
        <ResponsiveContainer width="100%" height={300}>
        <BarChart data={diversionStats}>
          <XAxis dataKey="state" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="diverted" fill="#38bdf8" name="Diversion" />
          <Bar dataKey="custody" fill="#f87171" name="Custody" />
        </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
}
