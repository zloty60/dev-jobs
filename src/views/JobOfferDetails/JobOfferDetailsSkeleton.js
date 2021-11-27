import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export function JobOfferDetailsSkeleton() {
  return (
    <Container maxWidth="md">
      <Card>
        <Box
          sx={{
            paddingTop: 4,
            paddingBottom: 4,
            paddingLeft: 2,
            paddingRight: 3,
          }}
        >
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sm={3}
              sx={{
                display: "flex",
                alignItems: { xs: "normal", sm: "center" },
                justifyContent: { xs: "initial", sm: "center" },
              }}
            >
              <Skeleton variant="rectangular" width={100} height={35} />
            </Grid>
            <Grid item xs={12} sm={9}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  justifyContent: { xs: "initial", md: "space-between" },
                  alignItems: { xs: "initial", md: "center" },
                }}
              >
                <Box>
                  <Skeleton variant="rectangular" width={200} height={38} />
                  <Stack direction="row" spacing={1} sx={{ marginTop: "10px" }}>
                    <Skeleton variant="rectangular" width={90} height={32} />
                    <Skeleton variant="rectangular" width={90} height={32} />
                    <Skeleton variant="rectangular" width={90} height={32} />
                  </Stack>
                </Box>
                <Skeleton
                  sx={{
                    marginTop: { xs: "10px", md: "0px" },
                  }}
                  variant="rectangular"
                  width={120}
                  height={32}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Card>
      <Card sx={{ marginTop: 4 }}>
        <Box
          sx={{
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 4,
            paddingRight: 4,
          }}
        >
          <Skeleton height="40px" width="60%" />
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
