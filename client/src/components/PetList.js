import React from 'react'
import { Link } from '@reach/router';
export default (props) => {

    //keeps track of what is being typed


        return(
            <div>
                <header>
                    <h1>Pet Shelter</h1>
                    <Link to ={"/pets/new"}>add a pet to the shelter</Link>
                </header>
                <h3>These pets are looking for a good home</h3>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                        {props.pets.map((pet,idx)=>{
                            return <tr>
                                        <td key = {idx}>{pet.Name}</td>
                                                    <td>{pet.Type}</td>
                                        <td>
                                            <Link to ={"/pets/" + pet._id}>details</Link> | 
                                            <Link to ={"/pets/" + pet._id + "/edit"}> edit</Link> 
                                        </td>
                                    </tr>
                        })}
                </table>
            </div>
        )
}
