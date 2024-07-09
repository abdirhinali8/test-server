frappe.ui.form.on("Server Expense", {
    // When the 'Cust' field changes
    cust: function(frm) {
        updateTotal(frm);
    },
    refresh: function(frm) {
      
        frm.fields_dict['expence_acc'].get_query = function() {
            return {
                filters: {
                    root_type: ['in', ['Expense']]
                }
            };
        };

        frm.fields_dict['acc_paid'].get_query = function() {
            return {
                filters: {
                    account_type: ['in', ['Cash', 'Bank']]
                }
            };
        };
    },
    // When the 'Month' field changes
    month: function(frm) {
        updateTotal(frm);
    }


    


});



// Function to update the 'Total' field based on 'Month' and 'Cust' fields
function updateTotal(frm) {
    if (frm.doc.month && frm.doc.cust) {
        frm.set_value('total', frm.doc.month * frm.doc.cust);
    } else {
        frm.set_value('total', 0);  // Handle default or error cases
    }


    

}



frappe.ui.form.on('Server Expense', {
    // Replace 'Server Expense' with your actual DocType name

    // Example function to initiate Journal Entry creation
    make_journal_entry: function(frm) {
        frappe.call({
            method: 'create_journal_entry',
            // Replace with the server-side function to create Journal Entry
            args: {
                docname: frm.docname
                // Pass any required arguments here
            },
            callback: function(response) {
                if (response.message) {
                    frappe.msgprint('Journal Entry created successfully');
                    // Optionally, perform any additional actions after creation
                } else {
                    frappe.msgprint('Failed to create Journal Entry');
                }
            }
        });
    }
});




