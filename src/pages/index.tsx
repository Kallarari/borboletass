'use client'
import axios from "axios";
import React from "react";

// import { Container } from './styles';

const pages: React.FC = () => {
    function handleMakeRequisi(){
        axios.get('/api/db')
    }
  return (
    <div>
      <h1 onClick={handleMakeRequisi}>PAGE </h1>
    </div>
  );
};

export default pages;
