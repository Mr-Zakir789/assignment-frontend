import { Box, Grid, Typography, Button, Avatar } from "@mui/material";

interface JobCardProps {
  logo: string;
  companyName: string;
  timeAgo: string;
  title: string;
  experience: string;
  location: string;
  packageIcon: string;
  jobTypeIcon: string;
  onSiteIcon: string;
  salary: string;
  description: string[];
  onApply: () => void;
}

export const JobCard = ({
  logo,
  companyName,
  timeAgo,
  title,
  experience,
  location,
  salary,
  packageIcon,
  onSiteIcon,
  jobTypeIcon,
  description,
  onApply
}: JobCardProps) => {
  return (
    <Box
      sx={{
        maxWidth: 350,
        p: 2,
        borderRadius: 3,
        boxShadow: 3,
        bgcolor: "white",
      }}
    >
      <Grid container justifyContent="space-between" alignItems="center">
        <Avatar src={logo} alt="Company Logo" sx={{ width: 48, height: 48 }} />
        <Box sx={{ backgroundColor: "#B0D9FF", borderRadius: "10px", padding: 1 }}>
          <Typography variant="body2">{timeAgo}</Typography>
        </Box>
      </Grid>

      <Typography variant="h5" fontWeight="bold" mt={1}>
        {title}
      </Typography>

      <Grid container spacing={0.5} mt={1} color="gray">
        <Grid item xs={4} display="flex" alignItems="center">
          <img src={jobTypeIcon} alt="Experience Icon" width="18" height="18" style={{ marginRight: "6px" }} />
          <Typography variant="body2">{experience}</Typography>
        </Grid>

        <Grid item xs={4} display="flex" alignItems="center">
          <img src={onSiteIcon} alt="Location Icon" width="18" height="18" style={{ marginRight: "6px" }} />
          <Typography variant="body2">{location}</Typography>
        </Grid>

        <Grid item xs={4} display="flex" alignItems="center">
          <img src={packageIcon} alt="Salary Icon" width="18" height="18" style={{ marginRight: "6px" }} />
          <Typography variant="body2">{salary}</Typography>
        </Grid>
      </Grid>

      <Box mt={2} color="gray">
        {description.map((desc, index) => (
          <Typography key={index} variant="body2" sx={{ mb: 1 }}>
            • {desc}
          </Typography>
        ))}
      </Box>

      <Button
        variant="contained"
        fullWidth
        onClick={() => {
          console.log("Apply Now button clicked");
          onApply();
        }}
        sx={{ mt: 2, borderRadius: 2, bgcolor: "#00AAFF", p: 1.5 }}
      >
        Apply Now
      </Button>
    </Box>
  );
};

export default JobCard;
