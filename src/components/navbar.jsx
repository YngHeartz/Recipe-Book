import React from "react";

function Navbar(){

    return(
        <>
        <div className="flex-col fixed h-full text-xl bg-pink-300 top-0 p-3">
            {/* Favorite Recipe Icon */}
            <a href="#"><img src="#" alt="" />Favorites</a>
            
            {/* Saved Recipe Icon */}
            <a href="#"><img src="#" alt="" />Saved</a>

            {/* Create Recipe Icon */}
            <a href="#"><img src="#" alt="" />Create Recipe</a>

            {/* Profile Icon For Website */}
            <a href="#"><img src="#" alt="" />Profile</a>
        </div>
            
        </>
    )
}
export default Navbar