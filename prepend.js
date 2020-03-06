const fs = require('fs')
const filepath = './src/assets/main.js'
const data = fs.readFileSync(filepath)
fs.writeFileSync(
  filepath,
  'import "./css/main.css";' +
    '\r\n' +
    'import barba from "@barba/core";' +
    '\r\n' +
    'import {gsap} from "gsap";' +
    '\r\n' +
    data
)

