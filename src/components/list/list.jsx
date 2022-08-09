import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useRef } from 'react';
import  ListItem  from '../listitem/listitem';
import "./list.scss";



export default function List(){

    const listRef = useRef();
    
    const handleClick = (direction) => {
        if(direction === "left"){
            listRef.current.style.transform = `translateX(230px)`;

        }
        if(direction === "right"){
            listRef.current.style.transform = `translateX(230px)`;

        }
    }


    return(

        
        <div className="list">
            <span className="listTitle">Continue to Watch</span>
            <div className = "wrapper">
                <ArrowBackIosIcon className = "slidearrow left" onClick = {() => handleClick("left") }/>
                <div className="container">
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </div>
                <ArrowForwardIosIcon className = "slidearrow right" onClick = {() => handleClick("right")}/>

            </div>

        </div>
    );
}