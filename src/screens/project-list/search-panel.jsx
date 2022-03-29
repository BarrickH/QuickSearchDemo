import { useState, useEffect } from "react"

export const SearchPanel = () => {
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const [users,setUsers] = useState([{name:'1',personId:123},{name:'2',personId:123}])
    const [list,setList] = useState([])
    useEffect(() =>{
        fetch('').then(async res=>{
           if(res.ok){
            // setList(res.json)
           } 
        })
    },[param])

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