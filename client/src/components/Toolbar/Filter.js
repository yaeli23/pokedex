export let Filter = ({setFilter}) => {

    let id = null;
    let handleSetFilter = (event) => {
        clearTimeout(id)
        id = setTimeout(() => {
            setFilter(event.target.value)
        }, 400)
    }

    return (
        <div className="display-flex margin-10">
            <div className='secondary-title'>filter:</div>
            <input onKeyUp={handleSetFilter} type="text" placeholder="filter by type"/>
        </div>
    );
}
