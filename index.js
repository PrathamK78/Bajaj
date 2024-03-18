const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/bfhl', (req, res) => {
const arr = req.body.data;
console.log(arr);

const user = "yogesh_duggar_19062003";

const alphabets = arr.filter(ch => /[a-zA-Z]/.test(ch)).map(ch => ch.toUpperCase());
const oddArr = arr.filter(item => item % 2 !== 0);
const evenArr = arr.filter(item => item % 2 === 0);



const resp = {
    is_success: true,
    user_id: user,
    email:"pratham1054.be21@chitkara.edu.in",
    roll_no:"2110991054",    
    even_numbers: evenArr,
    odd_numbers: oddArr,
    alphabets_uppercase: alphabets
};

res.json(resp);
});

app.listen(port, () => {
console.log(`Server running on port ${port}`);
});




// const axios = require('axios');
// let data1 = '{\r\n "dob": "23022001",\r\n "b_reg_no": "UkExOTExMDMyMDEwMDI3",\r\n "reg_no": "RA1911032010027"\r\n}';

// let config1 = {
// method: 'post',
// maxBodyLength: Infinity,
// url: 'https://bfhldevapigw.healthrx.co.in/bfl-api-challenge/submit?College registration ID=RA1911032010027&College email ID=sn7821@srmist.edu.in',
// headers: {
// 'b_name': 'U3V5YXNoIE5pZ2Ft',
// 'name': 'Suyash Nigam',
// 'b_email': 'c243ODIxQHNybWlzdC5lZHUuaW4=',
// 'email': 'sn7821@srmist.edu.in',
// 'b_college': 'U1JNIEluc3RpdHV0ZSBvZiBTY2llbmNlIGFuZCBUZWNobm9sb2d5',
// 'college': 'SRM Institute of Science and Technology'
// },
// data : data
// };

// axios.request(config)
// .then((response) => {
// console.log(JSON.stringify(response.data));
// })
// .catch((error) => {
// console.log(error);
// });