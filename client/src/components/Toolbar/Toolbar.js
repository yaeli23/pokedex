import {Sort} from "./Sort";
import {Filter} from "./Filter";
import {PageSize} from "./PageSize";
import {Theme} from "./Theme";
import React from "react";
export let Toolbar = ({setFilter, setSort, setPageSize, setTheme, loading}) => {

    return (
       <div className={`flex-row ${loading ? "disabled" : 1}`} >
            <Sort  setSort={setSort}></Sort>
            <Filter setFilter={setFilter}></Filter>
            <PageSize setPageSize={setPageSize}></PageSize>
            <Theme  setTheme={setTheme}></Theme>
       </div>
    );
}
