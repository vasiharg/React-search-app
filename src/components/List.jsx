import React from "react";

import { DATASET } from '../dataset';

export const List = ({ valoarea_de_filtrare }) => {

    const filtered_dataset = DATASET.filter((item) => item.startsWith(valoarea_de_filtrare));

    return (
        <ul className="display-box">
            {filtered_dataset.map((item) => (
                <li key={item}>
                    {item}
                </li>
            ))}
        </ul>
    )
}