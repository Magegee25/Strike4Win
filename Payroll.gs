function calculatePayroll() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Payroll');
  var data = sheet.getDataRange().getValues();
  var results = [];

  for (var i = 1; i < data.length; i++) {
    var hoursWorked = data[i][2];
    var hourlyRate = data[i][3];
    var overtimeHours = data[i][4];
    var overtimeRate = data[i][5];
    var totalPay = (hoursWorked * hourlyRate) + (overtimeHours * overtimeRate);
    if (hourlyRate < 144) {
      totalPay *= 0.9;
    }
    sheet.getRange(i + 1, 7).setValue(totalPay);
    results.push({
      employeeId: data[i][0],
      name: data[i][1],
      totalPay: totalPay,
      email: data[i][7] // Store email in the results for later use
    });
  }

  return results;
}

function sendPayrollEmails() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Payroll');
  var data = sheet.getDataRange().getValues();

  for (var i = 1; i < data.length; i++) {
    var employeeId = data[i][0];
    var name = data[i][1];
    var totalPay = data[i][6]; // Assuming total pay is in the 7th column
    var email = data[i][7];
    sendPayrollEmail(employeeId, name, totalPay, email);
  }
}

function sendPayrollEmail(employeeId, name, totalPay, email) {
  var subject = 'Your Payroll Details';
  var body = 'Dear ' + name + ',\n\n' +
             'Here are your payroll details:\n\n' +
             'Employee ID: ' + employeeId + '\n' +
             'Total Pay: ' + totalPay + '\n\n' +
             'Best regards,\n' +
             'Your Company';
  MailApp.sendEmail(email, subject, body);
}

