import Card from "@mui/material/Card";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

export function JobOfferCardSkeleton() {
  return (
    <Card sx={{ padding: "20px" }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Skeleton variant="rectangular" width="90%" height={50} />
        </Grid>
        <Grid item xs={9}>
          <Stack spacing={1}>
            <Skeleton variant="rectangular" width="100%" height={30} />
            <Skeleton variant="rectangular" width="100%" height={30} />
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
}
