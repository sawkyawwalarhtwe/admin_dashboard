import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './new.scss'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from 'react';

function New({inputs,title}) {
  const [file,setFile] = useState('');
  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1 className='title'>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file): "https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?k=20&m=1357365823&s=612x612&w=0&h=ZH0MQpeUoSHM3G2AWzc8KkGYRg4uP_kuu0Za8GFxdFc="} alt="" />
          </div>
          <div className="right">
            <form>
            <div className="formInput">
                <label htmlFor='File'>Image: <DriveFolderUploadIcon className='icon'/></label>
                <input 
                type='file' 
                id='File' 
                onChange={e=>setFile(e.target.files[0])} 
                style={{display:"none"}}
                />
              </div>
              {inputs.map((inputs) =>(
                <div className="formInput" key={inputs.key}>
                  <label>{inputs.label}</label>
                  <input type={inputs.type} placeholder={inputs.placeholder} />
                </div>
              )
              )}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New