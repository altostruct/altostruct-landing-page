import "react";
import { useState } from "react";
import "./styles.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const REQUEST_DURATION = 0.5;
const REQUEST_PER_MINUTE = 10;
const CPU_PER_USER = 0.05; // vCPU
const INSTANCE_SIZE = 4; // GB
const EC2_PRICE_PER_MONTH = 20;
const FARGATE_PRICE_PER_MONTH = 45;

function calculateLambdaCosts(users: number, minutes: number) {
  const costPerSecond = 0.0000666668;
  return Math.floor(
    users * minutes * REQUEST_PER_MINUTE * REQUEST_DURATION * costPerSecond
  );
}

function calculateEc2(users: number, minutes: number, maxUser: number) {
  const overlappingMinutes = Math.max(
    maxUser * REQUEST_DURATION,
    (minutes * users * REQUEST_DURATION) / (24 * 60)
  );
  const requiredCPU = overlappingMinutes * CPU_PER_USER;
  return Math.ceil(requiredCPU / INSTANCE_SIZE) * EC2_PRICE_PER_MONTH;
}

function calculateFargate(users: number, minutes: number) {
  const overlappingMinutes = Math.max(
    (minutes * users * REQUEST_DURATION) / (24 * 60)
  );
  const requiredCPU = overlappingMinutes * CPU_PER_USER;
  return Math.ceil(requiredCPU / INSTANCE_SIZE) * FARGATE_PRICE_PER_MONTH;
}

function formatMinutes(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;

  const minuteFormat = (m: number) => {
    if (m == 0) return undefined;
    if (m == 1) return "1 minute";
    if (m > 1) return `${m} minutes`;
  };

  const hourFormat = (h: number) => {
    if (h == 0) return undefined;
    if (h == 1) return "1 hour";
    if (h > 1) return `${h} hour`;
  };

  return [hourFormat(h), minuteFormat(m)].filter(Boolean).join(" and ");
}

export default function () {
  const [users, setUsers] = useState<number>(400);
  const [duration, setDuration] = useState<number>(100);
  const [maxUsers, setMaxUsers] = useState<number>(0);
  const minMaxUsers = 10;

  const ec2Cost = calculateEc2(users, duration, (maxUsers / 100) * users);
  const lambdaCost = calculateLambdaCosts(users, duration);
  const fargateCost = calculateFargate(users, duration);

  const labels = [
    `EC2(${ec2Cost}$)`,
    `Lambda(${lambdaCost}$)`,
    `Fargate(${fargateCost}$)`,
  ];

  const data: ChartData<"bar", number[], string> = {
    labels,

    datasets: [
      {
        label: "Cost(USD)",
        data: [
          calculateEc2(users, duration, (maxUsers / 100) * users),
          calculateLambdaCosts(users, duration),
          calculateFargate(users, duration),
        ],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>

      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Bar
          style={{
            height: "500px",
            width: "100%",
          }}
          options={options}
          data={data}
        />
      </div>
      <form style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p>Daily active users</p>
          <input
            value={users}
            onChange={(ev) => setUsers(ev.target.value as any)}
            min={25}
            step={25}
            max={5000}
            name="users"
            type="range"
          />
          <br />
          {users}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyItems: "center",
          }}
        >
          <p>Average user session</p>
          <input
            value={duration}
            onChange={(ev) => setDuration(ev.target.value as any)}
            step={10}
            min={0}
            max={12 * 60}
            name="time"
            type="range"
          />
          <br />
          {formatMinutes(duration)}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyItems: "center",
          }}
        >
          <p>% of users at one time</p>
          <input
            value={maxUsers}
            onChange={(ev) => setMaxUsers(ev.target.value as any)}
            step={10}
            min={0}
            max={100}
            name="time"
            type="range"
          />
          <br />
          {maxUsers || minMaxUsers}
        </div>
      </form>
    </>
  );
}
