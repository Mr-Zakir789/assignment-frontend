import { useForm } from "react-hook-form";
import {
  TextField,
  MenuItem,
  Button,
  Grid,
  Typography,
  Slider,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
const jobTypes = ["Full-time", "Part-time", "Contract", "Internship"];

interface JobDialogProps {
  open: boolean;
  onClose: () => void;
  handleJobCreation?: (jobData: any) => void; // Make handleJobCreation optional
}

export const JobCreationForm = ({open,onClose,handleJobCreation}:JobDialogProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm({
    defaultValues: {
      jobTitle: "",
      companyName: "",
      location: "",
      jobType: "",
      salaryRange: [0, 1200000],
      jobDescription: "",
      requirements: "",
      responsibilities: "",
      applicationDeadline: null,
    },
  });

  const onSubmit = (data) => {
    const formattedData = {
      jobTitle: data.jobTitle, // Correct: jobTitle
      companyName: data.companyName, // Correct: companyName
      location: data.location,
      jobType: data.jobType, // Correct: jobType
      salaryRange: data.salaryRange.join(" - "), // Correct: salaryRange
      jobDescription: data.jobDescription, // Correct: jobDescription
      requirements: data.requirements,
      responsibilities: data.responsibilities,
      applicationDeadline: (data.applicationDeadline).format('YYYY-MM-DD') // Correct: applicationDeadline
    };
    console.log("Form Data:", formattedData);
    if (handleJobCreation) { // Only call if it exists
        handleJobCreation(formattedData);
      }
    reset();
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5" align="center">Create Job Opening</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Job Title"
            fullWidth
            {...register("jobTitle", { required: "Job title is required" })}
            error={!!errors.jobTitle}
            helperText={errors.jobTitle?.message}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Company Name"
            fullWidth
            {...register("companyName", { required: "Company name is required" })}
            error={!!errors.companyName}
            helperText={errors.companyName?.message}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Location"
            fullWidth
            {...register("location", { required: "Location is required" })}
            error={!!errors.location}
            helperText={errors.location?.message}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Job Type"
            select
            fullWidth
            {...register("jobType", { required: "Job type is required" })}
            error={!!errors.jobType}
            helperText={errors.jobType?.message}
          >
            {jobTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography gutterBottom>Salary Range</Typography>
          <Slider
  value={watch("salaryRange") as number[]}
  onChange={(_, newValue) => setValue("salaryRange", newValue as number[])}
  valueLabelDisplay="auto"
  min={0}
  max={2000000}
  step={50000}
/>
        </Grid>
        <Grid item xs={12} sm={6}>
        <DatePicker
  label="Application Deadline"
  value={watch("applicationDeadline") || null}
  onChange={(date) => setValue("applicationDeadline", date || null)}
/>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Job Description"
            multiline
            rows={4}
            fullWidth
            {...register("jobDescription", { required: "Job description is required" })}
            error={!!errors.jobDescription}
            helperText={errors.jobDescription?.message}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Requirements"
            multiline
            rows={4}
            fullWidth
            {...register("requirements")}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Responsibilities"
            multiline
            rows={4}
            fullWidth
            {...register("responsibilities")}
          />
        </Grid>



        <Grid item xs={12} sx={{display:'flex',justifyContent:'space-between'}}>
        <Button type="button" variant="outlined" sx={{ ml: 2, mr:2, color:"black"}}>
            Save Draft
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Publish
          </Button>
        </Grid>
      </Grid>
    </form>
    </DialogContent>
    </Dialog>
    </LocalizationProvider>
  );
};
