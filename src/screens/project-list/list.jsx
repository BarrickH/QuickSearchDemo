export const List = ({list}) =>{
    console.log(list)
    return <table>
        <thead>
            <tr>
                <th>name</th>
                <th>person in charge</th>
            </tr>
        </thead>
        <tbody>
            {list.map(ele=><tr>
            <td>{ele.name}</td><td>{ele.personName}</td> 
            </tr>)}
        </tbody>
        
    </table>
} 