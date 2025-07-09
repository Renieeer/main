    // btn 2
    function myFunction() {
        let input = document.getElementById("feedback-input");
        let value = input.value
        if (value !== ""){
            document.getElementById("feedback-output").innerHTML= value +" :>"+ "Thank you for responding";
        }
        else {
            document.getElementById("feedback-output").innerHTML= "fill-up the form"
        }
        }

    // btn 4
    function toggleNextBtn() {
        const name = document.getElementById('name').value;
        const nextBtn = document.getElementById('constraint-btn');
        const valueofthis = name.trim();
    
        if (valueofthis !== "") {
            nextBtn.disabled = false;
            nextBtn.style.backgroundColor = "green"; 
            document.getElementById("show").innerHTML = "The button is enabled";
        } else {
            nextBtn.disabled = true;
            nextBtn.style.backgroundColor = "gray"; 
            document.getElementById("show").innerHTML = "The button is disable";
        }    
    }

    //btn5   
    function openChest() {
        const chest = document.getElementById("chest");
        chest.style.display = "block";
    }
    // btn7
    function validateForm() {
      const emailInput = document.getElementById("email").value.trim();
      const errorMessage = document.getElementById("submit-btn");
    
      if (emailInput === "") {
        errorMessage.style.display = "block"; 
        
        return false;
      } else {
        errorMessage.style.display = "none"; 
        alert("fill up the form to continue")
        return true; 
      }
    }
    //btn-11
      function showMessage() {
        document.getElementById('simple').style.display = 'block';
      }
      // btn 9
      function openModal() {
        document.getElementById("modal").style.display = "block";
      }
    
      function closeModal() {
        document.getElementById("modal").style.display = "none";
      }
    // btn 12 
   

      window.onload = function() {
        document.getElementById("fillBtn").addEventListener("click", function() {
          document.getElementById("name").value = "Manongsong Reneir";
        });
      };

    
    // btn 8
    function quickFill8() {
      document.getElementById("name").value = "dranreb Melendrez";
    }
    

    