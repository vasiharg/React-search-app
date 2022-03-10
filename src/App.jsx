import React, { useState } from "react";
import "./styles/style.css"
import Search from "./components/SearchBar";
import { List } from "./components/List";


export default function App() {
    const [search, setSearch] = useState('');
    const onChange = (e) => {
        const value = e.target.value;
        setSearch(value);
    }
    return (
        <>
            <Search search={search} onChange={onChange} />
            <List valoarea_de_filtrare={search} />
        </>
    )
}