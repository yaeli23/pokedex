export let Sort = ({setSort}) => {

  return (
    <div className="display-flex margin-10">
        <div className='secondary-title'>sort:</div>
        <select defaultValue={""} onChange={(event) => setSort(event.target.value)}>
            <option value="" disabled>None</option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
        </select>

    </div>
  );
}