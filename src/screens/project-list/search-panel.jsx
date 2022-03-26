export const SearchPanel = () => {
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    return <form action="">
        <div>
            <input type="text" value={param.name} onChange={evt => setParam({
                ...param,
                name: evt.target.value
            })}/>
            <select value = {param.personId} onChange={evt=> setParam({
                ...param,
                personId: param.personId
            })}>
                <option value={''}>
                    person in charge
                </option>
            </select>
        </div>
    </form>
}