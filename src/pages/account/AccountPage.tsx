import React from "react";
import FlexContainer from "components/FlexContainer";
import accountImage from "assets/images/account.png"
import Area from "../../components/Area";
import ContentArea from "../../components/ContentArea";

const AccountPage: React.FC = () => {
    return (
        <Area>
            <ContentArea>
                <img src={accountImage} width={"100%"}/>
            </ContentArea>
        </Area>

    );
};
export default AccountPage