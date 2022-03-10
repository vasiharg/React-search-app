import React, { useState } from "react";

export default function Search({ search, onChange }) {

    return (
        <form className="searchBar">
            <h1>Enter the search value</h1>
            <input type="text" id="search value" value={search} onChange={onChange} />

        </form>
    )
}