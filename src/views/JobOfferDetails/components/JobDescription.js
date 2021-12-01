import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export function JobDescription({ jobTitle, jobDescription }) {
  return (
    <Card>
      <Box
        sx={{
          paddingTop: 5,
          paddingBottom: 5,
          paddingLeft: 4,
          paddingRight: 4,
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          sx={{
            textTransform: "capitalize",
            fontSize: { xs: "18px", md: "20px" },
          }}
        >
          {jobTitle}
        </Typography>
        <Typography variant="body1">{jobDescription}</Typography>
      </Box>
    </Card>
  );
}
