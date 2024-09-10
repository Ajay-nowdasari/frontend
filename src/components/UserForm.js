import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserForm = () => {
    const [member , setMember ] = useState([]);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/user_create/',formData)
            .then(response => {
                console.log('User created:', response.data);
                alert("data posted ")
                
            })
            .catch(error => {
                console.error('There was an error!', error);
                alert("error when posting the data")
            });
    };

        useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/disp_tbl/')
            .then(response => {
                setMember(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []); // Add an empty dependency array to run this effect only once


    return (
        <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name</label>
                <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Last Name</label>
                <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
            {member.length > 0 &&  (
                
                <table>
                     <thead>
                         <tr>
                             <th>ID</th>
                             <th>First Name</th>
                             <th>Last Name</th>
                             <th>Email</th>
                             <th>Password</th>
                         </tr>
                     </thead>
                     <tbody>
                         {member.map((value, index) => (
                            <tr key={index}>
                                <td>{value.id}</td>
                                <td>{value.first_name}</td>
                                <td>{value.last_name}</td>
                                <td>{value.email}</td>
                                <td>{value.password}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
           )}

        </div>
    );
};


export default UserForm;



// const UserForm = () => {
//     const [formData, setFormData] = useState({
//         first_name: '',
//         last_name: '',
//         email: '',
//         password: ''
//     });
//     const [member, setMember] = useState([]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post('http://127.0.0.1:8000/api/user_create/', formData)
//             .then(response => {
//                 console.log('User created:', response.data);
//                 alert("Data posted successfully.");
//             })
//             .catch(error => {
//                 console.error('There was an error!', error);
//                 alert("Error posting the data.");
//             });
//     };

//     useEffect(() => {
//         axios.get('http://127.0.0.1:8000/api/disp_tbl/')
//             .then(response => {
//                 setMember(response.data);
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//     }, []); // Add an empty dependency array to run this effect only once

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>First Name</label>
//                     <input
//                         type="text"
//                         name="first_name"
//                         value={formData.first_name}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Last Name</label>
//                     <input
//                         type="text"
//                         name="last_name"
//                         value={formData.last_name}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Email</label>
//                     <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Password</label>
//                     <input
//                         type="password"
//                         name="password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <button type="submit">Submit</button>
//             </form>
//             {member.length > 0 && (
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>First Name</th>
//                             <th>Last Name</th>
//                             <th>Email</th>
//                             <th>Password</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {member.map((value, index) => (
//                             <tr key={index}>
//                                 <td>{value.id}</td>
//                                 <td>{value.first_name}</td>
//                                 <td>{value.last_name}</td>
//                                 <td>{value.email}</td>
//                                 <td>{value.password}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// };

// export default UserForm;
