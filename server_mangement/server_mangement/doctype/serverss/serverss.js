// Copyright (c) 2024, info@bulaal.so and contributors
// For license information, please see license.txt







frappe.ui.form.on('serverss', {
    before_save: function(frm) {
        // Get the current value of expire_date
        let expireDate = frm.doc.expire_date;

        // Check if expireDate is not null or undefined before proceeding
        if (expireDate) {
            // Add one month using Frappe's add_months function
            let newExpireDate = frappe.datetime.add_months(expireDate, 1);

            // Update the form field with the new date
            frm.set_value('expire_date', newExpireDate);
        }
    }
});






// frappe.ui.form.on('serverss', {
//     before_save: function(frm) {
//         // Get the current value of expire_date
//         let expireDate = frm.doc.expire_date;

//         // Get the number of months to add from the form field
//         let monthsToAdd = frm.doc.months_to_add;

//         // Check if expireDate and monthsToAdd are not null or undefined before proceeding
//         if (expireDate && monthsToAdd) {
//             // Add the specified number of months using Frappe's add_months function
//             let newExpireDate = frappe.datetime.add_months(expireDate, monthsToAdd);

//             // Update the form field with the new date
//             frm.set_value('expire_date', newExpireDate);
//         }
//     }
// });



