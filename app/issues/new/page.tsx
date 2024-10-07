import dynamic from "next/dynamic";
import IssueFormSkeleton from "../_components/issueFormSkeleton"; // Capitalized

const IssueForm = dynamic(() => import("@/app/issues/_components/issueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />, // Capitalized
});

const NewIssuePage = () => {
  return <IssueForm />;
};

export default NewIssuePage;
