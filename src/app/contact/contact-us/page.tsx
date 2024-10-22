import React from 'react'
import CssStyle from "./contact=us.module.css"

console.log(CssStyle,"Css-Style")

const ContactUs= () => {
  return (
    <div>
      <h3 className={CssStyle.brown}>This is our contact us page </h3>  
    </div>  
  );
};

export default ContactUs;
