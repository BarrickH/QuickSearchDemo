import { useState, useEffect } from "react"

export const SearchPanel = ({param,setParam}) => {    

    return <form>
        <div>
            <input type="text" value={param.name} onChange={evt => setParam({
                ...param,
                name: evt.target.value
            })}/>
            <select value = {param.personId} onChange={evt=> setParam({
                ...param,
                personId: evt.personId
            })}>
                <option value={''}>
                    person in charge
                </option>
                {users.map(item => {
                    return <option value={item.personId}>{item.name}</option>
                })}
            </select>
        </div>
    </form>
}