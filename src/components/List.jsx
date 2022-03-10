import React from "react";
import { ListElement } from "../styles/styles";
import { ListItem } from "../styles/styles";

import { DATASET } from '../dataset';

export const List = ({ valoarea_de_filtrare }) => {

    const filtered_dataset = DATASET.filter((item) => {
        item = item.toLocaleLowerCase();
        valoarea_de_filtrare = valoarea_de_filtrare.toLocaleLowerCase();
        return (item.startsWith(valoarea_de_filtrare));
    });

    return (
        <ListElement>
            {filtered_dataset.map((item) => (
                <ListItem key={item}>
                    {item}
                </ListItem>
            ))}
        </ListElement>
    )
}