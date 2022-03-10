import React, { useState } from "react";
import { Input, SearchBar } from "../styles/styles";


export default function Search({ search, onChange }) {
    return (
        <SearchBar>
            <h1>Enter the search value</h1>
            <Input type="text" value={search} onChange={onChange} />

        </SearchBar>
    )
}