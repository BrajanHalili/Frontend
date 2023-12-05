import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PatientDirectory from "./routes/patient/PatientDirectory";
import DoctorDirectory from "./routes/doctor/DoctorDirectory";
import ApptDirectory from "./routes/appointment/ApptDirectory";
import StartPage from "./routes/StartPage";


import UpdatePatient from "./routes/patient/UpdatePatientPage";
import PatientDetails from "./routes/patient/PatientDetails";
import DoctorDetails from "./routes/doctor/DoctorDetails";
import ApptDetails from "./routes/appointment/ApptDetails";

import { PatientsContextProvider } from "./context/PatientsContext";
import Layout from "./components/Layout";




const App = () => {

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Layout />}>
                        <Route index element={<StartPage />} />
                        <Route path="/patients" element={<PatientDirectory />} />
                        <Route path="/doctors" element={<DoctorDirectory />} />
                        <Route path="/appointments" element={<ApptDirectory />} />
                    </Route>
                    <Route exact path="/patients/id" element={<PatientDetails />} />
                    <Route exact path="/doctors/id" element={<DoctorDetails />} />
                    <Route exact path="/appointments/id" element={<ApptDetails />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;