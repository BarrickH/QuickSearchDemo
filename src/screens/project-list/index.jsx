import { SearchPanel } from "./search-panel"
import { List } from './list';
import { useState, useEffect } from "react"

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const [list,setList] = useState([])
    const [users,setUsers] = useState([{name:'1',personId:123},{name:'2',personId:123}])
    useEffect(() =>{
        fetch(`${apiUrl}/projects`).then(async res=>{
           if(res.ok){
            setList(await res.json())
           } 
        })
    },[param])

    console.log(1,list)
    return <div>
        <SearchPanel param={param} setParam={setParam}/>
        <List list={list}/>
    </div>
}