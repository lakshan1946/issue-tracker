import { Button, Link } from "@radix-ui/themes";
import React from "react";
import { Pencil2Icon } from "@radix-ui/react-icons";

interface Props {
  issueID: number;
}

const EditIssueButton = ({ issueID }: Props) => {
  return (
    <Button>
      <Pencil2Icon />
      <Link href={`/issues/edit/${issueID}`}>Edit Issue</Link>
    </Button>
  );
};

export default EditIssueButton;
