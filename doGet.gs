function doGet(request) {
  var page = request.parameter.page;
  if (page == 'addSup') {
    return HtmlService.createHtmlOutputFromFile('AddSupplier')
    .setTitle('Add Supplier')
    .setWidth(400)
    .setHeight(300);
  } 
  else if (page == 'updateSup') {
    return HtmlService.createHtmlOutputFromFile('UpdateSupplier')
    .setTitle('Update Supplier Detail')
    .setWidth(400)
    .setHeight(300);
  } 
  else if (page == 'deleteSup') {
    return HtmlService.createHtmlOutputFromFile('DeleteSupplier')
    .setTitle('Delete Supplier')
    .setWidth(400)
    .setHeight(300);
  } 
  else if (page == 'getSup') {
    return HtmlService.createHtmlOutputFromFile('GetSupplier')
    .setTitle('Get Supplier Detail')
    .setWidth(400)
    .setHeight(300);
  } 
  else if (page == 'addItem') {
    return HtmlService.createHtmlOutputFromFile('AddItem')
    .setTitle('Add Item')
    .setWidth(400)
    .setHeight(300);
  } 
  else if (page == 'updateItem') {
    return HtmlService.createHtmlOutputFromFile('UpdateItem')
    .setTitle('Update Item Detail')
    .setWidth(400)
    .setHeight(300);
  } 
  else if (page == 'deleteItem') {
    return HtmlService.createHtmlOutputFromFile('DeleteItem')
    .setTitle('Delete Item')
    .setWidth(400)
    .setHeight(300);
  } 
  else if (page == 'getItem') {
    return HtmlService.createHtmlOutputFromFile('GetItem')
    .setTitle('Get Item Detail')
    .setWidth(400)
    .setHeight(300);
  } 
  else if (page == 'invoices') {
    return HtmlService.createHtmlOutputFromFile('InvoiceForm')
    .setTitle('Create Invoice')
    .setWidth(400)
    .setHeight(300);
  }
    else if (page == 'payroll') {
    return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Payroll Calculator')
    .setWidth(300)
    .setHeight(200);
  }
  else {
    return HtmlService.createHtmlOutputFromFile('Main');
  }
}
