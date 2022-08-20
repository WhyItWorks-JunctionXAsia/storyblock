import React from "react";
import backgroundImage from 'assets/images/listpage-background.png'
import FlexContainer from "../../components/FlexContainer";


const ListBackground: React.FC = () => {
    return (
        <FlexContainer flexDirection={"column"} style={{position:"absolute",zIndex:-1}}>
            <img src={backgroundImage}/>
        </FlexContainer>
    );
};

export default ListBackground
