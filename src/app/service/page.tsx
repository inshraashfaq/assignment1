import React from "react";
import cssStyle from "./service.module.css";

console.log(cssStyle, "CSS-Style");

const ServicePage = () => {
    return (
        <div>
            <h2 className={cssStyle.black}>This is our Service Page</h2>
            <p className={cssStyle.blue}>
               our team specializes in creating visually stunning and highly functonal
               user interfaces. We use the  lastest technologies like Garnative
               ,Next.js
            </p>
            <ul className={cssStyle.green}>
                <li>
                    <b>Ui Web Design</b> - Tailored interfaces that match your brand and 
                    provide a seamless user experience.
                    </li>
                    <li>
                        <b>Responsive</b> - Ensuring your website looks greats and 
                        function perfectly across all devices.
                      </li>
                    </ul>
                 </div>       
    );
};

export default ServicePage;