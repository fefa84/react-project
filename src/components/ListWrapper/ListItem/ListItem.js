import React from 'react'; 
import './ListItem.css';
import danAbramovImage from '../../../assets/images/danabramov.jpg';

const ListItem=()=> (
    <li className="listItem__wrapper">
        <img src={danAbramovImage} className="listItem__image" />
        <div>
            <h2 className= "listItem__name">Dan Abramov</h2>
            <p className = "listItem__description">jkjsdkks dskjdkj kjdhskhdkha t i tak sobie można cos napisać o tym geniuszu</p>
            <button className="listItem__button">visit twitter page</button>
        </div>
    </li>
);

export default ListItem;