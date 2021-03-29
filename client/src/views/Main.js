import React, { useEffect, useState } from 'react' 
import axios from 'axios'; 
import PetList from '../components/PetList';
export default () =>{
    const [ pets, setPets ] = useState([])
    const [ loaded, setLoaded ] = useState(false);
    useEffect(()=>{
        axios.get("http://localhost:8000/api/pets/find")
            .then(res=>{
                setPets(res.data);
                setLoaded(true);
            });
    }, []);
    
    const removeFromDom = petId =>{
        setPets(pets.filter(pet => pet._id != petId));
    }
    return(
        <div>
            {loaded && <PetList pets = {pets} removeFromDom = {removeFromDom}/>}
        </div>
    )
}