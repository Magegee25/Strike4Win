function addItem(itemId, itemName, quantity, price, supplierId) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('StockManagement');
  sheet.appendRow([itemId, itemName, quantity, price, supplierId]);
}

function updateItem(itemId, newQuantity) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('StockManagement');
  var data = sheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    if (data[i][0] == itemId) {
      sheet.getRange(i+1, 3).setValue(newQuantity);
      return;
    }
  }
}

function deleteItem(itemId) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('StockManagement');
  var data = sheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    if (data[i][0] == itemId) {
      sheet.deleteRow(i+1);
      return;
    }
  }
}

function getItem(itemId) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('StockManagement');
  var data = sheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    if (data[i][0] == itemId) {
      return data[i];
    }
  }
  return null;
}
