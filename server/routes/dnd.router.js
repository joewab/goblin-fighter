require('dotenv').config();
const express = require('express');
const router = express.Router();
const axios = require('axios');

API_KEY = process.env.API_KEY

router.get('/', (req, res) => {
        axios({
          method: 'GET',
          url: 'https://www.dnd5eapi.co/api/spells'
        })  
      
})

module.exports = router;
