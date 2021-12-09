import { useState, useEffect} from "react";
import "./Api.css";

function Api({page}) {
    const [information, setInformation] = useState([]);

    useEffect(() => {
    fetchData("https://nico1998400.github.io/jsonapi/mydata.json");
    }, []);

    async function fetchData(url) {
      const res = await fetch(url);
      const data = await res.json();
      setInformation(data.records); 
    }

    useEffect(() => {
    //   console.log(information);
    }, [information]);

    return (
      <div className="api-wrapper">
            {information?.map((item) => (
              <p>{item[page]}</p>
              ))}
        </div>
    );
  }
  
  export default Api;