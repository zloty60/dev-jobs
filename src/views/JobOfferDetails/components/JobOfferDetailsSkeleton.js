import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Skeleton from "@mui/material/Skeleton";

import { JobOfferCardSkeleton } from "../../../components/jobOfferCard/JobOfferCardSkeleton";

export function JobOfferDetailsSkeleton() {
  return (
    <Container maxWidth="md">
      <JobOfferCardSkeleton />
      <Card sx={{ marginTop: 4 }}>
        <Box
          sx={{
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 4,
            paddingRight: 4,
          }}
        >
          <Skeleton height="32px" width="60%" />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </Box>
      </Card>
    </Container>
  );
}
