let email = 'dhilfavpinfo.com';
if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    console.log('valid email address')
}
else{
    console.log('invalid address')
}