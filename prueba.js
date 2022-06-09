// Variable de retorno, por defecto esta en true... es decir, es valido
var ErrorReporting = true;

// Si no se pasa parametro, RunAll esta en true, por lo que validaria todos los campos
var RunAll = false;

if (ControlName == null) {
    RunAll = true;
}

if (ControlName == "Customer Name" || RunAll == true) {
    var fieldValue = VV.Form.GetFieldValue("Customer Name");
    var validationType = "Blank";
    var isValid = VV.Form.Global.CentralValidation(fieldValue, validationType);

    if (isValid == false) {
        // Marca error en el campo
        VV.Form.SetValidationErrorMessageOnField("Customer Name", "Un valor para el nombre es necesario.");
        // Pone la variable de retorno como false
        ErrorReporting = false;
    } else {
        // Si es valido, borra error de campo
        VV.Form.ClearValidationErrorOnField("Customer Name");
    }
}

if (ControlName == "Phone" || RunAll) {
    if (VV.Form.Global.CentralValidation(VV.Form.GetFieldValue("Phone"), "Phone") == false) {
        VV.Form.SetValidationErrorMessageOnField("Phone", "A phone number must be entered in the format of (XXX) XXX-XXXX.");
        ErrorReporting = false;
    } else {
        VV.Form.ClearValidationErrorOnField("Phone");
    }
}

//Date must be today or after today
if (ControlName == "Date" || RunAll) {
    if (VV.Form.Global.CentralDateValidation(VV.Form.GetFieldValue("Date"), "TodayorAfter") == false) {
        VV.Form.SetValidationErrorMessageOnField("Date", "The date must be today or after today.");
        ErrorReporting = false;
    } else {
        VV.Form.ClearValidationErrorOnField("Date");
    }
}

if (ControlName == "Email" || RunAll) {
    if (VV.Form.Global.CentralValidation(VV.Form.GetFieldValue("Email"), "Email") == false) {
        VV.Form.SetValidationErrorMessageOnField("Email", "Please enter the Email in the form of a valid Email Address.");
        ErrorReporting = false;
    } else {
        VV.Form.ClearValidationErrorOnField("Email");
    }
}

if (ControlName == "Droplist_Language" || RunAll) {
    if (VV.Form.Global.CentralValidation(VV.Form.GetFieldValue("Droplist_Language"), "DDSelect") == false) {
        VV.Form.SetValidationErrorMessageOnField("Droplist_Language", "A value needs to be selected.");
        ErrorReporting = false;
    } else {
        VV.Form.ClearValidationErrorOnField("Droplist_Language");
    }
}

if (ControlName == "Other_Language" || RunAll) {
    if (VV.Form.Global.CentralValidation(VV.Form.GetFieldValue("Other_Language"), "Blank") == false) {
        VV.Form.SetValidationErrorMessageOnField("Other_Language", "A value needs to be entered.");
        ErrorReporting = false;
    } else {
        VV.Form.ClearValidationErrorOnField("Other_Language");
    }
}

if (ControlName == "Droplist_timeonCall" || RunAll) {
    if (VV.Form.Global.CentralValidation(VV.Form.GetFieldValue("Droplist_timeonCall"), "DDSelect") == false) {
        VV.Form.SetValidationErrorMessageOnField("Droplist_timeonCall", "A value needs to be selected.");
        ErrorReporting = false;
    } else {
        VV.Form.ClearValidationErrorOnField("Droplist_timeonCall");
    }
}
if (ControlName == "Droplist People to address" || RunAll) {
    if (VV.Form.Global.CentralValidation(VV.Form.GetFieldValue("Droplist People to addressl"), "DDSelect") == false) {
        VV.Form.SetValidationErrorMessageOnField("Droplist People to address", "A value needs to be selected.");
        ErrorReporting = false;
    } else {
        VV.Form.ClearValidationErrorOnField("Droplist_timeonCall");
    }
}
if (ControlName == "Droplist Staff Knoledgeable" || RunAll) {
    if (VV.Form.Global.CentralValidation(VV.Form.GetFieldValue("Droplist Staff Knoledgeable"), "DDSelect") == false) {
        VV.Form.SetValidationErrorMessageOnField("Droplist Staff Knoledgeable", "A value needs to be selected.");
        ErrorReporting = false;
    } else {
        VV.Form.ClearValidationErrorOnField("Droplist Staff Knoledgeable");
    }
}
if (ControlName == "Droplist service tone" || RunAll) {
    if (VV.Form.Global.CentralValidation(VV.Form.GetFieldValue("Droplist service tone"), "DDSelect") == false) {
        VV.Form.SetValidationErrorMessageOnField("Droplist service tone", "A value needs to be selected.");
        ErrorReporting = false;
    } else {
        VV.Form.ClearValidationErrorOnField("Droplist service tone");
    }
}
if (ControlName == "Question1" || RunAll) {
    if (VV.Form.Global.CentralValidation(VV.Form.GetFieldValue("Question1"), "NumberOnly") == false) {
        VV.Form.SetValidationErrorMessageOnField("Question1", "A number needs to be entered.");
        ErrorReporting = false;
    } else {
        VV.Form.ClearValidationErrorOnField("Question1");
    }
}
if (ControlName == "Question2" || RunAll) {
    if (VV.Form.Global.CentralValidation(VV.Form.GetFieldValue("Question2"), "NumberOnly") == false) {
        VV.Form.SetValidationErrorMessageOnField("Question2", "A number needs to be entered.");
        ErrorReporting = false;
    } else {
        VV.Form.ClearValidationErrorOnField("Question2");
    }
}
if (ControlName == "Question3" || RunAll) {
    if (VV.Form.Global.CentralValidation(VV.Form.GetFieldValue("Question3"), "NumberOnly") == false) {
        VV.Form.SetValidationErrorMessageOnField("Question3", "A number needs to be entered.");
        ErrorReporting = false;
    } else {
        VV.Form.ClearValidationErrorOnField("Question3");
    }
}
if (ControlName == "Question4" || RunAll) {
    if (VV.Form.Global.CentralValidation(VV.Form.GetFieldValue("Question4"), "NumberOnly") == false) {
        VV.Form.SetValidationErrorMessageOnField("Question4", "A number needs to be entered.");
        ErrorReporting = false;
    } else {
        VV.Form.ClearValidationErrorOnField("Question4");
    }
}
if (ControlName == "Textbox_comments" || RunAll) {
    if (VV.Form.Global.CentralValidation(VV.Form.GetFieldValue("Textbox_comments"), "Blank") == false) {
        VV.Form.SetValidationErrorMessageOnField("Textbox_comments", "A value needs to be entered.");
        ErrorReporting = false;
    } else {
        VV.Form.ClearValidationErrorOnField("Textbox_comments");
    }
}

return ErrorReporting;
