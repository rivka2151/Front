// // import { useDispatch, useSelector } from "react-redux";
// // import { useState } from "react";
// // import { addCourseThunk } from "../../../redux/Thunks/addCourseThunk";
// // import { getCoursesThunk } from "../../../redux/Thunks/getCoursesThunk";
// // import Fab from '@mui/material/Fab';
// // import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
// // import TextField from '@mui/material/TextField';
// // import Autocomplete from '@mui/material/Autocomplete';
// // import './AddCourse.css'
// // import * as React from 'react';
// // import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
// // export const AddCourse = () => {
// //      const [flag, setFlag] = useState(false);
// //      const [flag2, setFlag2] = useState(false);
// //      const dispatch = useDispatch()
// //      const courses = useSelector(state => state.courses.courses);
// //      const speakers1 = useSelector(state => state.speakers.speakers);
// //      // const [speakers, setSpeakers] = useState()
// // React.useEffect(() => {
// //      if (speakers1.length == 0) {
// //           // console.log('useeeeeeeeee');
// //           // setSpeakers(speakers1.map(v => v.nameOfSpeaker))
// //           // doIt2()
// //           dispatch(getCoursesThunk())
// //      }
// // }, [])
// //      const [course, setCourse] = useState({ nameOfCourse: "", speakerOfCourse: "", amountOfStudentsInCourse: "" });
// //      async function doIt(course) {
// //           setFlag(false)
// //           await dispatch(addCourseThunk(course));

// //      }
// //      // async function doIt2() {
// //      //      //console.log('doIt2222');
// //      //      dispatch(getCoursesThunk())
// //      // }
// //      async function F() {
// //           setFlag2(true)
// //      }
// //      const [open, setOpen] = React.useState(false);

// //      const handleClickOpen = () => {
// //           setOpen(true);
// //      };
// //      const handleClose = () => {
// //           setOpen(false);
// //      };
// //      //console.log(speakers);

// //      return <div className="border">
// //           <><div className="tool">
// //                <br></br>
// //                <TextField id="outlined-basicc" label=":שם הקורס" variant="outlined"
// //                     type="text" className="input" value={course.nameOfCourse} onChange={x => setCourse({ ...course, nameOfCourse: x.target.value })} />
// //           </div>
// //                <br></br>

// //                <div className="tool">
// //                     <TextField id="outlined-basic" label=":כמות התלמידות " variant="outlined"
// //                          type="text" className="input" value={course.amountOfStudentsInCourse} onChange={x => setCourse({ ...course, amountOfStudentsInCourse: x.target.value })} />
// //                </div>
// //                <br></br>
// //                <div className="tool">
// //                     <TextField id="outlined-basiccc" label=":תאריך התחלה" variant="outlined"
// //                          type="text" className="input" value={course.startDateOfCourse} onChange={x => setCourse({ ...course, startDateOfCourse: x.target.value })} />
// //                </div>
// //                <br></br>
// //                <div className="tool">
// //                     <TextField id="outlined-basicccc" label=":כמות המפגשים" variant="outlined"
// //                          type="text" className="input" value={course.amountOfMettingInCourse} onChange={x => setCourse({ ...course, amountOfStudentsInCourse: x.target.value })} />
// //                </div>
// //                <br></br>

// //                <Box className="select" sx={{ minWidth: 120 }}>
// //                     {/* <FormControl fullWidth> */}
// //                          {/* <InputLabel id="demo-simple-select-label">מרצה </InputLabel>
// //                          <Select
// //                               labelId="demo-simple-select-label"
// //                               id="demo-simple-select"
// //                               defaultValue={""}
// //                               label="מרצה "
// //                          className="tool"> */}

// //                          {/* value={course.speakerOfCourse} onChange={x => setCourse({ ...course, speakerOfCourse: x.target.value })}  */}
// //                               {speakers1.map(speaker => {
// //                                    return <MenuItem key={speaker.idOfSpeaker} value={speaker.nameOfSpeaker}>{speaker.nameOfSpeaker}</MenuItem>

// //                               })}
// //                               {/* <MenuItem key={type.name} value={type.name}>{type.name}</MenuItem>
// //                         <MenuItem value={20}>Twenty</MenuItem>
// //                         <MenuItem value={30}>Thirty</MenuItem> */}
// //                          {/* </Select> */}
// //                     {/* </FormControl> */}
// //                </Box>
// //                <div className="button">
// //                     <Fab variant="outlined" onClick={() => doIt(course)}>
// //                          < ThumbUpOffAltOutlinedIcon onClick={handleClose}></ThumbUpOffAltOutlinedIcon>
// //                     </Fab> </div> </>

// //      </div>
// // }
// import { useDispatch, useSelector } from "react-redux";
// import { useState, useEffect } from "react";
// import { addCourseThunk } from "../../../redux/Thunks/addCourseThunk";
// import Fab from '@mui/material/Fab';
// import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
// import TextField from '@mui/material/TextField';
// import './AddCourse.css';
// import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
// import { getSpeakersThunk } from "../../../redux/Thunks/getSpeakersThunk";
// import { getBySpeakerNameThunk } from "../../../redux/Thunks/getBySpeakerNameThunk";

// export const AddCourse = ({ onClose }) => {
//      const dispatch = useDispatch();
//      const speakers1 = useSelector(state => state.speakers.speakers);
//      const selectedCourse = useSelector(state =>state.courses.selectC);
//      const [speakerOfCourse, setSpeakerOfCourse] = useState()
//      const[tid,setTid]=useState()
     
//      useEffect(() => {
//           if (speakers1.length == 0) {
//                dispatch(getSpeakersThunk())
//           }
//      }, [])

//      // אתחול מצב הקורס
//      const [course, setCourse] = useState({
//           nameOfCourse: "",
//           idOfSpeaker: "",
//           amountOfStudentsInCourse: "",
//           startDateOfCourse: "",
//           amountOfMettingInCourse: "",
//           dayOfCourse: "",
//           image:""
//      });

//      // הוספת קורס חדש
//      const handleAddCourse = async () => {
//           try {
//                debugger

//                //console.log(speakerOfCourse.speakerOfCourse);
//           //const tempId = dispatch(getBySpeakerNameThunk(speakerOfCourse.speakerOfCourse))  
//            // dispatch(getBySpeakerNameThunk(speakerOfCourse.speakerOfCourse))  

//                //?????למה זה לא מתרחש?????
//                //setCourse({...course, idOfSpeaker: tempId.payload.idOfSpeaker})
//                //const x=selectedCourse.idOfSpeaker;
//                //setCourse({...course, idOfSpeaker: x})

//               // console.log(course+"  selectedCourse.idOfSpeaker");
//                // console.log(tempId.payload.idOfSpeaker+"  tempId.payload.idOfSpeaker");
//                //setTid(selectedCourse.idOfSpeaker);
//               // console.log(tid+"   tid");
//                handleAddCourse2()
//                // סגירת הדיאלוג לאחר הוספה מוצלחת
//                if (onClose) onClose();
//           } catch (error) {
//                console.error("שגיאה בהוספת קורס:", error);
//           }
//      };
     // const handleAddCourse2 = async () => {
     //      try {debugger
     //            dispatch(addCourseThunk(course));
     //           console.log(course);
     //      }
     //      catch (error) {
     //           console.error("שגיאה בהוספת קורס:", error);
     //      }
     // }


//      return (
//           <div className="border">
//                <div className="tool">
//                     <TextField
//                          id="outlined-basicc"
//                          label="שם הקורס"
//                          variant="outlined"
//                          type="text"
//                          className="input"
//                          value={course.nameOfCourse}
//                          onChange={x => setCourse({ ...course, nameOfCourse: x.target.value })}
//                          fullWidth
//                          margin="normal"
//                     />
//                </div>
// <div><input type="file" ></input></div>
//                <div className="tool">
//                     <TextField
//                          id="outlined-basic"
//                          label="כמות התלמידות"
//                          variant="outlined"
//                          type="number"
//                          className="input"
//                          value={course.amountOfStudentsInCourse}
//                          onChange={x => setCourse({ ...course, amountOfStudentsInCourse: x.target.value })}
//                          fullWidth
//                          margin="normal"
//                     />
//                </div>

//                <div className="tool">
//                     <TextField
//                          id="outlined-basiccc"
//                          label="תאריך התחלה"
//                          variant="outlined"
//                          type="date"
//                          className="input"
//                          value={course.startDateOfCourse}
//                          onChange={x => setCourse({ ...course, startDateOfCourse: x.target.value })}
//                          fullWidth
//                          margin="normal"
//                          InputLabelProps={{
//                               shrink: true,
//                          }}
//                     />
//                </div>

//                <div className="tool">
//                     <TextField
//                          id="outlined-basicccc"
//                          label="כמות המפגשים"
//                          variant="outlined"
//                          type="number"
//                          className="input"
//                          value={course.amountOfMettingInCourse}
//                          onChange={x => setCourse({ ...course, amountOfMettingInCourse: x.target.value })}
//                          fullWidth
//                          margin="normal"
//                     />
//                </div>

//                <div className="tool">
//                     <FormControl fullWidth margin="normal">
//                          <InputLabel id="day-select-label">יום בשבוע</InputLabel>
//                          <Select
//                               labelId="day-select-label"
//                               id="day-select"
//                               value={course.dayOfCourse}
//                               label="יום בשבוע"
//                               onChange={x => setCourse({ ...course, dayOfCourse: x.target.value })}
//                          >
//                               <MenuItem value="ראשון">ראשון</MenuItem>
//                               <MenuItem value="שני">שני</MenuItem>
//                               <MenuItem value="שלישי">שלישי</MenuItem>
//                               <MenuItem value="רביעי">רביעי</MenuItem>
//                               <MenuItem value="חמישי">חמישי</MenuItem>
//                               <MenuItem value="שישי">שישי</MenuItem>
//                          </Select>
//                     </FormControl>
//                </div>

//                <div className="tool">
//                     <FormControl fullWidth margin="normal">
//                          <InputLabel id="speaker-select-label">מרצה</InputLabel>
//                          <Select
//                               labelId="speaker-select-label"
//                               id="speaker-select"
//                               value={course.speakerOfCourse}
//                               label="מרצה"
//                               onChange={x => setCourse({ ...course, idOfSpeaker: x.target.value })}
//                          >
//                               {speakers1.map(speaker => (
//                                    <MenuItem key={speaker.idOfSpeaker} value={speaker.idOfSpeaker}>
//                                         {speaker.nameOfSpeaker}
//                                    </MenuItem>
//                               ))}
//                          </Select>
//                     </FormControl>
//                </div>
//                {/* )} */}

//                <div className="button">
//                     <Fab
//                          color="primary"
//                          variant="extended"
//                          onClick={() => {
//                               handleAddCourse()
//                               setCourse({...course, idOfSpeaker: tid})
//                          }}
//                     >
//                          <ThumbUpOffAltOutlinedIcon sx={{ mr: 1 }} />
//                          שמור
//                     </Fab>
//                </div>
//           </div>
//      );
// };

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addCourseThunk } from "../../../redux/Thunks/addCourseThunk"; // עדכן את הנתיב לפי הצורך
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import './AddCourse.css';
import { Box, FormControl, Input, InputAdornment, InputLabel, MenuItem, Select } from "@mui/material";
import { getSpeakersThunk } from "../../../redux/Thunks/getSpeakersThunk";

export const AddCourse = ({ onClose }) => {
    const dispatch = useDispatch();
    const speakers = useSelector(state => state.speakers.speakers);
    const [course, setCourse] = useState({
        nameOfCourse: "",
        idOfSpeaker: "",
        amountOfStudentsInCourse: "",
        startDateOfCourse: "",
        amountOfMettingInCourse: "",
        dayOfCourse: "",
        totalSumOfCourse: "",
        currentAmountOfStudents:0,   
        image: null // הוספת שדה לתמונה
    });            
    useEffect(() => {
        dispatch(getSpeakersThunk());
    }, [dispatch]);


    const [selectedFile, setSelectedFile] = useState(null); // הוסף מצב לקובץ הנבחר

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]); // שמור את הקובץ הנבחר
    };
    
    const uploadFile = async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        const response = await fetch('https://localhost:7092/api/Img/upload', {
            method: 'POST',
            body: formData,
        });
    
        if (!response.ok) {
            throw new Error('Failed to upload file');
        }
    
        const data = await response.json();
        return data.filePath; // החזר את הנתיב של התמונה
    };
    

    const handleAddCourse = async () => {
     try {
         let imagePath = null;
         if (selectedFile) {
             imagePath = await uploadFile(selectedFile); // חכה להעלאת התמונה
         }
 
         const courseWithImage = { ...course, image: imagePath }; // הוסף את הנתיב לאובייקט הקורס
         await dispatch(addCourseThunk(courseWithImage)); // הוסף את הקורס עם התמונה
         if (onClose) onClose(); // סגור את הדיאלוג
     } catch (error) {
         console.error("שגיאה בהוספת קורס:", error);
     }
 };
 

    return (
        <div className="border">
            <TextField
                label="שם הקורס"
                variant="outlined"
                value={course.nameOfCourse}
                onChange={e => setCourse({ ...course, nameOfCourse: e.target.value })}
            />
                   

            <TextField
                label="כמות התלמידות"
                variant="outlined"
                type="number"
                value={course.amountOfStudentsInCourse}
                onChange={e => setCourse({ ...course, amountOfStudentsInCourse: e.target.value })}
            />
            <TextField
                label="תאריך התחלה"
                variant="outlined"
                type="date"
                value={course.startDateOfCourse}
                onChange={e => setCourse({ ...course, startDateOfCourse: e.target.value })}
                InputLabelProps={{
                    shrink: true,
                }}
            />
             <TextField
                label="סכום הקורס"  
                variant="outlined"
                type="number"
                value={course.totalSumOfCourse} 
                onChange={e => setCourse({ ...course, totalSumOfCourse: e.target.value })}
            />
            <TextField

                label="כמות המפגשים"
                variant="outlined"
                type="number"
                value={course.amountOfMettingInCourse}
                onChange={e => setCourse({ ...course, amountOfMettingInCourse: e.target.value })}
            />
            <FormControl fullWidth>
                <InputLabel id="day-select-label">יום בשבוע</InputLabel>
                <Select
                    labelId="day-select-label"
                    value={course.dayOfCourse}
                    onChange={e => setCourse({ ...course, dayOfCourse: e.target.value })}
                >
                    <MenuItem value="ראשון">ראשון</MenuItem>
                    <MenuItem value="שני">שני</MenuItem>
                    <MenuItem value="שלישי">שלישי</MenuItem>
                    <MenuItem value="רביעי">רביעי</MenuItem>
                    <MenuItem value="חמישי">חמישי</MenuItem>
                    <MenuItem value="שישי">שישי</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="speaker-select-label">מרצה</InputLabel>
                <Select
                    labelId="speaker-select-label"
                    value={course.idOfSpeaker}
                    onChange={e => setCourse({ ...course, idOfSpeaker: e.target.value })}
                >
                    {speakers.map(speaker => (
                        <MenuItem key={speaker.idOfSpeaker} value={speaker.idOfSpeaker}>
                            {speaker.nameOfSpeaker}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <div>
            <input type="file" 
            onChange={handleFileChange}
            /> 
        </div>
            <Fab onClick={handleAddCourse}>שמור</Fab>
        </div>
    );
};















 