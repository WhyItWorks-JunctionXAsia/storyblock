import React, {useEffect} from "react";
import backgroundImage from 'assets/images/detailpage-background.png'
import FlexContainer from "../../components/FlexContainer";
import {useAtom} from "jotai";
import {accountAddressAtom} from "../../atom";


const DetailBackground: React.FC = () => {

    const [accountAddress, setAccountAddtess] = useAtom(accountAddressAtom)

    useEffect(() => {
        if(accountAddress===undefined) {
            alert('connect the wallet first')
            window.location.replace('/')
        }
    }, []);


    return (
        <FlexContainer flexDirection={"column"} style={{position:"absolute",zIndex:-1}}>
            <img src={backgroundImage}/>
        </FlexContainer>
    );
};

export default DetailBackground
