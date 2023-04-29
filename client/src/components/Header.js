
import React from "react";
import {Toolbar} from "./Toolbar/Toolbar";

export let Header = ({setFilter, setSort, setPageSize, setTheme, loading}) => {

    return (
       <div className="display-flex margin-10">
            <div className="title">Pokedex</div>
            <Toolbar
                setFilter={(value) => setFilter(value)}
                setSort={(value) => setSort(value)}
                setPageSize={(value) => setPageSize(value)}
                setTheme={(value) => setTheme(value)}
                loading={loading}>
            </Toolbar>
       </div>
    );
}
