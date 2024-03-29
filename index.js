const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.post("/bfhl", (req, res) => {
  const arr = req.body.data;
  console.log(arr);

  const user = "pratham_kapoor_19062003";

  const alphabets = arr
    .filter((ch) => /[a-zA-Z]/.test(ch))
    .map((ch) => ch.toUpperCase());
  const oddArr = arr.filter((item) => item % 2 !== 0);
  const evenArr = arr.filter((item) => item % 2 === 0);

  const resp = {
    is_success: true,
    user_id: user,
    email: "pratham1054.be21@chitkara.edu.in",
    roll_no: "2110991054",
    even_numbers: evenArr,
    odd_numbers: oddArr,
    alphabets_uppercase: alphabets,
  };

  res.json(resp);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
