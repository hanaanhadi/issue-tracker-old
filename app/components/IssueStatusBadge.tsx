import { Status, Issue } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import React from "react";

interface props {
  status: Status;
}

const statusMap: Record<
  Status,
  { label: string; color: "red" | "violet" | "green" }
> = {
  OPEN: { label: "Open", color: "red" },
  IN_PROGRESS: { label: "In Progress", color: "violet" },
  CLOSED: { label: "Closed", color: "green" },
};
const IssueStatusBadge = ({ status }: props) => {
  return (
    <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  );
};
export default IssueStatusBadge;
