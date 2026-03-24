


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
                        if (!pw || !cpw)
                        {
                                  alert("Password fields cannot be empty.");
                                  return false;      
                        }
                        if (pw !== cpw) 
                        {
                                  alert("Passwords do not match.");
                                  return false;
                        }
                        return true;
            }
function formatDOB()
         {
                 return true;
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
                today.setHours(0,0,0,0);
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
                return validatePassword() && validateDOB();
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

function showReview()
{
        let content = "";

        const first = document.querySelector('[name="first_name"]').value;
        const mi = document.querySelector('[name="middle_initial"]').value;
        const last = document.querySelector('[name="last_name"]').value;
        content += `<strong>Name:</strong> ${first} ${mi} ${last}<br>`;

        const dob = document.getElementById("dob").value;
        content += `<strong>DOB:</strong> ${dob}<br>`;

        const email = document.querySelector('[name="email"]').value;
        const phone = document.querySelector('[name="phone"]').value;
        content += `<strong>Email:</strong> ${email}<br>`;
        content += `<strong>Phone:</strong> ${phone}<br>`;

        const address = document.querySelector('[name="address1"]').value;
        const city = document.querySelector('[name="city1"]').value;
        const state = document.querySelector('[name="state1"]').value;
        const zip = document.querySelector('[name="zip1"]').value;
        content += `<strong>Address:</strong> ${address}, ${city}, ${state} ${zip}<br>`;

        const gender = document.querySelector('input[name="gender"]:checked');
        content += `<strong>Gender:</strong> ${gender ? gender.value : ""}<br>`;

        const insurance = document.querySelector('input[name="insurance"]:checked');
        content += `<strong>Insurance:</strong> ${insurance ? insurance.value : ""}<br>`;

