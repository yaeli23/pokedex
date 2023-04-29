export let PageSize = ({setPageSize}) => {

  return (
    <div className="display-flex margin-10">
        <div className='secondary-title'>page size:</div>
        <select defaultValue={"5"} onChange={(event) => setPageSize(parseInt(event.target.value))}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="25">25</option>
        </select>

    </div>
  );
}