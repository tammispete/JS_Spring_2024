//Homework!
function validateForm(){
    var email = document.forms.emailForm.email.value;
    var comment = document.forms.emailForm.comment.value;

    if(email==null || email.length<6 || email.length > 15 ||email.indexOf("@")===-1 ){
        document.forms.emailForm.email.style.borderColor="red";
        document.getElementById("emailFeedback").innerHTML="Email should be 6-15 letters and have a @ sign";
    } else if(comment.trim()===""||comment.length>50){
        document.forms.emailForm.comment.style.borderColor="red";
        document.getElementById("commentFeedback").innerHTML="Please write something, but under 50 charaters!";
    } else{
        document.forms.emailForm.email.style.borderColor="initial";
        document.getElementById("emailFeedback").innerHTML=" ";
        document.forms.emailForm.comment.style.borderColor="initial";
        document.getElementById("commentFeedback").innerHTML= " ";
        alert("email address is: "+ email +". The comment was: " + comment);
    }
    return false;   

}
function calculateForm(){
    var type = document.getElementById("type").value;
    var years = document.getElementById("years").value;
    var cost = 0;

    if(type === "basic"){
        cost = 10;
    }else if(type === "premium"){
        cost = 15;
    } else if(type==="gold"){
        cost = 20;
    } else if(type==="platinum"){
        cost = 25;
    } 
    if(years > 1){
        cost *= 0.8;
    }

    if(years > 4){
        cost -= 5;
        document.getElementById("surprise").innerHTML="5 years or more! Thank you! You got $5 off!";
    } else {
        document.getElementById("surprise").innerHTML = "";
    }
    document.getElementById("cost").value=cost*years; 
    return false;    
} 
function calculate(){
    var quantity = parseInt(document.getElementById("quantity").value);
    var price = parseFloat(document.getElementById("price").value);
    var shipping = parseFloat(document.getElementById("shipping").value);
    var tax = parseFloat(document.getElementById("tax").value);
    var discount = parseFloat(document.getElementById("discount").value);
    
    var subtotal = quantity*price+shipping;
    var totalBeforeTax = subtotal - discount;
    var totalTax = totalBeforeTax * (tax/100);
    var total = totalBeforeTax + totalTax;

    document.getElementById("total").value = total.toFixed(2);
    
    return false;
}
    var x = document.getElementById("emailInput");

    function showEmailField(){       
        var checkbox = document.getElementById("email");
        if (checkbox.checked){
            x.style.display="block";
            x.value="";
            x.placeholder = "email address here";
        } else {
            x.style.display="none";
        }
    }
    var y = document.getElementById("telephoneInput");
        function showTelephoneField(){       
            var checkbox = document.getElementById("telephone");
            if (checkbox.checked){
                y.style.display="block";
                y.value="";
                y.placeholder = "telephone here +09";
            } else {
                y.style.display="none";
            }
    }
    var z = document.getElementById("smsInput");
        function showSmsField(){       
            var checkbox = document.getElementById("SMS");
            if (checkbox.checked){
                z.style.display="block";
                z.value="";
                z.placeholder = "SMS number here +358";
            } else {
                z.style.display="none";
            }
    }
