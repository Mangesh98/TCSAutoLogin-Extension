// Handler for the AutoFill Login button
document.getElementById("autofillButton").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { type: "runAutofill" }, (response) => {
        console.log(response.status);
      });
    });
  });
  
  // Handler for the Fill OTP button
  document.getElementById("fillOtpButton").addEventListener("click", () => {
    const otp = document.getElementById("TcsExtensionOtp").value;
    // console.log("OTP entered:", otp);
    
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { type: "fillOTP", otp: otp }, (response) => {
        console.log(response.status);
      });
    });
  });
  