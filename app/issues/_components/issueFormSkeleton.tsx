import { Box } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const issueFormSkeleton = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton height="2rem" className="mb-2" />
      <Skeleton height="23rem" className="mb-5" />
      <Skeleton width="9rem" height="2rem" />
    </Box>
  );
};

export default issueFormSkeleton;
