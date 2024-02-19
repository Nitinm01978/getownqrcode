function navigateTo(page) {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `<h1>${page.charAt(0).toUpperCase() + page.slice(1)}</h1>`;

    // Example of adding specific content for "myqrcode" page
    if (page === 'myqrcode') {
        mainContent.innerHTML += `
            <input type="text" id="websiteUrl" placeholder="Enter website URL">
            <button onclick="generateQRCode()">Generate QR Code</button>
            <div id="qrcode"></div>
        `;
    }
}

function generateQRCode() {
    var websiteUrl = document.getElementById("websiteUrl").value;
    if (websiteUrl) {
        document.getElementById("qrcode").innerHTML = ""; // Clear previous QR Code
        new QRCode(document.getElementById("qrcode"), websiteUrl); // Generate new QR Code
    } else {
        alert("Please enter a URL");
    }
}

// Simulate navigating to "Home" on initial load
navigateTo('home');



function navigateTo(page) {
    const mainContent = document.getElementById('main-content');
    
    // Clear the current content
    mainContent.innerHTML = '';

    // Check which page to navigate to and update mainContent accordingly
    switch(page) {
        case 'home':
            mainContent.innerHTML = `
                
            <div class="welcome-section">
            <h1>Welcome to GetOwnQR!</h1>
            <p><strong>Get your own QR codes easily for any URL or text. Navigate to the MyQRCode section to start generating your QR codes instantly.</strong></p>
            <p>To Generate QR code please <a href="javascript:void(0);" onclick="navigateTo('myqrcode')">click here</a></p>
        </div>
        
                
                `;
            break;
        case 'myqrcode':
            mainContent.innerHTML = `
                
            <div class="code">
                <h1>My QR Code</h1>
                <input type="text" id="websiteUrl" placeholder="Enter website URL">
                <button onclick="generateQRCode()">Generate QR Code</button>
                
                 <div id="qrcode"></div>
            </div>
            
            `;
            function resetQRCode() {
                // Clear the QR code div
                document.getElementById('qrcode').innerHTML = '';
                // Optionally reset the website URL input field
                document.getElementById('websiteUrl').value = '';
            }
            
            break;
        case 'contact':
            mainContent.innerHTML = 
            `<div id="contact-form">
            <h2>Contact Us</h2>
            <form>
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
                </div>
                <button type="submit" class="submit-btn">Send Message</button>
            </form>
        </div>
        
            `;
            
            break;
        case 'about':
            mainContent.innerHTML = ` <h2>Our Mission</h2>
            <p><strong>To provide accessible and user-friendly QR generation tools for everyone.</strong></p>
        </section>
        <section class="about-section">
            <h2>Our Vision</h2>
            <p><strong>To be the leading QR solution provider, enhancing connectivity and engagement in the digital age.</strong></p>
        </section>
        <section class="about-section">
            <h2>Meet the Team</h2>
            <div class="team-members">
                <!-- Example of a team member card -->
                <div class="team-member">
                    <img src="assets/img/team1.png" alt="Team Member Name">
                    <img src="assets/img/team.png" alt="Team Member Name">
                    <h3>Team Teraita</h3>
                    <p><strong>We are the Teraitians....!</strong></p>
                </div>
                <!-- Repeat for other team members -->
            </div>
        </section>`;
            
            break;
            case 'login':
                mainContent.innerHTML = `
                    <div class="login-container" id="lpage">
                        <form id="loginForm">
                            <h2>Login to GetOwnQR</h2>
                            <div class="form-group">
                                <label for="login-email">Email:</label>
                                <input type="email" id="login-email" name="email" required>
                            </div>
                            <div class="form-group">
                                <label for="login-password">Password:</label>
                                <input type="password" id="login-password" name="password" required>
                            </div>
                            <button type="button" id="loginButton">Login</button>
                            <p>Don't have an account? <a href="javascript:void(0);" onclick="navigateTo('sign up')">Sign up</a></p>
                        </form>
                    </div>
                `;
                
                // Here we add the event listener to the button instead of form to prevent default form submission
                document.getElementById('loginButton').addEventListener('click', function() {
                    const email = document.getElementById('login-email').value;
                    const password = document.getElementById('login-password').value;
                    
                    // Here, you would handle the login logic, e.g., sending data to a server
                    console.log('Login:', email, password);
                    
                    // Simulate successful login
                    alert('Login successful!');
                });
                break;
            
            // Add a login form or information here
           
            case 'sign up':
                mainContent.innerHTML = `
                    <div class="signup-container">
                        <form id="signupForm">
                            <h2>Sign Up for GetOwnQR</h2>
                            <div class="form-group">
                                <label for="signup-name">Name:</label>
                                <input type="text" id="signup-name" name="name" required>
                            </div>
                            <div class="form-group">
                                <label for="signup-email">Email:</label>
                                <input type="email" id="signup-email" name="email" required>
                            </div>
                            <div class="form-group">
                                <label for="signup-password">Password:</label>
                                <input type="password" id="signup-password" name="password" required minlength="8">
                            </div>
                            <button type="button" id="signupButton">Sign Up</button>
                            <p>Already have an account? <a href="javascript:void(0);" onclick="navigateTo('login')">Login</a></p>
                        </form>
                    </div>
                `;
                
                document.getElementById('signupButton').addEventListener('click', function() {
                    const name = document.getElementById('signup-name').value;
                    const email = document.getElementById('signup-email').value;
                    const password = document.getElementById('signup-password').value;
                    
                    // Here, you would handle the sign up logic, e.g., sending data to a server
                    console.log('Sign Up:', name, email, password);
                    
                    // Simulate successful sign up
                    alert('Sign up successful!');
                });
                break;
            
        default:
            mainContent.innerHTML = `<h1>Page Not Found</h1>`;
    }
}






