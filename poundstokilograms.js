function addNumbers() {
    // INPUT
    let number1 = document.getElementById("number1").value;
    
    // PROCESSING
    //	convert the input strings to numbers using parafloat;
    
    

    number1 = parseFloat(number1);
    number2 = 0.454;
    
    
    // add the tow nmubers together and store in my output variable
    let sum = number1 * number2;

    // OUTPUT
    document.getElementById("Kilogram").innerHTML = "The sum <strong>is</strong> " + sum+ "!";
    
    
  }

