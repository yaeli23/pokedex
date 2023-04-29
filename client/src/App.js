import "./assets/Styles.css";
import React, {useEffect, useState} from "react";
import {fetchPokemons} from "./utils/loadData";
import {Pokemons} from "./components/Pokemons";
import {Footer} from "./components/Footer";
import {Header} from "./components/Header";

let App = () => {
    const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const [isDark,setIsDark] = useState(isSystemDark)
    const [dataPerPage, setPageSize] = useState(5)
    const [size, setSize] = useState(0)
    const [pokemons, setPokemons] = useState(undefined)
    const [filter, setFilter] = useState("")
    const [sort, setSort] = useState("");
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    const lightTheme = {backgroundColor: "white", color: "black"}
    const darkTheme = {backgroundColor : "black", color : "white"}
    let handleSort = (value) => {
        setPage(1)
        setSort(value)
    }
    let handleFilter = (value) => {
        setPage(1)
        setFilter(value)
    }

    let handlePageSizeChanged = (value) => {
        setPage(1)
        setPageSize(value)
    }

    useEffect(() => {
        setPokemons(undefined)
        setLoading(true)
         fetchPokemons(page, dataPerPage, sort, filter).then(data => {
            setPokemons(data.pokemons)
            setSize(data.total_size)
            setLoading(false)
        })
    }, [page, dataPerPage, sort, filter]);


    return (
        <div className="container" style={isDark ? darkTheme : lightTheme} >

            <Header setFilter={(value) => handleFilter(value)}
                     setSort={(value) => handleSort(value)}
                     setPageSize={(value) => handlePageSizeChanged(value)}
                     setTheme={(value) => setIsDark(value)} loading={loading}>
            </Header>

            <Pokemons pokemons={pokemons}></Pokemons>

            <Footer setPage={(value) => setPage(value)}
                    page={page}
                    pages={Math.ceil(size/dataPerPage)}
                    loading={loading}>
            </Footer>
        </div>

    );

}

export default App;
