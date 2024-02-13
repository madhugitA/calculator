import './StuRecord.css'
import { useState } from 'react';
const StuRecord = () => {

    const [stuName, setStuName] = useState('');
    const [stuDob, setStuDob] = useState('');
    const [stuAge, setStuAge] = useState('');
    const [stuList, setStuList] = useState([]);

    const stuNameHandler = (e) => {
        setStuName(e.target.value);
    }

    const stuDobHandler = (e) => {
        setStuDob(e.target.value);
    }
    const stuAgeHandler =(e)=>{
        setStuAge(e.target.value);
    }
    const stuAddHandler = () => {
        let stu ={
               name:stuName,
               dob:stuDob,
               age:stuAge
        } 
        // let stuListCopy=stuList;
        //     stuListCopy.push(stu);
            setStuList([...stuList, stu]);


            setStuName('');
            setStuDob('');
    }

const stuDeleteHandler=(index)=>{
        let stuListCopy = stuList;
        stuListCopy.splice(index,1);
        setStuList([...stuListCopy])
      }

const stuEditHandler=(index)=>{
    let stuListCopy = stuList;
        setStuList([...stuListCopy])
}

    return (
        <>
            <div className="stuRecord">
                <div className="stu-form">
                    <div className="stu-field">
                        <lable>Enter Name</lable>
                        <input type="text" placeholder="Full Name" value={stuName} onChange={stuNameHandler} />
                    </div>
                    <div className="stu-field">
                        <lable>Date Of Birth</lable>
                        <input type="Date" placeholder="Date Of Birth" value={stuDob} onChange={stuDobHandler} />
                    </div>
                    <div className="stu-field">
                        <button type="button" onClick={stuAddHandler}>+Add</button>
                    </div>
                </div>
            </div>
            <div className='stuTable'>
                <table>
                    <thead>
                        <tr>
                            <th>Sno</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Activitis</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            stuList.map((stu,index)=>{
                                  return(
                                    <tr key={index}>
                                        <td>{stu.name}</td>
                                        <td>{stu.dob}</td>
                                        <td>{stu.age}</td>
                                         <td>
                                            <button type="button" onClick={()=>stuEditHandler(index)}>Edit</button>
                                            <button type="button" onClick={()=>stuDeleteHandler(index)}>Delete</button>
                                         </td>
                                    </tr>
                                  )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default StuRecord;
