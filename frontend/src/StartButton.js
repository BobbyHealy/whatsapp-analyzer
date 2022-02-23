import axios, { Axios } from 'axios';
import { useState, useRef } from 'react';

function StartButton() {
  const [file, setFile] = useState();
  const [name, setName] = useState();
  const fileInputRef = useRef();

  const handleChange = (event) => {
    const file1 = event.target.files[0]
    setFile(file1);
    setName("Name");
  }

  const send = event => {
    const data = new FormData();
    data.append("name", name);
    data.append("file", file);

    axios.post("http://localhost:3000/upload", data)
      .then(res => console.log(res))
      .catch(err => console.log(err));

    // axios.post("https://httpbin.org/anything", data)
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err));
  }
  
  return (
    <div>
      <button onClick={()=>fileInputRef.current.click()}>
        Custom File Input Button
      </button>
      <button onClick={send}>
        submit!
      </button>
      <input type="file" enctype='multipart/form-data' ref={fileInputRef} onChange={handleChange} hidden/>
    </div>
  );
}

export default StartButton;
