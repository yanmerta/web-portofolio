const express = require("express");
const bodyParser = require("body-parser");
const XLSX = require("xlsx");
const fs = require("fs");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/submit-form", (req, res) => {
  const { name, email, address, phoneNumber, message } = req.body;
  const data = [[name, email, address, phoneNumber, message]];

  // Baca file Excel jika sudah ada
  let existingData = [];
  if (fs.existsSync("contacts.xlsx")) {
    const workbook = XLSX.readFile("contacts.xlsx");
    existingData = XLSX.utils.sheet_to_json(
      workbook.Sheets[workbook.SheetNames[0]]
    );
  }

  // Gabungkan data baru dengan data yang sudah ada
  const combinedData = existingData.concat(data);

  // Buat workbook baru dan tulis data ke dalamnya
  const ws = XLSX.utils.json_to_sheet(combinedData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Contacts");
  XLSX.writeFile(wb, "contacts.xlsx");

  res.send("Message sent and data saved!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
