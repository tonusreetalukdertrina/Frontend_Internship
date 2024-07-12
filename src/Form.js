import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Radio, RadioGroup, FormControlLabel, Typography, TextField, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { styled } from '@mui/system';
import { setStudying, setEducationLevel, setSchoolName, setGrade, setCollegeName, setLatestGrade, setGraduationYear, setJobStatus, setCompanyName, setExperienceYears, setJobTitle } from './formSlice';
import { useNavigate } from 'react-router-dom';

const CenteredBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
});

const graduationYears = Array.from(new Array(50), (val, index) => 1970 + index); // Generate years from 1970 to 2019

const Form = () => {
  const dispatch = useDispatch();
  const formState = useSelector((state) => state.form);
  const navigate = useNavigate();

  const handleStudyingChange = (e) => {
    dispatch(setStudying(e.target.value));
  };

  const handleEducationLevelChange = (e) => {
    dispatch(setEducationLevel(e.target.value));
  };

  const handleJobStatusChange = (e) => {
    dispatch(setJobStatus(e.target.value));
  };

  const handleInputChange = (setter) => (e) => {
    dispatch(setter(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    if (formState.studying === '') {
      alert('Please select if you are currently studying.');
      return;
    }

    if (formState.studying === 'yes') {
      if (formState.educationLevel === '') {
        alert('Please select your education level.');
        return;
      }

      if (formState.educationLevel === 'school') {
        if (formState.schoolName === '') {
          alert('Please enter your school name.');
          return;
        }

        if (formState.grade === '') {
          alert('Please select your grade.');
          return;
        }
      }

      if (formState.educationLevel === 'college') {
        if (formState.collegeName === '') {
          alert('Please enter your college name.');
          return;
        }

        if (formState.latestGrade === '') {
          alert('Please select your latest grade.');
          return;
        }

        if (formState.graduationYear === '') {
          alert('Please select your graduation year.');
          return;
        }
      }
    } else if (formState.studying === 'no') {
      if (formState.jobStatus === '') {
        alert('Please select your job status.');
        return;
      }

      if (formState.jobStatus === 'looking') {
        if (formState.collegeName === '') {
          alert('Please enter your college name.');
          return;
        }

        if (formState.latestGrade === '') {
          alert('Please select your latest grade.');
          return;
        }

        if (formState.graduationYear === '') {
          alert('Please select your graduation year.');
          return;
        }
      }

      if (formState.jobStatus === 'working') {
        if (formState.companyName === '') {
          alert('Please enter your company name.');
          return;
        }

        if (formState.jobTitle === '') {
          alert('Please enter your job title.');
          return;
        }

        if (formState.experienceYears === '') {
          alert('Please select your years of experience.');
          return;
        }
      }
    }

    // If all fields are valid, navigate to the Data component
    navigate('/data', { state: formState });
  };

  return (
    <CenteredBox>
      <Typography variant="h4" gutterBottom>
        Welcome to Geeks of EduCareer Voices
      </Typography>
      <form onSubmit={handleSubmit}>
        <Typography variant="h6" gutterBottom>
          Are you currently studying?
        </Typography>
        <RadioGroup row value={formState.studying} onChange={handleStudyingChange} required>
          <FormControlLabel value="yes" control={<Radio />} label="Yes, I am currently studying" />
          <FormControlLabel value="no" control={<Radio />} label="No, I am not studying" />
        </RadioGroup>

        {formState.studying === 'yes' && (
          <>
            <Typography variant="h6" gutterBottom>
              Are you currently?
            </Typography>
            <RadioGroup row value={formState.educationLevel} onChange={handleEducationLevelChange} required>
              <FormControlLabel value="school" control={<Radio />} label="In School" />
              <FormControlLabel value="college" control={<Radio />} label="In College" />
            </RadioGroup>

            {formState.educationLevel === 'school' && (
              <>
                <TextField
                  label="School Name"
                  fullWidth
                  margin="normal"
                  value={formState.schoolName}
                  onChange={handleInputChange(setSchoolName)}
                  required
                />
                <Typography variant="h6" gutterBottom>
                  What grade are you in?
                </Typography>
                <FormControl fullWidth margin="normal" required>
                  <InputLabel>Grade</InputLabel>
                  <Select
                    value={formState.grade}
                    onChange={handleInputChange(setGrade)}
                  >
                    <MenuItem value="grade9">Grade 9</MenuItem>
                    <MenuItem value="grade10">Grade 10</MenuItem>
                    <MenuItem value="grade11">Grade 11</MenuItem>
                    <MenuItem value="grade12">Grade 12</MenuItem>
                  </Select>
                </FormControl>
              </>
            )}

            {formState.educationLevel === 'college' && (
              <>
                <TextField
                  label="College Name"
                  fullWidth
                  margin="normal"
                  value={formState.collegeName}
                  onChange={handleInputChange(setCollegeName)}
                  required
                />
                <Typography variant="h6" gutterBottom>
                  What is your latest grade?
                </Typography>
                <FormControl fullWidth margin="normal" required>
                  <InputLabel>Latest Grade</InputLabel>
                  <Select
                    value={formState.latestGrade}
                    onChange={handleInputChange(setLatestGrade)}
                  >
                    <MenuItem value="A">A</MenuItem>
                    <MenuItem value="B">B</MenuItem>
                    <MenuItem value="C">C</MenuItem>
                    <MenuItem value="D">D</MenuItem>
                  </Select>
                </FormControl>
                <Typography variant="h6" gutterBottom>
                  What is your graduation year?
                </Typography>
                <FormControl fullWidth margin="normal" required>
                  <InputLabel>Graduation Year</InputLabel>
                  <Select
                    value={formState.graduationYear}
                    onChange={handleInputChange(setGraduationYear)}
                  >
                    {graduationYears.map((year) => (
                      <MenuItem key={year} value={year}>
                        {year}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </>
            )}
          </>
        )}

        {formState.studying === 'no' && (
          <>
            <Typography variant="h6" gutterBottom>
              Are you currently?
            </Typography>
            <RadioGroup row value={formState.jobStatus} onChange={handleJobStatusChange} required>
              <FormControlLabel value="looking" control={<Radio />} label="Looking for a job" />
              <FormControlLabel value="working" control={<Radio />} label="Currently working" />
            </RadioGroup>

            {formState.jobStatus === 'looking' && (
              <>
                <TextField
                  label="College Name"
                  fullWidth
                  margin="normal"
                  value={formState.collegeName}
                  onChange={handleInputChange(setCollegeName)}
                  required
                />
                <Typography variant="h6" gutterBottom>
                  What is your latest grade?
                </Typography>
                <FormControl fullWidth margin="normal" required>
                  <InputLabel>Latest Grade</InputLabel>
                  <Select
                    value={formState.latestGrade}
                    onChange={handleInputChange(setLatestGrade)}
                  >
                    <MenuItem value="A">A</MenuItem>
                    <MenuItem value="B">B</MenuItem>
                    <MenuItem value="C">C</MenuItem>
                    <MenuItem value="D">D</MenuItem>
                  </Select>
                </FormControl>
                <Typography variant="h6" gutterBottom>
                  What is your graduation year?
                </Typography>
                <FormControl fullWidth margin="normal" required>
                  <InputLabel>Graduation Year</InputLabel>
                  <Select
                    value={formState.graduationYear}
                    onChange={handleInputChange(setGraduationYear)}
                  >
                    {graduationYears.map((year) => (
                      <MenuItem key={year} value={year}>
                        {year}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </>
            )}

            {formState.jobStatus === 'working' && (
              <>
                <TextField
                  label="Company Name"
                  fullWidth
                  margin="normal"
                  value={formState.companyName}
                  onChange={handleInputChange(setCompanyName)}
                  required
                />
                <FormControl fullWidth margin="normal">
                  <InputLabel>Job Title</InputLabel>
                  <Select
                    value={formState.jobTitle}
                    onChange={handleInputChange(setJobTitle)}
                  >
                    <MenuItem value="developer">Full StackDeveloper</MenuItem>
                    <MenuItem value="senior-developer">Senior Full Stack Developer</MenuItem>
                    <MenuItem value="manager">AI Engineer</MenuItem>
                  </Select>
                </FormControl>
                <Typography variant="h6" gutterBottom>
                  How many years of experience do you have?
                </Typography>
                <FormControl fullWidth margin="normal" required>
                  <InputLabel>Years of Experience</InputLabel>
                  <Select
                    value={formState.experienceYears}
                    onChange={handleInputChange(setExperienceYears)}
                  >
                    <MenuItem value="0-1">0-1</MenuItem>
                    <MenuItem value="2-3">2-3</MenuItem>
                    <MenuItem value="4-5">4-5</MenuItem>
                    <MenuItem value="6+">6+</MenuItem>
                  </Select>
                </FormControl>
              </>
            )}
          </>
        )}

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </CenteredBox>
  );
};

export default Form;
