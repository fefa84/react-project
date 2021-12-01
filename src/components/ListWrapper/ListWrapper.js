import React from 'react';
import ListItem from './ListItem/ListItem.js'
import './ListWrapper.css'


const ListWrapper = () => (
    <ul className="listWrapper__wrapper">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
    </ul>
);

export default ListWrapper;
