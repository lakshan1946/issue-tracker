"use client";
import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const statuses: { label: string; value?: Status }[] = [
  {
    label: "All",
  },
  {
    label: "Open",
    value: "OPEN",
  },
  {
    label: "In Progress",
    value: "IN_PROGRESS",
  },
  {
    label: "Closed",
    value: "CLOSED",
  },
];

const IssueStatusFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <Select.Root
      defaultValue={searchParams.get("status") || "ALL"}
      onValueChange={(status) => {
        const params = new URLSearchParams(searchParams); // Clone current searchParams

        if (status) {
          params.set("status", status); // Set or replace status
        } else {
          params.delete("status"); // If no status, remove it from params
        }

        // Keep orderBy if it exists in the current params
        if (searchParams.get("orderBy")) {
          params.set("orderBy", searchParams.get("orderBy")!);
        }

        const query = params.toString() ? `?${params.toString()}` : "";
        console.log(query); // Debugging the query string

        router.push("/issues/list" + query);
      }}
    >
      <Select.Trigger placeholder="Filter by status.." />
      <Select.Content>
        {statuses.map((status) => (
          <Select.Item key={status.value} value={status.value || "ALL"}>
            {status.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusFilter;
