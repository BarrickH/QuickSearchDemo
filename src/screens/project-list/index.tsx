import { SearchPanel } from "./search-panel"
import { List } from './list';
import { useState, useEffect } from "react"
import * as qs from "qs"
import { cleanObject, useMount, useDebounce } from '../../utils/index';


const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const debounceParam = useDebounce(param,2000)
    // console.log(1111,param,qs.stringify(cleanObject(param)))
    const [list,setList] = useState([])
    const [users,setUsers] = useState([{name:'1',personId:123},{name:'2',personId:123}])
    useEffect(() =>{
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`)
        .then(async res=>{
            if(res.ok){
            setList(await res.json())
            } 
     }
    )},[debounceParam])
    useMount(()=>{
        fetch(`${apiUrl}/users`).then(async res=>{
            if(res.ok){
             setUsers(await res.json())
            } 
         })
    })
    // const fetchSetList = fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async res=>{
    //         if(res.ok){
    //          setList(await res.json())
    //         } 
    //      }
    //     )

    console.log(1,list)
    return <div>
        <SearchPanel param={param} setParam={setParam} users={users}/>
        <List list={list} users={users}/>
    </div>
}