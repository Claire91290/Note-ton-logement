function doGet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Réponses");
  const rows = sheet.getDataRange().getValues();
  const header = rows[0];
  const result = {};

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const entry = Object.fromEntries(row.map((v, j) => [header[j], v]));
    const addr = entry.address;
    if (!result[addr]) {
      result[addr] = { lat: entry.lat, lng: entry.lng, duration: entry.duration, criteria: {}, count: 0 };
    }
    const keys = Object.keys(entry).filter(k => ["secteur", "acces", "interieur", "exterieur", "loyer"].includes(k));
    keys.forEach(k => {
      result[addr].criteria[k] = (result[addr].criteria[k] || 0) + Number(entry[k]);
    });
    result[addr].count++;
  }

  for (let addr in result) {
    for (let c in result[addr].criteria) {
      result[addr].criteria[c] /= result[addr].count;
    }
  }

  return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Réponses");
  const data = JSON.parse(e.postData.contents);
  sheet.appendRow([data.address, data.lat, data.lng, data.duration, data.housingType, data.general_comment, data.secteur, data.acces, data.interieur, data.exterieur, data.loyer]);
  return ContentService.createTextOutput("OK");
}