import { useState, useEffect } from "react";
import web3 from 'web3';
import React from 'react'

const form = () => {
    const detectCUrrentProvider = () => {
        let provider;
        if (window.ethereum) {
            provider = window.ethereum;
        } else if (window.web3) {
            provider = window.web3.currentProvider;
        }
        else {
            console.log("Non-ethereum browser detected. you should install Metamask");
        }
        return provider;
    };

  return (
      <div className="app">
          <div className="app-header">
              <h1>
                  React dApp authentication with React, web3.js and Metamask
              </h1>
          </div>
      
    </div>
  )
}

export default form
