import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography, Paper } from '@mui/material';

const Data = () => {
  const location = useLocation();
  const formData = location.state; // Get the form data from the location state

  if (!formData) {
    return (
      <Typography variant="h6" color="error">
        No data available. Please fill out the form.
      </Typography>
    );
  }

  return (
    <Box padding={3}>
      <Typography variant="h4" gutterBottom>
        Submitted Data
      </Typography>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography variant="body1">
          {formData.studying === 'yes' ? 'Yes, I am currently studying.' : 'No, I am not studying.'}
        </Typography>
        {formData.studying === 'yes' && (
          <>
            <Typography variant="h6" gutterBottom>
              Education Level
            </Typography>
            <Typography variant="body1">
              {formData.educationLevel === 'school' ? 'I am in school' : 'I am in college'}
            </Typography>
            {formData.educationLevel === 'school' && (
              <>
                <Typography variant="h6" gutterBottom>
                  School Name
                </Typography>
                <Typography variant="body1">{formData.schoolName}</Typography>
                <Typography variant="h6" gutterBottom>
                  Grade
                </Typography>
                <Typography variant="body1">{formData.grade}</Typography>
              </>
            )}
            {formData.educationLevel === 'college' && (
              <>
                <Typography variant="h6" gutterBottom>
                  College Name
                </Typography>
                <Typography variant="body1">{formData.collegeName}</Typography>
                <Typography variant="h6" gutterBottom>
                  Latest Grade
                </Typography>
                <Typography variant="body1">{formData.latestGrade}</Typography>
                <Typography variant="h6" gutterBottom>
                  Graduation Year
                </Typography>
                <Typography variant="body1">{formData.graduationYear}</Typography>
              </>
            )}
          </>
        )}
        {formData.studying === 'no' && (
          <>
            <Typography variant="h6" gutterBottom>
              Job Status
            </Typography>
            <Typography variant="body1">
              {formData.jobStatus === 'looking' ? 'Looking for a job' : 'Currently working'}
            </Typography>
            {formData.jobStatus === 'looking' && (
              <>
                <Typography variant="h6" gutterBottom>
                  College Name
                </Typography>
                <Typography variant="body1">{formData.collegeName}</Typography>
                <Typography variant="h6" gutterBottom>
                  Latest Grade
                </Typography>
                <Typography variant="body1">{formData.latestGrade}</Typography>
                <Typography variant="h6" gutterBottom>
                  Graduation Year
                </Typography>
                <Typography variant="body1">{formData.graduationYear}</Typography>
              </>
            )}
            {formData.jobStatus === 'working' && (
              <>
                <Typography variant="h6" gutterBottom>
                  Company Name
                </Typography>
                <Typography variant="body1">{formData.companyName}</Typography>
                <Typography variant="h6" gutterBottom>
                  Job Title
                </Typography>
                <Typography variant="body1">{formData.jobTitle}</Typography>
                <Typography variant="h6" gutterBottom>
                  Years of Experience
                </Typography>
                <Typography variant="body1">{formData.experienceYears}</Typography>
              </>
            )}
          </>
        )}
      </Paper>
    </Box>
  );
};

export default Data;
