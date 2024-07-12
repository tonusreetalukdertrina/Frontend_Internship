import { createSlice } from '@reduxjs/toolkit';

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    studying: '',
    educationLevel: '',
    schoolName: '',
    grade: '',
    collegeName: '',
    latestGrade: '',
    graduationYear: '',
    jobStatus: '',
    companyName: '',
    experienceYears: '',
    jobTitle: '',
  },
  reducers: {
    setStudying: (state, action) => { state.studying = action.payload; },
    setEducationLevel: (state, action) => { state.educationLevel = action.payload; },
    setSchoolName: (state, action) => { state.schoolName = action.payload; },
    setGrade: (state, action) => { state.grade = action.payload; },
    setCollegeName: (state, action) => { state.collegeName = action.payload; },
    setLatestGrade: (state, action) => { state.latestGrade = action.payload; },
    setGraduationYear: (state, action) => { state.graduationYear = action.payload; },
    setJobStatus: (state, action) => { state.jobStatus = action.payload; },
    setCompanyName: (state, action) => { state.companyName = action.payload; },
    setExperienceYears: (state, action) => { state.experienceYears = action.payload; },
    setJobTitle: (state, action) => { state.jobTitle = action.payload; },
  },
});

export const {
  setStudying,
  setEducationLevel,
  setSchoolName,
  setGrade,
  setCollegeName,
  setLatestGrade,
  setGraduationYear,
  setJobStatus,
  setCompanyName,
  setExperienceYears,
  setJobTitle,
} = formSlice.actions;

export default formSlice.reducer;
