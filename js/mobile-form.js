document.getElementById("signUpForms").insertAdjacentHTML('afterbegin',
			`<div class="mobile-form">
        <div class="wrapper">
            <div class="container-mobile-form">
                <h1 class="mobile-form-header">Welcome</h1>
                <form class="form-mobile">
                    <input type="text" placeholder="Username">
                    <input type="password" placeholder="Password">
                    <button type="submit" id="login-button">Login</button>
                </form>
            </div>
        </div>
    </div>
    <h2 class="form-heading">Let us know your preferences</h2>
    <div class="container" id="container">
        <div class="form-container sign-up-container sign-in-container-right">
            <form action="#">
                <h1>Create Account</h1>
                <div class="social-container">
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your email for registration</span>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign Up</button>
            </form>
        </div>
        <div class="form-container sign-in-container sign-in-container-left">
            <form action="#">
                <h1>Sign in</h1>
                <div class="social-container">
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your account</span>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <a href="#">Forgot your password?</a>
                <button class="sign-in-form-desktop">Sign In</button>
            </form>
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h2>Welcome Back!</h2>
                    <p>To keep connected with us please login with your personal info</p>
                    <button class="ghost ghost-left" id="signIn">Sign In</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h2>Hello, Friend!</h2>
                    <p>Enter your personal details and start journey with us</p>
                    <button class="ghost" id="signUp">Sign Up</button>
                </div>
            </div>
        </div>
        </div>
		`);
	