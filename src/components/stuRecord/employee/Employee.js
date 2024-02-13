import { useEffect, useState } from "react";
import moment from 'moment';
const Employee = () => {

    const [age, setAge] = useState(0);
    const [dob, setDob] = useState('');

   useEffect(()=>{
    //calculate age
     let age =moment().diff(dob,'years');
     setAge(age);
   },[dob])
    const AddDobHandler=(e)=>{
        setDob(e.target.value)
    }
    return (
        <div className="emp-form">
            <div className="emp-form-field">
                <lable>Enter Dob</lable>
                <input type="Date" placeholder="dd-mm-yyyy" value={dob} onChange={AddDobHandler} />
            </div>
            <div className="emp-form-field">
                <div>
                    age is:{age}
                </div>
            </div>
        </div>
    )
}
export default Employee;