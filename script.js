


function showDate()     
        {
            const d = new Date();
            document.getElementById("today").innerHTML =
                d.toLocaleDateString('en-US', 
                {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                }
            );
        }
        function validatePassword()     
            {
                const pw = document.querySelector('input[name="password"]').value;
                const cpw = document.querySelector('input[name="confirm_password"]').value;

                        if (pw !== cpw) 
                        {
                          alert("Passwords do not match.");
                          return false;
                        }
                        return true;
  }
     function formatDOB()
     {
         const dobInput = document.getElementById("dob");
         if (!dobInput.value) return true;

         const parts = dobInput.value.split("-");
         if (parts.length !==3)
         {
             alert("Please enter Date of Birth in MM/DD/YYYY format.");
             return false;
         }

         const yyyy = parts[0];
         const mm = parts[1];
         const dd = parts[2];

         dobInput.type = "text";
         dobInput.value = `${mm}/${dd}/${yyyy}`;

         return true;
     }
    function validateForm()
        {
            return validatePassword() && formatDOB();
        }
