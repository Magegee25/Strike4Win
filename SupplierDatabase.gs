function addSupplier(supplierId, supplierName, rating, details) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('SupplierDatabase');
  sheet.appendRow([supplierId, supplierName, rating, details]);
}

function updateSupplier(supplierId, newRating, newDetails) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('SupplierDatabase');
  var data = sheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    if (data[i][0] == supplierId) {
      sheet.getRange(i + 1, 3).setValue(newRating);
      sheet.getRange(i + 1, 4).setValue(newDetails);
      return;
    }
  }
}

function deleteSupplier(supplierId) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('SupplierDatabase');
  var data = sheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    if (data[i][0] == supplierId) {
      sheet.deleteRow(i + 1);
      return;
    }
  }
}

function getSupplier(supplierId) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('SupplierDatabase');
  var data = sheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    if (data[i][0] == supplierId) {
      return data[i];
    }
  }
  return null;
}



