import React, { useState } from "react";
import Search from "./components/SearchBar";
import { List } from "./components/List";

export default function App() {
    const [search, setSearch] = useState('');
    const onChange = (e) => {
        setSearch(e.target.value);
    };
    conbsole.log('a')

    return (
        <>
            <Search search={search} onChange={onChange} />
            <List valoarea_de_filtrare={search} />
        </>
    )
}