import axios, { Axios } from 'axios';
import { useEffect, useState, useRef } from 'react';

function StartButton() {
  const [file, setFile] = useState("");
  const [firstpass, setFirstpass] = useState(true);
  const fileInputRef = useRef();

  useEffect(() => {
    if(!firstpass){
      send();
    }
    setFirstpass(false);
  },[file])

  const handleChange = (event) => {
    const file1 = event.target.files[0]
    setFile(file1);
  }

  const send = event => {
    const data = new FormData();
    data.append("file", file);

    axios.post("http://localhost:3000/upload", data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
  
  return (
    <div>
      <button className='bg-green-500 px-6 py-2 rounded-full shadow m-2' onClick={()=>fileInputRef.current.click()}>
        Upload File
      </button>
      <input type="file" enctype='multipart/form-data' ref={fileInputRef} onChange={handleChange} hidden/>
    </div>
  );
}

export default StartButton;
