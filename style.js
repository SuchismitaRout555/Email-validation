     

        document.addEventListener("DOMContentLoaded", function () {
            document.querySelector(".continue-btn").addEventListener("click", function () {
                let email = document.getElementById("email").value.trim();
                const emailPattern = /^[a-zA-Z0-9._%+-]+@marmeto\.com$/;
                let phone = document.getElementById("phone").value.trim();
        
                if (!validateEmail(email)) {
                    alert("Please enter a valid email.");
                    return;
                }
        
                if (!validatePhone(phone)) {
                    alert("Please enter a valid phone number.");
                    return;
                }
        
                document.getElementById("step1").style.display = "none";
                document.getElementById("step2").style.display = "block";
            });
        
            document.querySelector(".confirm-btn").addEventListener("click", function () {
                let otpInputs = document.querySelectorAll(".otp-inputs input");
                let otpCode = "";
                otpInputs.forEach(input => otpCode += input.value);
        
                if (otpCode.length !== 4) {
                    alert("Please enter a valid 4-digit OTP.");
                    return;
                }
        
                document.getElementById("step2").style.display = "none";
                document.getElementById("step3").style.display = "block";
        
                let userName = document.getElementById("email").value.split("@")[0]; // Extract name from email
                document.getElementById("user-name").textContent = userName;
            });
        
            document.querySelector(".done-btn").addEventListener("click", function () {
                alert("Verification complete!");
                location.reload(); 
                document.querySelectorAll(".otp-inputs input").forEach((input, index, array) => {
                    input.addEventListener("input", function () {
                        if (this.value.length === 1 && index < array.length - 1) {
                            array[index + 1].focus();
                        }
                    });
                });
            });
        });
    
        function validateEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            
        }
    
        function validatePhone(phone) {
            return /^[0-9]{10}$/.test(phone);
        }