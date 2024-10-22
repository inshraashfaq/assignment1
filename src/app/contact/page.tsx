import Link from 'next/link';
import styles from "../contact/contact.module.css";
import React from 'react';


function ContactPage() {
  return (
    <div className={styles.container}>
    <h1 className={styles.header}>this is Contact Page</h1>  
 
 
    <ul className= {styles.list}>
      <li><a href="/contact/contact-us">This is Contact Us Page</a></li>  
      <li><Link href="/">Go to Home Page </Link>      
       </li>
     <li><Link href="/contact">Go to about Page</Link></li>
     <li><Link href="/service">go to Service Page</Link></li>  
    </ul>   
     </div>
   );
 };
 
 export default ContactPage;
 



