import React from "react";
import MyStorySwiper from "./MyStorySwiper";





const MyStory: React.FC = () => {
    return (
        <div style={{display:"flex", flexDirection:"column"}}>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"flex-start"}}>
                My Story
            </div>
            <MyStorySwiper></MyStorySwiper>
        </div>
    );
}

export default MyStory;
