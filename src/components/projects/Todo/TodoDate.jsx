import { useEffect, useState } from "react" ;

export const TodoDate = () => {

     // * TODO DATE AND TIME
    
    // * STATE TO SET DATE AND TIME 
    const [dateTime , setDateTime] = useState("");

    useEffect(() => {
        const interval =  setInterval(() => {
        const now = new Date();
        const formattedDate = now.toLocaleDateString();
        const formattedTime = now.toLocaleTimeString();

        setDateTime(`${formattedDate} - ${formattedTime}`) ;
    } , 1000);
      
      return () =>  clearInterval(interval);

    } , []);

    return(
        <h2 className="date-time">{dateTime}</h2>
    );

}