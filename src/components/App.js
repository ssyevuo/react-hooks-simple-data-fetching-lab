// create your App component here
import React, {useState, useEffect} from "react";

function App() {
    const [image, setImage] = useState(null);

    //fetch data using the useEffect url provided
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => {
                setImage(data.message);
            });
    }, []);
    
    //JSX code
    return (
        <>
            {image ? <img src={image} alt="A Random Dog" /> : <p>Loading...</p>}
        </>
    );

}

export default App;