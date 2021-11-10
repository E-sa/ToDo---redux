//just footer (last box including filters...)
import React from "react";
import CLearCompletd from "./FooterClearCompleted";
import FooterFilters from "./FooterFilters";
import ItemsLeft from "./FooterItemsLeft"





function Footer() {


    return (
        <>
            <li className="each-task" id="last-li-b">

                <ItemsLeft />
                
                {/* for large screen */}
                <span id="filters-span-l">
                    <FooterFilters />
                </span>

                <CLearCompletd />
            </li>

            {/* for small screen */}
            <li id="filters-span-s">
                <div className="each-task" id="last-li-s">
                    <FooterFilters />
                </div>
            </li>
        </>
    )
};



export default Footer;