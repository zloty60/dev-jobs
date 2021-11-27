import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export function JobOfferCardSkeleton() {
  return (
    <Card>
      <Box sx={{ padding: "20px" }}>
        <Stack spacing={1}>
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            sx={{ marginBottom: 2 }}
          />
          <Skeleton variant="rectangular" width="100%" height={30} />
          <Skeleton variant="rectangular" width="100%" height={30} />
          <Skeleton variant="rectangular" width="100%" height={30} />
          <Skeleton variant="rectangular" width="100%" height={30} />
        </Stack>
      </Box>
    </Card>
  );
}
