import React, { useState } from 'react' 
import { Link, navigate } from '@reach/router';
import axios from 'axios';

export default () =>{
    const [ Name, setName ] = useState("");
    const [ Type, setType ] = useState("");
    const [ Description, setDescription ] = useState("");
    const [ SkillOne, setSkillOne ] = useState("");
    const [ SkillTwo, setSkillTwo ] = useState("");
    const [ SkillThree, setSkillThree ] = useState("");

    const [errors, setErrors] = useState([]); 

    const onSubmitHandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/pets', {
            Name, 
            Type,
            Description,
            SkillOne,
            SkillTwo,
            SkillThree
        })
        .then(res=> console.log(res))
        .catch(err => {
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            console.log("this is ", errorArr);
            for(const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
            console.log(errorResponse)
            
            
        })
        //unused navigation try this later
        // if(errorArr.length < 1){
        //     navigate("/")}
        // }
        // if((Name.length && Type.length && Description.length) >= 3){
        //     navigate("/")
        // };
    }



    return(
        <form onSubmit ={onSubmitHandler}>
            <header>
                    <h1>Pet Shelter</h1>
                    <Link to ={"/"}>back to home</Link>
            </header>
            <h3>Know a pet needing a home?</h3>
            {errors.map((err, index) => <p style ={{"color": "red"}}key={index}>{err}</p>)}
            <p>
                <label>Pet Name:</label><br/>
                <input type ="text" onChange ={(e)=> setName(e.target.value)} value={Name}/>
            </p>
            <p>
                <label>Pet Type:</label><br/>
                <input type ="text" onChange ={(e)=> setType(e.target.value)} value={Type}/>
            </p>
            <p>
                <label>Pet Description:</label><br/>
                <input type ="text" onChange ={(e)=> setDescription(e.target.value)} value={Description}/>
            </p>
            <p>
                <label>Skill 1:</label><br/>
                <input type ="text" onChange ={(e)=> setSkillOne(e.target.value)} value={SkillOne}/>
            </p>
            <p>
                <label>Skill 2:</label><br/>
                <input type ="text" onChange ={(e)=> setSkillTwo(e.target.value)} value={SkillTwo}/>
            </p>
            <p>
                <label>Skill 3:</label><br/>
                <input type ="text" onChange ={(e)=> setSkillThree(e.target.value)} value={SkillThree}/>
            </p>
            <input type ="submit" value="add pet"></input>
        </form>
    )
} 