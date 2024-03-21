import React from 'react'
import use from './hooks/use';

function Todos() {
    const result=use("https://jsonplaceholder.typicode.com/todos")
    console.log(result);
    return (
        <>
            <h1 className="text-center text-primary m-10">All Todos List</h1>
           <div className='container'>
                <table className="table shadow mt-5">
                    <thead>
                        <tr>
                            <th>USERID</th>
                            <th>ID</th>
                            <th>TITLE</th>
                            <th>COMPLETED</th>
                        </tr>
                    </thead>
                    <tbody>
    
                    </tbody>
                </table>
           </div>

        </>
    )
}

export default Todos
