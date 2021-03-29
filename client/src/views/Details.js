import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

export default props => {
    const { id } = props;
    const [ Name, setName ] = useState("");
    const [ Type, setType ] = useState("");
    const [ Description, setDescription ] = useState("");
    const [ SkillOne, setSkillOne ] = useState("");
    const [ SkillTwo, setSkillTwo ] = useState("");
    const [ SkillThree, setSkillThree ] = useState("");

    useEffect(()=>{
        axios.get('http://localhost:8000/api/pets/find/' + id)
        .then(res=>{
            setName(res.data.Name)
            setType(res.data.Type)
            setDescription(res.data.Description)
            setSkillOne(res.data.SkillOne)
            setSkillTwo(res.data.SkillTwo)
            setSkillThree(res.data.SkillThree)
        })
    }, [])

    // const {removeFromDom} = props;
    const adoptPet = (petId) =>{
        axios.delete('http://localhost:8000/api/pets/delete/' + petId)
            .then(res=>{
                console.log(res)
            })
        navigate("/")
    }
    
    return(
        <div>
            <header>
                        <h1>Pet Shelter</h1>
                        <Link to ={"/"}>back to home</Link>
            </header>
            <section>
                <h4>Details about: {Name}</h4>
                <button class = "adopt" onClick ={(e)=>{adoptPet(id)}} >Adopt {Name}</button>
            </section>
            <p>Pet type: {Type}</p>
            <p>Description: {Description}</p>
            <p>Skills: <ul>
                            <li>{SkillOne} </li>
                            <li>{SkillTwo} </li>
                            <li>{SkillThree}</li>
                    </ul>
                </p>
        </div>
    )
}