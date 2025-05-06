// // // import { useDispatch, useSelector } from "react-redux";
// // // import { useState } from "react";
// // // import Fab from '@mui/material/Fab';
// // // import { getStudentsThunk } from "../../redux/Thunks/getStudentsThunk";
// // // import * as React from 'react';
// // // import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
// // // import { ThumbUpOffAltOutlined } from "@mui/icons-material";
// // // // import { CheckBox, CreditCardOutlined, InfoOutlined } from "@mui/icons-material";

// // // export const JoinCourse = () => {
// // //   const [flag, setFlag] = useState(false);
// // //   const [flag2, setFlag2] = useState(false);
// // //   const dispatch = useDispatch()
// // //   const courses = useSelector(state => state.courses.courses);
// // //   const students = useSelector(state => state.students.students);
// // //   const co = useSelector(state => state.courses.selectC);
// // //   React.useEffect(() => {
// // //     dispatch(getStudentsThunk())
// // //   }, [])
// // //   const student = ''
// // //   const sId = -1
// // //   const id = co
// // //   const joinToCourse = (value) => {
// // //     student = students.map(s => s.nameOfStudent == value)
// // //     sId = student.idOfStudent
// // //     console.log(id, sId)
// // //     // dispatch(`https://localhost:7092/api/Student/JoinCourse?sId`{sId}`&id`{id})
// // //   }
// // //   return <div className="border">
// // //     <Box className="select" sx={{ minWidth: 120 }}>
// // //       <FormControl fullWidth>
// // //         <InputLabel id="demo-simple-select-label">תלמידה </InputLabel>
// // //         <Select
// // //           labelId="demo-simple-select-label"
// // //           id="demo-simple-select"
// // //           label="תלמידה "
// // //           className="tool"
// // //           defaultValue={""}
// // //         >
// // //           {students.map(student => {
// // //             return <MenuItem key={student.idOfStudent} value={student.nameOfStudent}>
// // //               {student.nameOfStudent} </MenuItem>
// // //           })}
// // //         </Select>
// // //       </FormControl>
// // //     </Box>
// // //     <br />

// // //     <div className="button" onClick={() => joinToCourse()}>
// // //       <Fab variant="outlined" >
// // //         <ThumbUpOffAltOutlined></ThumbUpOffAltOutlined>
// // //       </Fab></div>
      
// // //   </div>



// import React, { useState, useEffect } from 'react';
// import { 
//   Container, 
//   Paper, 
//   Typography, 
//   Stepper, 
//   Step, 
//   StepLabel, 
//   Box, 
//   Button, 
//   TextField, 
//   FormControl, 
//   InputLabel, 
//   Select, 
//   MenuItem, 
//   Grid, 
//   Card, 
//   CardContent, 
//   Avatar, 
//   Divider, 
//   Alert, 
//   Snackbar, 
//   CircularProgress
// } from '@mui/material';
// import { 
//   ArrowBack, 
//   PersonAdd, 
//   CheckCircle, 
//   Phone, 
//   Email, 
//   Home, 
//   EventNote 
// } from '@mui/icons-material';
// import { useNavigate, useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import Logo from '../Logo/Logo';
// import { getCourseByCourseIdThunk } from '../../redux/Thunks/getCourseByCourseIdThunk';
// import { getStudentsThunk } from '../../redux/Thunks/getStudentsThunk';
// // import logoImage from '../../assets/logo.png';

// export const JoinCourse = () => {
//   const { courseId } = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const course = useSelector(state => state.courses.selectedCourse);
//   const students = useSelector(state => state.students.students);
  
//   // State variables
//   const [activeStep, setActiveStep] = useState(0);
//   const [selectedStudent, setSelectedStudent] = useState('');
//   const [selectedStudentDetails, setSelectedStudentDetails] = useState(null);
//   const [contactInfo, setContactInfo] = useState({
//     phone: '',
//     email: '',
//     address: '',
//     notes: ''
//   });
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [openSnackbar, setOpenSnackbar] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState('');
//   const [snackbarSeverity, setSnackbarSeverity] = useState('info');
  
//   // Steps for the stepper
//   const steps = ['בחירת תלמיד', 'פרטי קשר', 'אישור'];
  
//   // Fetch course data on component mount
//   useEffect(() => {
//     dispatch(getStudentsThunk())  
//     if (courseId) {
//       dispatch(getCourseByCourseIdThunk(courseId));
//     }


//   //   React.useEffect(() => {
//   //   dispatch(getStudentsThunk())
//   //  }, [])
//    }, [dispatch, courseId]);
  
//   // Handle student selection
//   const handleStudentChange = (event) => {
//     const studentId = event.target.value;
//     setSelectedStudent(studentId);
    
//     const student = students.find(s => s.idOfStudent === studentId);
//     setSelectedStudentDetails(student);
//   };
  
//   // Handle contact info changes
//   const handleContactChange = (event) => {
//     const { name, value } = event.target;
//     setContactInfo(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };
  
//   // Handle next step
//   const handleNext = () => {
//     if (activeStep === steps.length - 1) {
//       handleSubmit();
//     } else {
//       setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     }
//   };
  
//   // Handle back step
//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };
  
//   // Handle form submission
//   const handleSubmit = () => {
//     setLoading(true);
    
//     // Simulate API call
//     setTimeout(() => {
//       setLoading(false);
//       setSuccess(true);
//       setSnackbarMessage('הרישום לקורס הושלם בהצלחה!');
//       setSnackbarSeverity('success');
//       setOpenSnackbar(true);
//     }, 1500);
//   };
  
//   // Handle snackbar close
//   const handleCloseSnackbar = (event, reason) => {
//     if (reason === 'clickaway') {
//       return;
//     }
//     setOpenSnackbar(false);
//   };
  
//   // Render step content based on active step
//   const getStepContent = (step) => {
//     switch (step) {
//       case 0:
//         return (
//           <Box sx={{ mt: 4 }}>
//             <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
//               בחר תלמיד להרשמה
//             </Typography>
            
//             <FormControl fullWidth variant="outlined" sx={{ mb: 3 }}>
//               <InputLabel>תלמיד</InputLabel>
//               <Select
//                 value={selectedStudent}
//                 onChange={handleStudentChange}
//                 label="תלמיד"
//               >
//                 {students && students.map((student) => (
//                   <MenuItem key={student.idOfStudent} value={student.idOfStudent}>
//                     {student.nameOfStudent}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
            
//             {selectedStudent && (
//               <Card sx={{ 
//                 borderRadius: '16px', 
//                 boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
//                 mt: 3,
//                 p: 2,
//                 bgcolor: 'rgba(25, 118, 210, 0.05)'
//               }}>
//                 <CardContent>
//                   <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                     <Avatar 
//                       sx={{ 
//                         bgcolor: 'primary.main', 
//                         width: 60, 
//                         height: 60,
//                         mr: 2
//                       }}
//                     >
//                       {selectedStudentDetails?.nameOfStudent?.charAt(0) || 'T'}
//                     </Avatar>
//                     <Box>
                     
//                       <Typography variant="h6" sx={{ fontWeight: 600 }}>
//                       {selectedStudentDetails?.nameOfStudent}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       ת.ז: {selectedStudentDetails?.idNumber || 'לא זמין'}
//                     </Typography>
//                   </Box>
//                 </Box>
                
//                 <Divider sx={{ my: 2 }} />
                
//                 <Grid container spacing={2}>
//                   <Grid item xs={12} sm={6}>
//                     <Typography variant="body2" color="text.secondary">
//                       טלפון:
//                     </Typography>
//                     <Typography variant="body1">
//                       {selectedStudentDetails?.phone || 'לא זמין'}
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <Typography variant="body2" color="text.secondary">
//                       דוא"ל:
//                     </Typography>
//                     <Typography variant="body1">
//                       {selectedStudentDetails?.email || 'לא זמין'}
//                     </Typography>
//                   </Grid>
//                 </Grid>
//               </CardContent>
//             </Card>
//           )}
//         </Box>
//       );
    
//     case 1:
//       return (
//         <Box sx={{ mt: 4 }}>
//           <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
//             פרטי קשר נוספים
//           </Typography>
          
//           <Grid container spacing={3}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="טלפון"
//                 name="phone"
//                 value={contactInfo.phone}
//                 onChange={handleContactChange}
//                 variant="outlined"
//                 InputProps={{
//                   startAdornment: <Phone color="action" sx={{ mr: 1 }} />,
//                 }}
//               />
//             </Grid>
            
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="דוא״ל"
//                 name="email"
//                 value={contactInfo.email}
//                 onChange={handleContactChange}
//                 variant="outlined"
//                 InputProps={{
//                   startAdornment: <Email color="action" sx={{ mr: 1 }} />,
//                 }}
//               />
//             </Grid>
            
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="כתובת"
//                 name="address"
//                 value={contactInfo.address}
//                 onChange={handleContactChange}
//                 variant="outlined"
//                 InputProps={{
//                   startAdornment: <Home color="action" sx={{ mr: 1 }} />,
//                 }}
//               />
//             </Grid>
            
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="הערות"
//                 name="notes"
//                 value={contactInfo.notes}
//                 onChange={handleContactChange}
//                 variant="outlined"
//                 multiline
//                 rows={4}
//                 InputProps={{
//                   startAdornment: <EventNote color="action" sx={{ mr: 1, alignSelf: 'flex-start', mt: 1 }} />,
//                 }}
//               />
//             </Grid>
//           </Grid>
//         </Box>
//       );
    
//     case 2:
//       return (
//         <Box sx={{ mt: 4 }}>
//           <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
//             אישור פרטי הרשמה
//           </Typography>
          
//           <Card sx={{ 
//             borderRadius: '16px', 
//             boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
//             mb: 3
//           }}>
//             <CardContent>
//               <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
//                 פרטי הקורס
//               </Typography>
              
//               <Grid container spacing={2}>
//                 <Grid item xs={12} sm={6}>
//                   <Typography variant="body2" color="text.secondary">
//                     שם הקורס:
//                   </Typography>
//                   <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                     {course?.nameOfCourse || 'לא זמין'}
//                   </Typography>
//                 </Grid>
                
//                 <Grid item xs={12} sm={6}>
//                   <Typography variant="body2" color="text.secondary">
//                     תאריך התחלה:
//                   </Typography>
//                   <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                     {course?.startDateOfCourse || 'לא זמין'}
//                   </Typography>
//                 </Grid>
                
//                 <Grid item xs={12} sm={6}>
//                   <Typography variant="body2" color="text.secondary">
//                     יום בשבוע:
//                   </Typography>
//                   <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                     {course?.dayOfCourse || 'לא זמין'}
//                   </Typography>
//                 </Grid>
                
//                 <Grid item xs={12} sm={6}>
//                   <Typography variant="body2" color="text.secondary">
//                     כמות מפגשים:
//                   </Typography>
//                   <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                     {course?.amountOfMettingInCourse || '0'}
//                   </Typography>
//                 </Grid>
//               </Grid>
//             </CardContent>
//           </Card>
          
//           <Card sx={{ 
//             borderRadius: '16px', 
//             boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
//             mb: 3
//           }}>
//             <CardContent>
//               <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
//                 פרטי התלמיד
//               </Typography>
              
//               <Grid container spacing={2}>
//                 <Grid item xs={12} sm={6}>
//                   <Typography variant="body2" color="text.secondary">
//                     שם התלמיד:
//                   </Typography>
//                   <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                     {selectedStudentDetails?.nameOfStudent || 'לא זמין'}
//                   </Typography>
//                 </Grid>
                
//                 <Grid item xs={12} sm={6}>
//                   <Typography variant="body2" color="text.secondary">
//                     ת.ז:
//                   </Typography>
//                   <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                     {selectedStudentDetails?.idNumber || 'לא זמין'}
//                   </Typography>
//                 </Grid>
                
//                 <Grid item xs={12} sm={6}>
//                   <Typography variant="body2" color="text.secondary">
//                     טלפון:
//                   </Typography>
//                   <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                     {contactInfo.phone || selectedStudentDetails?.phone || 'לא זמין'}
//                   </Typography>
//                 </Grid>
                
//                 <Grid item xs={12} sm={6}>
//                   <Typography variant="body2" color="text.secondary">
//                     דוא"ל:
//                   </Typography>
//                   <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                     {contactInfo.email || selectedStudentDetails?.email || 'לא זמין'}
//                   </Typography>
//                 </Grid>
                
//                 {contactInfo.address && (
//                   <Grid item xs={12}>
//                     <Typography variant="body2" color="text.secondary">
//                       כתובת:
//                     </Typography>
//                     <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                       {contactInfo.address}
//                     </Typography>
//                   </Grid>
//                 )}
                
//                 {contactInfo.notes && (
//                   <Grid item xs={12}>
//                     <Typography variant="body2" color="text.secondary">
//                       הערות:
//                     </Typography>
//                     <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                       {contactInfo.notes}
//                     </Typography>
//                   </Grid>
//                 )}
//               </Grid>
//             </CardContent>
//           </Card>
          
//           <Alert severity="info" sx={{ mb: 3 }}>
//             לחיצה על "אישור" תשלים את תהליך ההרשמה לקורס.
//           </Alert>
//         </Box>
//       );
    
//     default:
//       return 'שלב לא ידוע';
//   }
// };

// // If registration is successful, show success message
// if (success) {
//   return (
//     <Container maxWidth="md" sx={{ py: 5, direction: 'rtl' }}>
//       <Paper sx={{ 
//         p: 4, 
//         borderRadius: '16px',
//         boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
//         textAlign: 'center'
//       }}>
//         <Avatar sx={{ 
//           bgcolor: 'success.main',
//           width: 80,
//           height: 80,
//           mx: 'auto',
//           mb: 3
//         }}>
//           <CheckCircle sx={{ fontSize: 50 }} />
//         </Avatar>
        
//         <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
//           ההרשמה הושלמה בהצלחה!
//         </Typography>
        
//         <Typography variant="body1" sx={{ mb: 4 }}>
//           הרישום לקורס "{course?.nameOfCourse}" בוצע בהצלחה.
//           פרטי הקורס ישלחו אליך בהקדם.
//         </Typography>
        
//         <Button
//           variant="contained"
//           color="primary"
//           size="large"
//           onClick={() => navigate('/')}
//           sx={{
//             borderRadius: '30px',
//             py: 1.5,
//             px: 4,
//             fontWeight: 600,
//             fontSize: '1rem',
//           }}
//         >
//           חזרה לדף הבית
//         </Button>
//       </Paper>
//     </Container>
//   );
// }

// return (
//   <Container maxWidth="md" sx={{ py: 5, direction: 'rtl' }}>
//     <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
//     <Logo size={80} onClick={() => navigate('/')} />
//     </Box>
    
//     <Paper sx={{ 
//       p: 4, 
//       borderRadius: '16px',
//       boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
//     }}>
//       <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
//         <Button
//           onClick={() => navigate(-1)}
//           startIcon={<ArrowBack />}
//           sx={{ mr: 2 }}
//         >
//           חזרה
//         </Button>
        
//         <Typography variant="h5" sx={{ fontWeight: 700 }}>
//           הרשמה לקורס {course?.nameOfCourse}
//         </Typography>
//       </Box>
      
//       <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
//         {steps.map((label) => (
//           <Step key={label}>
//             <StepLabel>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>
      
//       {getStepContent(activeStep)}
      
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
//         <Button
//           disabled={activeStep === 0}
//           onClick={handleBack}
//           sx={{ mr: 1 }}
//         >
//           חזרה
//         </Button>
        
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleNext}
//           disabled={
//             (activeStep === 0 && !selectedStudent) ||
//             loading
//           }
//           startIcon={activeStep === steps.length - 1 ? 
//             (loading ? <CircularProgress size={20} color="inherit" /> : <CheckCircle />) : 
//             <PersonAdd />
//           }
//           sx={{
//             borderRadius: '8px',
//             fontWeight: 600,
//           }}
//         >
//           {activeStep === steps.length - 1 ? 'אישור' : 'המשך'}
//         </Button>
//       </Box>
//     </Paper>
    
//     <Snackbar
//       open={openSnackbar}
//       autoHideDuration={6000}
//       onClose={handleCloseSnackbar}
//       anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
//     >
//       <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
//         {snackbarMessage}
//       </Alert>
//     </Snackbar>
//   </Container>
// );
// };

// export default JoinCourse;
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container, Box, Typography, Button, Grid, Card, CardContent, Divider,
  Avatar, Paper, Stepper, Step, StepLabel, TextField, FormControl,
  InputLabel, Select, MenuItem, Alert, Snackbar, CircularProgress
} from '@mui/material';
import {
  ArrowBack, CheckCircle, Phone, Email, Home, EventNote, 
  PersonAdd, CreditCard, AttachMoney, CalendarToday, Receipt
} from '@mui/icons-material';
// import { getCourseByCourseIdThunk } from '../../redux/Thunks/getCourseByCourseId';
import { getStudentsThunk } from '../../redux/Thunks/getStudentsThunk';
import Logo from '../Logo/Logo';

export const JoinCourse = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const course = useSelector(state => state.courses.selectedCourse);
  const students = useSelector(state => state.students.students);
  
  // State variables
  const [activeStep, setActiveStep] = useState(0);
  const [selectedStudent, setSelectedStudent] = useState('');
  const [selectedStudentDetails, setSelectedStudentDetails] = useState(null);
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    paymentMethod: 'credit',
    notes: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('info');
  const [student1, setStudent1] = useState(null);
  // Steps for the stepper
  const steps = ['בחירת תלמיד', 'פרטי תשלום', 'אישור'];
  
  // Fetch course data on component mount
  useEffect(() => {
    dispatch(getStudentsThunk())
    // if (courseId) {
    //   dispatch(getCourseByCourseIdThunk(courseId));
    // }
  }, [dispatch, courseId]);
  
  // Handle student selection
  const handleStudentChange = (event) => {
   setStudent1(students.find(s => s.idOfStudent === event.target.value));
    const studentId = event.target.value;
    setSelectedStudent(studentId);
    setSelectedStudentDetails(selectedStudent)
    // console.log(student1.nameOfStudent+"kk");
    
    const student = students.find(s => s.idOfStudent === studentId);
    setSelectedStudentDetails(student);
  };
  
  // Handle payment info changes
  const handlePaymentChange = (event) => {
    const { name, value } = event.target;
    setPaymentInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle next step
  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      handleSubmit();
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };
  
  // Handle back step
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  
  // Handle form submission
  const handleSubmit = () => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setSnackbarMessage('הרישום לקורס הושלם בהצלחה!');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
    }, 1500);
  };
  
  // Handle snackbar close
  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };
  
  // Render step content based on active step
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              בחר תלמיד להרשמה
            </Typography>
            
            <FormControl fullWidth variant="outlined" sx={{ mb: 3 }}>
              <InputLabel>תלמיד</InputLabel>
              <Select
             onChange={handleStudentChange}
                value={selectedStudent} 
                
                label="תלמיד"
              >
                {students && students.map((student) => (
                  <MenuItem key={student.idOfStudent} value={student.idOfStudent} >
                    {student.nameOfStudent}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            
            {selectedStudent && (
              <Card sx={{
                borderRadius: '16px',
                boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                mt: 3,
                p: 2,
                bgcolor: 'rgba(25, 118, 210, 0.05)'
              }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar
                      sx={{
                        bgcolor: 'primary.main',
                        width: 60,
                        height: 60,
                        mr: 2
                      }}
                    >
                      {selectedStudentDetails?.nameOfStudent?.charAt(0) || 'T'}
                    </Avatar>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {selectedStudentDetails?.nameOfStudent}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        ת.ז: {selectedStudentDetails?.idNumber || 'לא זמין'}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Divider sx={{ my: 2 }} />
                  
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="body2" color="text.secondary">
                        טלפון:
                      </Typography>
                      <Typography variant="body1">
                        {student1.phoneOfStudent || 'לא זמין'}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="body2" color="text.secondary">
                        דוא"ל:
                      </Typography>
                      <Typography variant="body1">
                        {student1.emailOfStudent || 'לא זמין'}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            )}

            {/* הצגת פרטי הקורס בצעד הראשון */}
            {selectedStudent && course && (
              <Card sx={{
                borderRadius: '16px',
                boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                mt: 3,
                p: 2,
                bgcolor: 'rgba(25, 118, 210, 0.05)'
              }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                    פרטי הקורס
                  </Typography>
                  
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="body2" color="text.secondary">
                        שם הקורס:
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {course?.nameOfCourse || 'לא זמין'}
                      </Typography>
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                      <Typography variant="body2" color="text.secondary">
                        תאריך התחלה:
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {course?.startDateOfCourse || 'לא זמין'}
                      </Typography>
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                      <Typography variant="body2" color="text.secondary">
                        יום בשבוע:
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {course?.dayOfCourse || 'לא זמין'}
                      </Typography>
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                      <Typography variant="body2" color="text.secondary">
                        כמות מפגשים:
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {course?.amountOfMettingInCourse || '0'}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            )}
          </Box>
        );
      
      case 1:
        return (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              פרטי תשלום
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
                  <InputLabel>אמצעי תשלום</InputLabel>
                  <Select
                    value={paymentInfo.paymentMethod}
                    onChange={handlePaymentChange}
                    label="אמצעי תשלום"
                    name="paymentMethod"
                  >
                    <MenuItem value="credit">כרטיס אשראי</MenuItem>
                    <MenuItem value="cash">מזומן</MenuItem>
                    <MenuItem value="check">צ'ק</MenuItem>
                    <MenuItem value="transfer">העברה בנקאית</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              
              {paymentInfo.paymentMethod === 'credit' && (
                <>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="מספר כרטיס אשראי"
                      name="cardNumber"
                      value={paymentInfo.cardNumber}
                      onChange={handlePaymentChange}
                      variant="outlined"
                      InputProps={{
                        startAdornment: <CreditCard color="action" sx={{ mr: 1 }} />,
                      }}
                    />
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="תוקף (MM/YY)"
                      name="expiryDate"
                      value={paymentInfo.expiryDate}
                      onChange={handlePaymentChange}
                      variant="outlined"
                      InputProps={{
                        startAdornment: <CalendarToday color="action" sx={{ mr: 1 }} />,
                      }}
                    />
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="CVV"
                      name="cvv"
                      value={paymentInfo.cvv}
                      onChange={handlePaymentChange}
                      variant="outlined"
                      InputProps={{
                        startAdornment: <Receipt color="action" sx={{ mr: 1 }} />,
                      }}
                    />
                  </Grid>
                </>
              )}
              
              {paymentInfo.paymentMethod !== 'credit' && (
                <Grid item xs={12}>
                  <Alert severity="info" sx={{ mt: 2 }}>
                    {paymentInfo.paymentMethod === 'cash' && 'יש להגיע למשרד עם מזומן לתשלום.'}
                    {paymentInfo.paymentMethod === 'check' && 'יש להגיע למשרד עם צ\'ק לתשלום.'}
                    {paymentInfo.paymentMethod === 'transfer' && 'פרטי חשבון להעברה בנקאית יישלחו אליך במייל.'}
                  </Alert>
                </Grid>
              )}
              
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="הערות לתשלום"
                  name="notes"
                  value={paymentInfo.notes}
                  onChange={handlePaymentChange}
                  variant="outlined"
                  multiline
                  rows={3}
                  InputProps={{
                    startAdornment: <EventNote color="action" sx={{ mr: 1, alignSelf: 'flex-start', mt: 1 }} />,
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        );
      
      case 2:
        return (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              אישור פרטי הרשמה
            </Typography>
            
            <Card sx={{
              borderRadius: '16px',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
              mb: 3
            }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  פרטי הקורס
                </Typography>
                
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2" color="text.secondary">
                      שם הקורס:
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {course?.nameOfCourse || 'לא זמין'}
                    </Typography>
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2" color="text.secondary">
                      תאריך התחלה:
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {course?.startDateOfCourse || 'לא זמין'}
                    </Typography>
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2" color="text.secondary">
                      יום בשבוע:
                    </Typography>

      


Context
— none fetched
המשך הקוד של קומפוננטת JoinCourse:

                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {course?.dayOfCourse || 'לא זמין'}
                    </Typography>
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2" color="text.secondary">
                      כמות מפגשים:
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {course?.amountOfMettingInCourse || '0'}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            
            <Card sx={{
              borderRadius: '16px',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
              mb: 3
            }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  פרטי התלמיד
                </Typography>
                
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2" color="text.secondary">
                      שם התלמיד:
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {selectedStudentDetails?.nameOfStudent || 'לא זמין'}
                    </Typography>
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2" color="text.secondary">
                      ת.ז:
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {selectedStudentDetails?.idNumber || 'לא זמין'}
                    </Typography>
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2" color="text.secondary">
                      טלפון:
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {selectedStudentDetails?.phone || 'לא זמין'}
                    </Typography>
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2" color="text.secondary">
                      דוא"ל:
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {selectedStudentDetails?.email || 'לא זמין'}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            
            <Card sx={{
              borderRadius: '16px',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
              mb: 3
            }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  פרטי תשלום
                </Typography>
                
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2" color="text.secondary">
                      אמצעי תשלום:
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {paymentInfo.paymentMethod === 'credit' && 'כרטיס אשראי'}
                      {paymentInfo.paymentMethod === 'cash' && 'מזומן'}
                      {paymentInfo.paymentMethod === 'check' && 'צ\'ק'}
                      {paymentInfo.paymentMethod === 'transfer' && 'העברה בנקאית'}
                    </Typography>
                  </Grid>
                  
                  {paymentInfo.paymentMethod === 'credit' && (
                    <>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="body2" color="text.secondary">
                          מספר כרטיס:
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          {paymentInfo.cardNumber ? `xxxx-xxxx-xxxx-${paymentInfo.cardNumber.slice(-4)}` : 'לא הוזן'}
                        </Typography>
                      </Grid>
                      
                      <Grid item xs={12} sm={6}>
                        <Typography variant="body2" color="text.secondary">
                          תוקף:
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          {paymentInfo.expiryDate || 'לא הוזן'}
                        </Typography>
                      </Grid>
                    </>
                  )}
                  
                  {paymentInfo.notes && (
                    <Grid item xs={12}>
                      <Typography variant="body2" color="text.secondary">
                        הערות לתשלום:
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {paymentInfo.notes}
                      </Typography>
                    </Grid>
                  )}
                </Grid>
              </CardContent>
            </Card>
            
            <Alert severity="info" sx={{ mb: 3 }}>
              לחיצה על "אישור" תשלים את תהליך ההרשמה לקורס.
            </Alert>
          </Box>
        );
      
      default:
        return 'שלב לא ידוע';
    }
  };

  // If registration is successful, show success message
  if (success) {
    return (
      <Container maxWidth="md" sx={{ py: 5, direction: 'rtl' }}>
        <Paper sx={{
          p: 4,
          borderRadius: '16px',
          boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <Avatar sx={{
            bgcolor: 'success.main',
            width: 80,
            height: 80,
            mx: 'auto',
            mb: 3
          }}>
            <CheckCircle sx={{ fontSize: 50 }} />
          </Avatar>
          
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            ההרשמה הושלמה בהצלחה!
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 4 }}>
            הרישום לקורס "{course?.nameOfCourse}" בוצע בהצלחה.
            פרטי הקורס ישלחו אליך בהקדם.
          </Typography>
          
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate('/')}
            sx={{
              borderRadius: '30px',
              py: 1.5,
              px: 4,
              fontWeight: 600,
              fontSize: '1rem',
            }}
          >
            חזרה לדף הבית
          </Button>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 5, direction: 'rtl' }}>
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
        <Logo size={80} onClick={() => navigate('/')} />
      </Box>
      
      <Paper sx={{
        p: 4,
        borderRadius: '16px',
        boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Button
            onClick={() => navigate(-1)}
            startIcon={<ArrowBack />}
            sx={{ mr: 2 }}
          >
            חזרה
          </Button>
          
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            הרשמה לקורס {course?.nameOfCourse}
          </Typography>
        </Box>
        
        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        
        {getStepContent(activeStep)}
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            חזרה
          </Button>
          
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            disabled={
              (activeStep === 0 && !selectedStudent) ||
              loading
            }
            startIcon={activeStep === steps.length - 1 ?
              (loading ? <CircularProgress size={20} color="inherit" /> : <CheckCircle />) :
              <PersonAdd />
            }
            sx={{
              borderRadius: '8px',
              fontWeight: 600,
            }}
          >
            {activeStep === steps.length - 1 ? 'אישור' : 'המשך'}
          </Button>
        </Box>
      </Paper>
      
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default JoinCourse;              













































