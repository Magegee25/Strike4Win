function createInvoice(invoiceId, itemId, quantity, customerEmail) {
  var stockSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('StockManagement');
  var invoiceSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Invoices');
  var stockData = stockSheet.getDataRange().getValues();
  
  for (var i = 1; i < stockData.length; i++) {
    if (stockData[i][0] == itemId) {
      var itemName = stockData[i][1];
      var price = stockData[i][3];
      var total = quantity * price;
      stockSheet.getRange(i+1, 3).setValue(stockData[i][2] - quantity); // Update stock quantity
      invoiceSheet.appendRow([invoiceId, itemId, itemName, quantity, price, total, customerEmail]);
      sendInvoiceEmail(invoiceId, itemId, itemName, quantity, price, total, customerEmail);
      return {
        invoiceId: invoiceId,
        itemId: itemId,
        itemName: itemName,
        quantity: quantity,
        price: price,
        total: total
      };
    }
  }
  Logger.log('Item ID not found');
  return null;
}

function sendInvoiceEmail(invoiceId, itemId, itemName, quantity, price, total, customerEmail) {
  var subject = 'Your Invoice ' + invoiceId;
  var body = 'Thank you for your purchase.\n\n' +
             'Item ID: ' + itemId + '\n' +
             'Item: ' + itemName + '\n' +
             'Quantity: ' + quantity + '\n' +
             'Price: ' + price + '\n' +
             'Total: ' + total + '\n\n' +
             'Best regards,\n' +
             'Your Company';
  MailApp.sendEmail(customerEmail, subject, body);
}