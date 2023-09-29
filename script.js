<<<<<<< HEAD
function beforeSubmit() {
    let datePicker = document.getElementById('date-of-birth');
    let hiddenDate = document.getElementById('Date_of_Birth__c');

      

    let formattedDate = new Date(datePicker.value + " ").toLocaleDateString("en-US");
    hiddenDate.value = formattedDate;
}


    function timestamp() {
         var response = document.getElementById("g-recaptcha-response");
          if (response == null || response.value.trim() == "") {
            var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
            elems["ts"] = JSON.stringify(new Date().getTime());
            document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems);
         } 
    } 
    
    setInterval(timestamp, 500); 
    
=======
function beforeSubmit() {
    let datePicker = document.getElementById('date-of-birth');
    let hiddenDate = document.getElementById('Date_of_Birth__c');

      

    let formattedDate = new Date(datePicker.value + " ").toLocaleDateString("en-US");
    hiddenDate.value = formattedDate;
}


    function timestamp() {
         var response = document.getElementById("g-recaptcha-response");
          if (response == null || response.value.trim() == "") {
            var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
            elems["ts"] = JSON.stringify(new Date().getTime());
            document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems);
         } 
    } 
    
    setInterval(timestamp, 500); 
    
>>>>>>> 432413668b951a7c66099e5acc4ac3ad17e34860
