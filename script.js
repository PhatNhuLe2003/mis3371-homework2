


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

         function formatDOB()
         {
                 return true;
         }        
     }

function validateDOB()
        {
                const dobInput = document.getElementById("dob").value;
                if (!dobInput) 
                {
                        alert("Please enter your date of birth.");
                        return false;
                }
                

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
window.onload = function()
{
        showDate();
        
document.querySelector('input[name="phone"]').addEventListener('input', function(e)
        {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length >= 6)
                        e.target.value = value.slice(0,3) + '-' + value.slice(3,6) + '-' + value.slice(6,10);
                                else if (value.length >= 3)
                                        e.target.value = value.slice(0,3) + '-' + value.slice(3);
                else
                    e.target.value = value;                    
        });
};                                                              
