import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";

export function JobOfferSkeleton() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Skeleton
          sx={{ marginTop: 2, borderRadius: "4px" }}
          variant="rectangular"
          width="100%"
          height={56}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Skeleton
          sx={{ borderRadius: "4px" }}
          variant="rectangular"
          width="100%"
          height={56}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Skeleton
          sx={{ borderRadius: "4px" }}
          variant="rectangular"
          width="100%"
          height={56}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Skeleton
          sx={{ borderRadius: "4px" }}
          variant="rectangular"
          width="100%"
          height={56}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Skeleton
          sx={{ borderRadius: "4px" }}
          variant="rectangular"
          width="100%"
          height={56}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Skeleton
          sx={{ borderRadius: "4px" }}
          variant="rectangular"
          width="100%"
          height={56}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Skeleton
          sx={{ borderRadius: "4px" }}
          variant="rectangular"
          width="100%"
          height={56}
        />
      </Grid>
    </Grid>
  );
}
