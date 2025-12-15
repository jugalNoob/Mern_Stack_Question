🔒 Best (secure for login systems)

import crypto from "crypto";

function secureOTP(length = 4) {
  let otp = "";
  for (let i = 0; i < length; i++) {
    otp += crypto.randomInt(0, 10);
  }
  return otp;
}

console.log(secureOTP());


1::
let optg=Math.random().toString().slice(2 , 6)
console.log(typeof(optg))


2::
const otp = Math.floor(1000 + Math.random() * 9000);
console.log(otp);



✅ 2. Crypto-Secure OTP Generator (Recommended for Login, Banking, Production)

Uses Node.js crypto.randomInt()
This is much more secure than Math.random().

import crypto from "crypto";

function secureOTP(length = 6) {
  let otp = "";
  for (let i = 0; i < length; i++) {
    otp += crypto.randomInt(0, 10); // generates digits 0–9
  }
  return otp;
}

console.log(secureOTP(6)); // Example: 740592

✅ 3. Alphanumeric OTP

Useful for email verification links, promo codes, coupon codes, etc.

function alphaNumericOTP(length = 6) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let otp = "";

  for (let i = 0; i < length; i++) {
    otp += chars[Math.floor(Math.random() * chars.length)];
  }
  return otp;
}

console.log(alphaNumericOTP(8)); // Example: G4K9A2Q7

✅ 4. Fully Custom OTP Generator

You can choose:

digits only

letters only

special characters

mixed characters

function customOTP(length = 6, chars = "0123456789") {
  let otp = "";

  for (let i = 0; i < length; i++) {
    otp += chars[Math.floor(Math.random() * chars.length)];
  }
  return otp;
}

console.log(customOTP(6));                     // digits only
console.log(customOTP(8, "ABCDEF123456"));     // custom set
console.log(customOTP(10, "abc123!@#XYZ"));    // strong mixed
