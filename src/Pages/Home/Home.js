import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Home.css"
import {Alert, AlertTitle, Button, MenuItem, TextField} from "@mui/material"
import Categories from '../../Data/Categories'

const Home = ({name,setName,fetchQuestions}) => {

  const [category, setCateogry] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = ()=>{
      if(!category || !difficulty || !name){
        setError(true);
        return;
      }
      else{
        setError(false);
        fetchQuestions(category,difficulty);
        navigate('/quiz');
      }
  };

  return (
    <div className='content'>
       <div className='settings'>
          <span style={{fontSize:30}}>Quiz Settings</span>

          <div className='settings__select'>
              {error && <Alert severity="error">
                              <AlertTitle>Error</AlertTitle>Please fill all the fields
                          </Alert>}

              {/*Name Field*/} 
              <TextField
                style={{marginBottom:25}} 
                label='Enter your name'
                onChange={(e)=>setName(e.target.value)}
              />

              {/*Category Field*/}   
              <TextField 
                style={{marginBottom:35}}
                select 
                label='Select Category'
                onChange={(e)=>setCateogry(e.target.value)}
                value = {category}
              >{
                  Categories.map((cat) => 
                    <MenuItem key={cat.category} value={cat.value}>
                        {cat.category}
                    </MenuItem>
                  )
               }
              </TextField>

              {/*Difficulty Field*/} 
              <TextField 
                style={{marginBottom:30}}
                select 
                label='Select Difficulity'
                onChange={(e)=>setDifficulty(e.target.value)}
                value = {difficulty}
              >
                  <MenuItem key="Easy" value="easy">
                        Easy
                  </MenuItem>
                  <MenuItem key="Medium" value="medium">
                        Medium
                  </MenuItem>
                  <MenuItem key="Hard" value="Hard">
                        Hard
                  </MenuItem>
              </TextField>

              <Button 
                  variant='contained' 
                  color='primary' 
                  size='large'
                  onClick={()=>handleSubmit()}
              >
                Start Quiz
              </Button>
          </div>  
       </div>

      <img src='/quiz.svg' className='banner' alt='quiz img'/>



    </div>
  )
}

export default Home
