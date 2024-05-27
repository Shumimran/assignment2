"use strict";
function login(identifier, password, rememberme) {
    if (typeof rememberme === 'boolean') {
        //handle user name and password with remember me option
        return `Log in with identifier ${identifier} and rememberme ${rememberme}; `;
        // handle user name and password log in
    }
    else {
        return ` Log in with user name ${identifier}`;
    }
}
let result1 = login("shum_imran", "password123"); // Logs in with username
let result2 = login("shum_imran@example.com", "password123", true); // Logs in with email and remember me
console.log(result1);
console.log(result2);
