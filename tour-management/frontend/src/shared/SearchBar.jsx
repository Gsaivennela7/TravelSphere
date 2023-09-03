import React,{useRef} from "react";

import './search-bar.css';
import {Col,Form,FormGroup} from "reactstrap";

const SearchBar = () =>{

const locationRef = useRef('')
const distRef= useRef(0)
const peopleRef= useRef(0)

const searchHandler =()=>{

    const location =locationRef.current.value;
    const distance =locationRef.current.value;
    const people =peopleRef.current.value;

    if(location== '' || distance == '' || people==''){
        return alert("All fields are required!!!")
    }
   
}

    return <Col lg='2'>
        <div className='search__bar'>
            <Form className='d-flex align-items-center gap-4'>
                <FormGroup className= "d-flex gap-3 form__group form__group-fast">
                    <span><i class= "ri-map-pin-line"></i></span>
                    <div>
                        <h6>Location</h6>
                        <input type="text" placeholder='where are you going?' ref={locationRef}/>
                    </div>
                </FormGroup>
                <FormGroup className= "d-flex gap-3 form__group form__group-first">
                    <span><i class= "ri-map-pin-time-line"></i></span>
                    <div>
                        <h6>Distance</h6>
                        <input type="number" placeholder='Distance miles' ref={distRef}/>
                    </div>
                </FormGroup>
                <FormGroup className= "d-flex gap-3 form__group form__group-last">
                    <span><i class= "ri-group-line"></i></span>
                    <div>
                        <h6>Travelers</h6>
                        <input type="number" placeholder='0' ref={peopleRef}/>
                    </div>
                </FormGroup>
                <span className="search__icon" type="submit" onClick={searchHandler}>
                    <i class="ri-search-line"></i>
                </span>
            </Form>
        </div>
    </Col>


};


export default SearchBar;