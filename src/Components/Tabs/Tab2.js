import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAPI } from "../../store/action";
import Button from '@mui/material/Button';
import  User from './User'
const Tab2 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
 const data = useSelector((state) => state.data);
 console.log(data)
  const handleClick = () => {
    navigate("/Tab3");
  };
  useEffect(()=>{
    dispatch(fetchAPI());
  },[])

  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}} className="mt-10">
     
      {data?.length> 0 && (
        <ul style={{display:"flex",gap:'20px',justifyContent:'center'}}>
          {data.map(user => (
            <User user_data={user}/>
          ))}
        </ul>
      )}
       <Button variant="contained" color="success" onClick={handleClick} style={{marginTop:'3em'}}>
        Success
      </Button>
    </div>
  );
};

export default Tab2;
