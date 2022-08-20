import React from "react";
import styled from "styled-components";
import backgroundImage from 'assets/listpage-background.png'


const ListBackground: React.FC = () => {
    return (
        <div style={{display:"flex" ,position:"absolute", zIndex:-1}}>
            <img src={backgroundImage}/>
        </div>
    );
};

export default ListBackground
