
export let Footer = ({ page, setPage, pages, loading}) => {
    return (
       <div className='flex-center' >
           <div className={`flex-center paging prev-next ${page === 1 || loading ? "disabled":""}`} onClick={() => setPage( page-1)} >&laquo;</div>
           <div className='flex-center paging'> {page}{`${pages !== 0 ? "/" + pages : ""}`} </div>
           <div className={`flex-center paging prev-next ${(pages === 0 || page === pages || loading) ? "disabled":""}`}  onClick={() => setPage(page+1)}  >&raquo;</div>

           {/* Used for debugging and jumping to specified page number */}
           {/*<input type="number" value={page}  min="1" max={pages} onChange={(event) => setPage(event.target.value) }/>*/}
       </div>

    );
}
