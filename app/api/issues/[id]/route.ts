import authOptions from "@/app/auth/authOptions";
import { PatchIssueSchema } from "@/app/validationschema";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: {
    id: string;
  };
}

//update the issue
export async function PATCH(req: NextRequest, { params }: Props) {
  // const session = await getServerSession(authOptions);

  // if (!session) {
  //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  // }
  const body = await req.json();
  const validation = PatchIssueSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }
  const { assignedToUSerId, title, description } = body;

  if (assignedToUSerId) {
    const user = await prisma.user.findUnique({
      where: {
        id: assignedToUSerId,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
  }
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!issue) {
    return NextResponse.json({ error: "Issue not found" }, { status: 404 });
  }

  const updatedIssue = await prisma.issue.update({
    where: {
      id: issue.id,
    },
    data: {
      title,
      description,
      assignedToUSerId,
    },
  });

  return NextResponse.json(updatedIssue);
}

//delete the issue
export async function DELETE(req: NextRequest, { params }: Props) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!issue) {
    return NextResponse.json({ error: "Issue not found" }, { status: 404 });
  }

  await prisma.issue.delete({
    where: {
      id: parseInt(params.id),
    },
  });

  return NextResponse.json({ message: "Issue deleted" });
}
