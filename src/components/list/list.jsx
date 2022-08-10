import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useRef ,useState} from 'react';
import  ListItem  from '../listitem/listitem';
import "./list.scss";



export default function List(){

    const listRef = useRef();
    const [slidenumber,setslide] = useState(0);
    const [isMoved,setisMoved] = useState(false);
    
    const handleClick = (direction) => {
        setisMoved(true);
        const distance = listRef.current.getBoundingClientRect().x - 50;
        if(direction === "left" && slidenumber >0){
            setslide(slidenumber-1);
            listRef.current.style.transform = `translateX(${distance + 230 }px)`;

        }
        if(direction === "right" && slidenumber < 5 ){
            setslide(slidenumber+1);
            listRef.current.style.transform = `translateX(${distance - 230}px)`;

        }
    }


    return(

        
        <div className="list">
            <span className="listTitle">Continue to Watch</span>
            <div className = "wrapper">
                <ArrowBackIosIcon className = "slidearrow left" onClick = {() => handleClick("left")} style={{display: !isMoved && "none"}} />
                <div className="container" ref= {listRef}>
                    <ListItem index={0}/>
                    <ListItem index={1}/>
                    <ListItem index={2}/>
                    <ListItem index={3}/>
                    <ListItem index={4}/>
                    <ListItem index={5}/>
                    <ListItem index={6}/>
                    <ListItem index={7}/>
                    <ListItem index={8}/>
                    <ListItem index={9}/>
                </div>
                <ArrowForwardIosIcon className = "slidearrow right" onClick = {() => handleClick("right")}/>

            </div>

        </div>
    );
}