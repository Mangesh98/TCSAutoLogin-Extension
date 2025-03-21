// // Define a function that performs the auto-fill for email and captcha.
// function runAutofill() {
//     // alert("Running autofill!");
    
//     // Autofill the email field (selector: input with name 'loginID')
//     const emailField = document.querySelector("input[name='loginID']");
//     if (emailField) {
//       // Simulate user interaction for the email field.
//       emailField.focus();
//       emailField.value = "mangeshkokare.scoe.comp@gmail.com"; // Replace with your actual email
//       // Dispatch events so that the website detects the change.
//       emailField.dispatchEvent(new Event('input', { bubbles: true }));
//       emailField.dispatchEvent(new Event('change', { bubbles: true }));
//       emailField.blur();
//     //   console.log("Email field filled.");
//     } else {
//     //   console.error("Email field not found.");
//       alert("Email field not found.");
//     }
  
//     // Autofill the captcha field (selector: input with name 'userCaptcha')
//     const captchaField = document.querySelector("input[name='userCaptcha']");
//     if (captchaField) {
//       // Get the captcha text from the label inside the div with class 'col-sm-2'
//       const captchaLabel = document.querySelector("div.col-sm-2 label");
//       if (captchaLabel) {
//         const captchaText = captchaLabel.textContent.trim();
//         captchaField.focus();
//         captchaField.value = captchaText;
//         captchaField.dispatchEvent(new Event('input', { bubbles: true }));
//         captchaField.dispatchEvent(new Event('change', { bubbles: true }));
//         captchaField.blur();
//         // console.log("Captcha field filled with:", captchaText);
//       } else {
//         // console.error("Captcha label not found.");
//         alert("Captcha label not found.");
//       }
//     } else {
//     //   console.error("Captcha field not found.");
//       alert("Captcha field not found.");
//     }

//   // After autofilling, click on the specific "Next" button
//   // This button is identified by its class and unique attribute data-ng-click="validateLogin('L');"
//   const nextButton = document.querySelector("button.greenButton[data-ng-click=\"validateLogin('L');\"]");
//   if (nextButton) {
//     nextButton.click();
//     // console.log("Next button clicked.");
//     // alert("Next button clicked.");
//   } else {
//     alert("Next button not found.");
//   }

//   }
// function autoClickTrackMyApplication() {
//   // Use a delay to allow the homepage to load (adjust the delay if necessary)
//   setTimeout(() => {
//     // Find all list items that might contain the link.
//     const liElements = document.querySelectorAll("li.ng-scope");
//     let found = false;
//     liElements.forEach((li) => {
//       const aElement = li.querySelector("a.ng-binding");
//       if (aElement && aElement.textContent.trim() === "Track My Application") {
//         aElement.click();
//         // console.log("Track My Application link clicked.");
//         // alert("Track My Application link clicked.");
//         found = true;
//       }
//     });
//     if (!found) {
//       console.error("Track My Application element not found.");
//       alert("Track My Application element not found.");
//     }
//   }, 1000); // 1-second delay
// }
  
//   // Listen for messages from the popup
//   chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

//     if (request.type === "runAutofill") {
//       runAutofill();
//       sendResponse({ status: "Autofill executed" });
//     } else if (request.type === "fillOTP") {
//     //   alert("Running fillOTP!");
//       // Use either the name attribute "loginOtp" or the id "loginOtp" for the OTP field.
//       const otpField = document.querySelector("input[name='loginOtp']") || document.getElementById("loginOtp");
//       if (otpField) {
//         otpField.focus();
//         otpField.value = request.otp;
//         otpField.dispatchEvent(new Event('input', { bubbles: true }));
//         otpField.dispatchEvent(new Event('change', { bubbles: true }));
//         otpField.blur();
//         // console.log("OTP field filled with:", request.otp);
//         // alert("OTP field filled with: " + request.otp);
        
   
//         const submitButton = document.getElementById("verifyLoginOTPBtn");
//         if (submitButton) {
//           submitButton.click();
//         //   console.log("Submit button clicked.");
//         //   alert("Submit button clicked.");
//         } else {
//         //   console.error("Submit button not found.");
//           alert("Submit button not found.");
//         }
//         autoClickTrackMyApplication();
//         sendResponse({ status: "OTP filled" });
//       } else {
//         // console.error("OTP field not found.");
//         alert("OTP field not found.");
//         sendResponse({ status: "OTP field not found" });
//       }
//     }
//   });
  



// Function to click the login button when it appears.
function observeAndClickLoginButton() {
  const observer = new MutationObserver((mutations, obs) => {
    const loginButton = document.querySelector("td[data-ng-click=\"loginCall('ncp');\"] a.updatesClick");
    if (loginButton) {
      // console.log("Login button found via MutationObserver.");
      loginButton.click();
      // alert("Login button clicked automatically.");
      obs.disconnect();
      // Wait a bit for the form to render before autofilling.
      setTimeout(runAutofill, 1000);
    }
  });

  // Observe changes in the entire body.
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

// Define a function that performs the auto-fill for email and captcha.
function runAutofill() {
  // alert("Running autofill!");

  // Autofill the email field (selector: input with name 'loginID')
  const emailField = document.querySelector("input[name='loginID']");
  if (emailField) {
    emailField.focus();
    emailField.value = "youremail@gmail.com"; // Replace with your actual email
    emailField.dispatchEvent(new Event('input', { bubbles: true }));
    emailField.dispatchEvent(new Event('change', { bubbles: true }));
    emailField.blur();
  } else {
    alert("Email field not found.");
  }

  // Autofill the captcha field (selector: input with name 'userCaptcha')
  const captchaField = document.querySelector("input[name='userCaptcha']");
  if (captchaField) {
    const captchaLabel = document.querySelector("div.col-sm-2 label");
    if (captchaLabel) {
      const captchaText = captchaLabel.textContent.trim();
      captchaField.focus();
      captchaField.value = captchaText;
      captchaField.dispatchEvent(new Event('input', { bubbles: true }));
      captchaField.dispatchEvent(new Event('change', { bubbles: true }));
      captchaField.blur();
    } else {
      alert("Captcha label not found.");
    }
  } else {
    alert("Captcha field not found.");
  }
  
  // Click the Next button.
  const nextButton = document.querySelector("button.greenButton[data-ng-click=\"validateLogin('L');\"]");
  if (nextButton) {
    nextButton.click();
    // console.log("Next button clicked.");
    // alert("Next button clicked.");
  } else {
    alert("Next button not found.");
  }
}

// Automatically start observing as soon as the script loads.
if (window.location.href.indexOf("https://nextstep.tcs.com/campus/#/") === 0) {
  // Debug log to ensure the script is running.
  // console.log("Target URL detected. Starting observer for login button...");
  observeAndClickLoginButton();
}

// Listen for messages from the popup.
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // console.log("Message received in content script:", request);
  
  if (request.type === "runAutofill") {
    runAutofill();
    sendResponse({ status: "Autofill executed" });
  } else if (request.type === "fillOTP") {
    // alert("Running fillOTP!");
    const otpField = document.querySelector("input[name='loginOtp']") || document.getElementById("loginOtp");
    if (otpField) {
      otpField.focus();
      otpField.value = request.otp;
      otpField.dispatchEvent(new Event('input', { bubbles: true }));
      otpField.dispatchEvent(new Event('change', { bubbles: true }));
      otpField.blur();
      // console.log("OTP field filled with:", request.otp);
      // alert("OTP field filled with: " + request.otp);
      
      const submitButton = document.getElementById("verifyLoginOTPBtn");
      if (submitButton) {
        submitButton.click();
      } else {
        alert("Submit button not found.");
      }
      autoClickTrackMyApplication();
      sendResponse({ status: "OTP filled" });
    } else {
      alert("OTP field not found.");
      sendResponse({ status: "OTP field not found" });
    }
  }
});

// New function to automatically click the "Track My Application" link after OTP submission.
function autoClickTrackMyApplication() {
  setTimeout(() => {
    const liElements = document.querySelectorAll("li.ng-scope");
    let found = false;
    liElements.forEach((li) => {
      const aElement = li.querySelector("a.ng-binding");
      if (aElement && aElement.textContent.trim() === "Track My Application") {
        aElement.click();
        // console.log("Track My Application link clicked.");
        // alert("Track My Application link clicked.");
        found = true;
      }
    });
    if (!found) {
      console.error("Track My Application element not found.");
      // alert("Track My Application element not found.");
    }
  }, 1000);
}
