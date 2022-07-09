window.addEventListener("load", calcul);

function calcul(){

    var tipValue;
    var bill=document.getElementById("bill");
    
    var people=document.getElementById("people");
    
    var tip1 = document.getElementById("number-1");
    tip1.addEventListener("click", function(event) {
        tipValue = tip1.value;
        console.log(tipValue);
        if (people.value >= 1 && bill.value >= 1) {
            var tipAmount = ((bill.value * tipValue) / 100) / people.value;
            document.getElementById("screen").value = tipAmount;
            var total = (bill.value / people.value) + tipAmount;
            document.getElementById("screen-down").value = total;
          event.preventDefault();
        }
    })
    var tip2 = document.getElementById("number-2");
    tip2.addEventListener("click", function(){
        tipValue = tip2.value;
    })
    tip2.addEventListener("click", function(event) {
        if (people.value >= 1 && bill.value >= 1) {
            var tipAmount = ((bill.value * tipValue) / 100) / people.value;
            document.getElementById("screen").value = tipAmount;
            var total = (bill.value / people.value) + tipAmount;
            document.getElementById("screen-down").value = total;
          event.preventDefault();
        }
    })
    var tip3 = document.getElementById("number-3");
    tip3.addEventListener("click", function(){
        tipValue = tip3.value;
    })
    tip3.addEventListener("click", function(event) {
        if (people.value >= 1 && bill.value >= 1) {
            var tipAmount = ((bill.value * tipValue) / 100) / people.value;
            document.getElementById("screen").value = tipAmount;
            var total = (bill.value / people.value) + tipAmount;
            document.getElementById("screen-down").value = total;
          event.preventDefault();
        }
    })
    var tip4 = document.getElementById("number-4");
    tip4.addEventListener("click", function(){
        tipValue = tip4.value;
    })
    tip4.addEventListener("click", function(event) {
        if (people.value >= 1 && bill.value >= 1) {
            var tipAmount = ((bill.value * tipValue) / 100) / people.value;
            document.getElementById("screen").value = tipAmount;
            var total = (bill.value / people.value) + tipAmount;
            document.getElementById("screen-down").value = total;
          event.preventDefault();
        }
    })
    var tip5 = document.getElementById("number-5");
    tip5.addEventListener("click", function(){
        tipValue = tip5.value;
    })
    tip5.addEventListener("click", function(event) {
        if (people.value >= 1 && bill.value >= 1) {
            var tipAmount = ((bill.value * tipValue) / 100) / people.value;
            document.getElementById("screen").value = tipAmount;
            var total = (bill.value / people.value) + tipAmount;
            document.getElementById("screen-down").value = total;
          event.preventDefault();
        }
    })
    var custom = document.getElementById("custom");
    custom.addEventListener("click", function(){
        custom.style.display="none";
        tip6.style.display="block";
    })
    var tip6 = document.getElementById("ipt-custom");
    tip6.addEventListener("focus", function(event){
        tipValue = tip6.value;
    })
    tip6.addEventListener("keypress", function(event) {
        console.log(tipValue);
        if (event.key === "Enter" && people.value >= 1 && bill.value >= 1) {
            var tipAmount = ((bill.value * tipValue) / 100) / people.value;
            document.getElementById("screen").value = tipAmount;
            var total = (bill.value / people.value) + tipAmount;
            document.getElementById("screen-down").value = total;
        }
        else if(event.key === "Enter" && people.value < 1 && bill.value < 1){
            tipValue = tip6.value;
        }
    })
    bill.addEventListener("focusin", function(){
        if(tipValue < 0 && tipValue === "undefined")
        {
           tipValue = tip6.value;
        }
    })
    people.addEventListener("focusin", function(){
        if(tipValue < 0 && tipValue === "undefined")
        {
           tipValue = tip6.value;
        }
    })
    

    bill.addEventListener("click", function(){
        if(bill.value == "0"){
          bill.value="";
        }
      });
      bill.addEventListener("keypress", function(event) {
        if (event.key === "Enter" && people.value >= 1 && bill.value >= 1) {
            var tipAmount = ((bill.value * tipValue) / 100) / people.value;
            document.getElementById("screen").value = tipAmount;
            var total = (bill.value / people.value) + tipAmount;
            document.getElementById("screen-down").value = total;
          event.preventDefault();
        }
        else if(event.key === "Enter" && people.value < 1 && bill.value < 1){
            alert("Entrez une valeur dans les champs et selectionner ou mentionnez votre tip");
            document.getElementById("screen").value = 0;
            document.getElementById("screen-down").value = 0;
        }
      })

    people.addEventListener("click", function(){
        if(people.value == "0")
        {
          people.value="";
        }
        })

    people.addEventListener("focusout", function(){
        if(people.value == "0"){
          people.value = "";
          document.getElementById("zero").style.display= "flex";
        }
        else{
          document.getElementById("zero").style.display= "none";
        }  
      })
      
      people.addEventListener("keypress", function(event) {
        if (event.key === "Enter" && people.value >= 1 && bill.value >= 1) {
            var tipAmount = ((bill.value * tipValue) / 100) / people.value;
            document.getElementById("screen").value = tipAmount;
            var total = (bill.value / people.value) + tipAmount;
            document.getElementById("screen-down").value = total;
          event.preventDefault();
        }
        else if(event.key === "Enter" && people.value < 1 && bill.value < 1){
            alert("Entrez une valeur dans les champs et selectionner ou mentionnez votre tip");
            document.getElementById("screen").value = 0;
            document.getElementById("screen-down").value = 0;
        }
      })
    
      document.addEventListener("keypress", function(event) {
        if(tip6.value > 0){
            tipValue = tip6.value;
        }

        if (event.key === "Enter" && people.value >= 1 && bill.value >= 1) {
            var tipAmount = ((bill.value * tipValue) / 100) / people.value;
            document.getElementById("screen").value = tipAmount;
            var total = (bill.value / people.value) + tipAmount;
            document.getElementById("screen-down").value = total;
          event.preventDefault();
        }
        else if(event.key === "Enter" && people.value < 1 && bill.value < 1){
            alert("Entrez une valeur dans les champs et selectionner ou mentionnez votre tip");
            document.getElementById("screen").value = 0;
            document.getElementById("screen-down").value = 0;
        }
      })
    
      var reset = document.getElementById("reset");
      reset.addEventListener("click", function(){
        tipValue = 0;
        bill.value = 0;
        people.value = 0;
        document.getElementById("screen").value = 0;
        document.getElementById("screen-down").value = 0;
        console.log("yep");
      })
    }    