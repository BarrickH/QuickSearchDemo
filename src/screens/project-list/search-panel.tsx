import { useState, useEffect } from "react"

export interface User{
    id?:string;
    name?:string;
    email?:string;
    title?:string;
    organization?:string
}
interface SearchPanelProps{
    users: User[],
    param: {
        name: string;
        personId: string;
    },
    setParam:(param:SearchPanelProps['param'])=>void;
}
export const SearchPanel = ({param, setParam, users}:SearchPanelProps) => {    

    return <form>
        <div>
            <input type="text" value={param.name} onChange={evt => setParam({
                ...param,
                name: evt.target.value
            })}/>
            <select value = {param.personId} onChange={evt=> setParam({
                ...param,
                personId: evt.target.value
            })}>
                <option value={''}>
                    person in charge
                </option>
                {users.map(item => {
                    console.log(111,item,item.id)
                    return <option key={item.id} value={item.id}>{item.name}</option>
                })}
            </select>
        </div>
    </form>
}