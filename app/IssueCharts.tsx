"use client";
import { Card } from "@radix-ui/themes";
import React from "react";
import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar } from "recharts";
interface Props {
  open: number;
  inPorgress: number;
  closed: number;
}

const IssueCharts = ({ open, inPorgress, closed }: Props) => {
  const data: { label: string; value: number }[] = [
    {
      label: "Open Issues",
      value: open,
    },
    {
      label: "In-Progress Issues",
      value: inPorgress,
    },
    {
      label: "Closed Issues",
      value: closed,
    },
  ];
  return (
    <Card>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="label" />
          <YAxis />
          <Bar
            dataKey="value"
            barSize={60}
            style={{ fill: "var(--accent-9)" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default IssueCharts;
