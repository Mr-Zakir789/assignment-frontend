// import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid } from "@mui/material";
// import JobCard from "../components/jobCard";
// import { Navbar } from "../components/navBar";
// import { FilterBar } from "../components/filterBar";
// import { useEffect, useState } from "react";
// import { JobCreationForm } from "../components/jobCreationForm";
// import axios from "axios";

// export const Home = () => {
//   const [open, setOpen] = useState(false);
//   const [jobs, setJobs] = useState([]);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   useEffect(() => {
//     const fetchJobs = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/jobs'); // Adjust URL if needed
//             setJobs(response.data);
//         } catch (error) {
//             console.error('Error fetching jobs', error);
//         }
//     };
//     fetchJobs();
// }, []);
// const handleJobCreation = async (jobData) => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/jobs', jobData);
//       console.log('Job created successfully:', response.data);
//       // Optionally, update the jobs state to include the new job
//       setJobs([...jobs, response.data]);
//       // Close the form after successful creation
//       handleClose();
//     } catch (error) {
//       console.error('Error creating job', error);
//     }
//   };

//   return (
//     <><Box sx={{borderRadius:5,display:"flex",justifyContent:"center"}} >
//       <Navbar onOpenCreate={handleOpen} />
//     </Box>
//     <Box sx={{m:2}}>
//       <FilterBar/>
//     </Box>
//     <Grid container spacing={2} justifyContent="center">
//         <Grid item xs={12} sm={6} md={3}>
//           <JobCard
//             logo={"/assets/amazonLogo.svg"}
//             timeAgo={"24h Ago"}
//             title={"Full Stack Developer"}
//             experience={"1-3yr Exp"}
//             location={"Onsite"}
//             salary={"12 Lpa"}
//             icon={"/assets/personIcon.svg"}
//             description={["A user-friendly interface lets you browse stunning photos and videos", "Filter destinations based on interests and travel style, and create personalized itineraries"]} onApply={handleOpen}/>
//         </Grid>

//         <Grid item xs={12} sm={6} md={3}>
//           <JobCard
//             logo={"/assets/teslaLogo.svg"}
//             timeAgo={"24h Ago"}
//             title={"Node Js Developer"}
//             experience={"1-3 yr Exp"}
//             location={"Onsite"}
//             salary={"12 Lpa"}
//             icon={"/assets/personIcon.svg"}
//             description={["A user-friendly interface lets you browse stunning photos and videos", "Filter destinations based on interests and travel style, and create personalized itineraries"]} onApply={handleOpen}/>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <JobCard
//             logo={"/assets/swiggyLogo.svg"}
//             timeAgo={"24h Ago"}
//             title={"UX/UI Designer"}
//             experience={"1-3 yr Exp"}
//             location={"Onsite"}
//             salary={"12 Lpa"}
//             icon={"/assets/personIcon.svg"}
//             description={["A user-friendly interface lets you browse stunning photos and videos", "Filter destinations based on interests and travel style, and create personalized itineraries"]} onApply={handleOpen}/>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <JobCard
//             logo={"/assets/amazonLogo.svg"}
//             timeAgo={"24h Ago"}
//             title={"Full Stack Developer"}
//             experience={"1-3yr Exp"}
//             location={"Onsite"}
//             salary={"12 Lpa"}
//             description={["A user-friendly interface lets you browse stunning photos and videos", "Filter destinations based on interests and travel style, and create personalized itineraries"]} icon={"/assets/personIcon.svg"} onApply={handleOpen}/>
//         </Grid>

//         <Grid item xs={12} sm={6} md={3}>
//           <JobCard
//             logo={"/assets/teslaLogo.svg"}
//             timeAgo={"24h Ago"}
//             title={"Node Js Developer"}
//             experience={"1-3 yr Exp"}
//             location={"Onsite"}
//             salary={"12 Lpa"}
//             icon={"/assets/personIcon.svg"}
//             description={["A user-friendly interface lets you browse stunning photos and videos", "Filter destinations based on interests and travel style, and create personalized itineraries"]} onApply={handleOpen}/>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <JobCard
//             logo={"/assets/swiggyLogo.svg"}
//             timeAgo={"24h Ago"}
//             title={"UX/UI Designer"}
//             experience={"1-3 yr Exp"}
//             location={"Onsite"}
//             salary={"12 Lpa"}
//             icon={"/assets/personIcon.svg"}
//             description={["A user-friendly interface lets you browse stunning photos and videos", "Filter destinations based on interests and travel style, and create personalized itineraries"]} onApply={handleOpen}/>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <JobCard
//             logo={"/assets/amazonLogo.svg"}
//             timeAgo={"24h Ago"}
//             title={"Full Stack Developer"}
//             experience={"1-3yr Exp"}
//             location={"Onsite"}
//             salary={"12 Lpa"}
//             icon={"/assets/personIcon.svg"}
//             description={["A user-friendly interface lets you browse stunning photos and videos", "Filter destinations based on interests and travel style, and create personalized itineraries"]} onApply={handleOpen}/>
//         </Grid>

//         <Grid item xs={12} sm={6} md={3}>
//           <JobCard
//             logo={"/assets/teslaLogo.svg"}
//             timeAgo={"24h Ago"}
//             title={"Node Js Developer"}
//             experience={"1-3 yr Exp"}
//             location={"Onsite"}
//             salary={"12 Lpa"}
//             icon={"/assets/personIcon.svg"}
//             description={["A user-friendly interface lets you browse stunning photos and videos", "Filter destinations based on interests and travel style, and create personalized itineraries"]} onApply={handleOpen}/>
//         </Grid>
//       </Grid>
//        <JobCreationForm open={open} onClose={handleClose} handleJobCreation={handleJobCreation}/>
//        </>
//   );
// };
import { useState, useEffect } from 'react';
import axios from 'axios';
import { JobCard } from '../components/jobCard';
import { Container, Grid } from '@mui/material';
import { Navbar } from '../components/navBar';
import { FilterBar } from '../components/filterBar';
import { JobCreationForm } from '../components/jobCreationForm';

interface Job {
  id: number;
  jobtitle: string; // ✅ Matches API response
  companyname: string; // ✅ Matches API response
  location: string;
  jobtype: string;
  salaryrange: string;
  jobdescription: string;
  requirements: string;
  responsibilities: string;
  applicationdeadline: string;
}


// Define your logo mappings here
const logoMap: { [key: string]: string } = {
  'Amazon': '/assets/amazonLogo.svg',
  'Tesla': '/assets/teslaLogo.svg',
  'Swiggy': '/assets/swiggyLogo.svg',
};

export const Home = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [openCreate, setOpenCreate] = useState(false);

  // Correct: These functions have no parameters
  const handleOpenCreate = () => setOpenCreate(true);
  const handleCloseCreate = () => setOpenCreate(false);

  // Correct: This function accepts jobData: any
  const handleJobCreation = async (jobData: any) => {
    console.log("Creating job with data:", jobData);
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/jobs`, jobData);
      console.log("Job created:", response.data);
      fetchJobs();
    } catch (error) {
      console.error("Error creating job", error);
    }
  };

  const fetchJobs = async () => {
    console.log("Fetching jobs...");
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/jobs`);
      console.log("Jobs fetched:", response.data);
      setJobs(response.data);
    } catch (error) {
      console.error("Error fetching jobs", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <Container maxWidth="xl">
      <Navbar onOpenCreate={handleOpenCreate} /> {/* Correct usage */}
      <FilterBar />

      {/* Job Cards */}
      <Grid container spacing={3} mt={2} mb={3} sx={{ justifyContent: { xs: "center", md: "flex-start" } }}>
      {jobs.map((job) => {
    console.log("Job Data:", job); // Debugging each job object

    // Fix: Correctly reference companyname from API
    const logo = logoMap[job.companyname] || '/assets/defaultLogo.svg';

    return (
      <Grid item key={job.id} xs={12} md={3}>
        <JobCard
          logo={logo}
          timeAgo="2 days ago"
          title={job.jobtitle}
          experience={job.jobtype}
          location={job.location}
          salary={job.salaryrange || "Not specified"}
          description={[job.jobdescription, job.requirements, job.responsibilities]}
          onApply={() => console.log('Apply button clicked')} companyName={''} packageIcon={'/assets/packageIcon.svg'} jobTypeIcon={'/assets/jobTypeIcon.svg'} onSiteIcon={'/assets/locationIcon.svg '} />
      </Grid>
    );
  })}
      </Grid>

      {/* Create Job Dialog */}
      <JobCreationForm
        open={openCreate}
        onClose={handleCloseCreate}
        handleJobCreation={handleJobCreation}
      />
    </Container>
  );
};
