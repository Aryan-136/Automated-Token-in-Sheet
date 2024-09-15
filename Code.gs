function assignFoodTokenNumber(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Form Responses 1'); // Replace with actual sheet name

  // Check if the sheet exists
  if (!sheet) {
    Logger.log("Sheet not found! Check the sheet name.");
    return;
  }

  var lastRow = sheet.getLastRow(); // Get the last row where the form response was added
  
  // Add "Auto Number" column if it doesn't exist
  if (sheet.getRange(1, 1).getValue() !== "Auto Number") {
    sheet.insertColumnBefore(1); // Insert a new column before column 1
    sheet.getRange(1, 1).setValue("Auto Number"); // Add column title
  }
  
  // Get the last assigned token (in case there are previous form responses)
  var lastToken = sheet.getRange(lastRow - 1, 1).getValue();
  
  var newTokenNumber;
  
  if (lastRow === 1 || lastToken === "") {
    // If there are no tokens yet, start with THMFOOD001
    newTokenNumber = 1;
  } else {
    // Extract the number part of the last token and increment it
    newTokenNumber = parseInt(lastToken.match(/\d+/)[0]) + 1;
  }
  
  // Format the new token with leading zeros (e.g., THMFOOD001, THMFOOD002)
  var newToken = "THMFOOD" + ("000" + newTokenNumber).slice(-3);
  
  // Assign the new token to the new response (in the last row)
  sheet.getRange(lastRow, 1).setValue(newToken);
}
