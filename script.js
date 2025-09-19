document.addEventListener('DOMContentLoaded', function () {
    const cardContainer = document.getElementById('card-container');
    
    const showSignupBtn = document.getElementById('show-signup-btn');
    const forgotPasswordLink = document.getElementById('forgot-password-link');
    
    const showSigninBtnFromSignup = document.getElementById('show-signin-btn-from-signup');
    const showSigninBtnFromForgot = document.getElementById('show-signin-btn-from-forgot');

    // Switch to Sign Up
    showSignupBtn.addEventListener('click', (e) => {
        e.preventDefault();
        cardContainer.className = 'relative w-full show-signup';
    });

    // Switch to Forgot Password
    forgotPasswordLink.addEventListener('click', (e) => {
        e.preventDefault();
        cardContainer.className = 'relative w-full show-forgot';
    });

    // Switch back to Sign In (from Sign Up)
    showSigninBtnFromSignup.addEventListener('click', (e) => {
        e.preventDefault();
        cardContainer.className = 'relative w-full show-signin';
    });

    // Switch back to Sign In (from Forgot Password)
    showSigninBtnFromForgot.addEventListener('click', (e) => {
        e.preventDefault();
        cardContainer.className = 'relative w-full show-signin';
    });
});
