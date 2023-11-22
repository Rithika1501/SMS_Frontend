import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudentLogin from './Student_login';
import AdminLogin from './Admin_login';
import FacultyLogin from './Faculty_login';
import HomePage from './home';
import AdminDashboard from './Admin_dashboard';
import StudentDashboard from './Student_dashboard';
import AdminProfile from './Admin_profile';
import StudentProfile from './Student_profile';
import AddStudent from './Admin_students';
import AddFaculty from './Admin_faculty';
import AddAdmin from './Admin_admins';
import FacultyDashboard from './Faculty_dashboard';
import FacultyProfile from './Faculty_profile';
import FacultyMarks from './Faculty_marks';
import AddMaterial from './Faculty_matrials';
import AddInfo from './Faculty_studentInfo';
import Student_mark from './Student_marks';
import AddNotice from './Admin_notice';
import AddFacNotice from './Faculty_notice';
import StudentNotice from './Student_notice';
import Student_admin from './Student_admins';
import TimeTable from './Student_tt';
import Student_material from './Student_material';
import FTimetable from './faculty_tt';

function App() {
  const [studentData, setStudentData] = useState(null);
  const [adminData, setAdminData] = useState(null);
  const [facultyData, setFacultyData] = useState(null);
  const [marksData, setMarksData] = useState(null);
 

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route 
          path='/facultylogin' 
          element={<FacultyLogin setFacultyDataProp={setFacultyData}/>} 
          />
          <Route 
            path='/adminlogin' 
            element={<AdminLogin setAdminDataProp={setAdminData} />}
          />
          <Route 
            path='/adminDashboard' 
            element={<AdminDashboard adminData={adminData} />} 
          />
          <Route
            path='/adminProfile' 
            element={<AdminProfile adminData={adminData}/>} 
          />
          <Route
 path='/studentlogin'
 element={<StudentLogin setStudentDataProp={setStudentData}  />}
/>

<Route
 path='/StudentDashboard'
 element={<StudentDashboard studentData={studentData} marksData={marksData} />}
/>

          <Route
            path='/facultyDashboard'
            element={<FacultyDashboard facultyData={facultyData} />}
          />
          <Route
            path='/StudentProfile'
            element={<StudentProfile studentData={studentData} />}
          />
          <Route
            path='/facultyProfile'
            element={<FacultyProfile facultyData={facultyData} />}
          />
          <Route
            path='/facultyMarks'
            element={<FacultyMarks />}
          />
           <Route path='/admin_students' element={<AddStudent/>}/>
           <Route path='/admin_faculty' element={<AddFaculty/>}/>
           <Route path='/admin_admins' element={<AddAdmin/>}/>
          
           
           <Route path='/facultyMaterials' element={<AddMaterial/>}/>
           <Route path="/fac_StuInfo" element={<AddInfo />} />
           <Route path="/Student_marks"element={<Student_mark studentData={studentData} />} />
           <Route path='/Admin_notice' element={<AddNotice/>}/>
           <Route path='/Faculty_notice' element={<AddFacNotice/>}/>
           <Route path='/Student_notice' element={<StudentNotice/>}/>
           <Route path='/Student_admins' element={<Student_admin/>}/>
           <Route path="/Time_table" element={<TimeTable />} />
           <Route path="/course" element={<Student_material studentData={studentData}/>} />
           <Route path="/fTimetable" element={<FTimetable />}/>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
