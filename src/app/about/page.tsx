import Link from 'next/link';
import styles from "../about/about.module.css";

function Aboutpage() {
  return (
    <div className={styles.container}>
   <h2 className={styles.header}>this is About Page</h2>  


   <ul className= {styles.list}>
     <li><a href="/about/about-us">This is About us Page</a></li>  
      <li><Link href="/">GO to Home Page</Link>
      </li>
    <li><Link href="/contact">Go to Contact Page</Link></li>
    <li><Link href="/service">go to Service Page</Link></li>  
   </ul>   
    </div>
  );
};

export default Aboutpage;
