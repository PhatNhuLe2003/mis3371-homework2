


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
            const dobInput = document.getElementById("dob");

            const maxDate = new Date();
            const minDate = new Date();
            minDate.setFullYear(maxDate.getFullYear() - 120);

                dobInput.max = maxDate.toISOString().split("T")[0];
                dobInput.min = minDate.toISOString().split("T")[0];
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

function validateDOB()
        {
                const dobInput = document.getElementById("dob").value;
                if (!dobInput) return false;

                const dob = new Date(dobInput);
                const today = new Date();

                const minDate = new Date();
                minDate.setFullYear(today.getFullYear() - 120);

                if (dob < minDate)
                        {
                                alert("Date of birth cannot be more than 120 years ago.");
                                return false;
                        }
                if (dob > today)
                        {
                                alert("Date of birth cannot be in the future.");
                                return false;
                        }
                return true;
        }
function validateForm()
        {
                return validatePassword() && formatDOB() && validateDOB();
        }
