import { User } from "./search-panel"

interface Project {
    id:string;
    name:string;
    personId:string;
    pin:boolean;
    organization:string;
}

interface ListProps {
    list: Project[],
    users: User[]
}

export const List = ({list,users}:ListProps) =>{
    console.log(list)
    return <table>
        <thead>
            <tr>
                <th>name</th>
                <th>person in charge</th>
            </tr>
        </thead>
        <tbody>
            {list.map(ele=><tr key={ele.id}>
            <td>{ele.name}</td>
            <td>{users.find(user => user.id==ele.personId)?.name || 'unknown'}</td> 
            </tr>)}
        </tbody>
        
    </table>
} 