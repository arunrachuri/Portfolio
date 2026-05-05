import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  Cell,
  PieChart,
  Pie,
} from "recharts";
import { useTheme } from "./ThemeContext";

const data1 = [
  { name: "A", uv: 4000, pv: 2400 },
  { name: "B", uv: 3000, pv: 1398 },
  { name: "C", uv: 2000, pv: 9800 },
  { name: "D", uv: 2780, pv: 3908 },
  { name: "E", uv: 1890, pv: 4800 },
  { name: "F", uv: 2390, pv: 3800 },
  { name: "G", uv: 3490, pv: 4300 },
];

const data2 = [{ value: 400 }, { value: 300 }, { value: 300 }, { value: 200 }];

export function ProjectVisual1() {
  const { theme } = useTheme();
  const color = theme === "dark" ? "#06b6d4" : "#0284c7"; // accent var

  return (
    <div className="w-full h-full p-4 pointer-events-none opacity-80">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data1}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.8} />
              <stop offset="95%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="uv"
            stroke={color}
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ProjectVisual2() {
  const { theme } = useTheme();
  const color = theme === "dark" ? "#8e9299" : "#94a3b8";
  const colorAccent = theme === "dark" ? "#06b6d4" : "#0284c7";

  return (
    <div className="w-full h-full p-6 pointer-events-none opacity-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data1}>
          <Bar dataKey="pv" radius={[4, 4, 0, 0]}>
            {data1.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={index === 2 ? colorAccent : color}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ProjectVisual3() {
  const { theme } = useTheme();
  const color = theme === "dark" ? "#06b6d4" : "#0284c7";

  return (
    <div className="w-full h-full p-4 pointer-events-none opacity-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data1}>
          <Line
            type="step"
            dataKey="uv"
            stroke={color}
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#a855f7"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ProjectVisual4() {
  const { theme } = useTheme();
  const COLORS =
    theme === "dark"
      ? ["#06b6d4", "#1a1a1a", "#3f3f46", "#71717a"]
      : ["#0284c7", "#e2e8f0", "#cbd5e1", "#94a3b8"];

  return (
    <div className="w-full h-full p-4 pointer-events-none opacity-80">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data2}
            innerRadius={40}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
            stroke="none"
          >
            {data2.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ProjectVisual5() {
  const { theme } = useTheme();
  const color1 = theme === "dark" ? "#06b6d4" : "#0284c7";
  const color2 = theme === "dark" ? "#3f3f46" : "#cbd5e1";

  return (
    <div className="w-full h-full p-6 pointer-events-none opacity-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data1}>
          <Bar dataKey="uv" stackId="a" fill={color1} />
          <Bar dataKey="pv" stackId="a" fill={color2} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
