let ISINVALID = false;
let ISCONFIRMPASSWORD = false;

let passwordListener = document.querySelector("#user-password");
let confirmPasswordListener = document.querySelector("#user-confirm-password");


function validatePassword() {
    var newPassword = document.querySelector("#user-password").value;
    var minNumberofChars = 8;
    var maxNumberofChars = 12;
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,12}$/;
    if(newPassword.length < minNumberofChars || newPassword.length > maxNumberofChars){
        
        return false;
    }
    if(!passwordRegex.test(newPassword)) {
        return false;
    }
    return true;
}

passwordListener.addEventListener("input", () => {
    //第一次印出alertWord
    if(!(validatePassword()) && !ISINVALID){
        ISINVALID = !ISINVALID;
        let alertWord = document.createElement("div");
        alertWord.textContent = "* 請輸入8~12位密碼(至少包含一個數字及英文)"
        passwordListener.parentNode.appendChild(alertWord);
    // 如果已經驗證過是對的或是密碼為空，將alertWord清除
    } else if(validatePassword() || document.querySelector("#user-password").value === ''){
        let alertWord = passwordListener.parentNode.querySelector("div");
        if(alertWord) {
            alertWord.remove();
            ISINVALID = !ISINVALID;
        }
    }
});

confirmPasswordListener.addEventListener("input", () => {
    var password = document.querySelector("#user-password").value;
    console.log(password);
    var confirmPassword = confirmPasswordListener.value;
    if(confirmPassword !== password && !ISCONFIRMPASSWORD){
        ISCONFIRMPASSWORD = !ISCONFIRMPASSWORD;
        let alertWord = document.createElement("div");
        alertWord.textContent = "* 確認密碼與密碼不符合";
        confirmPasswordListener.parentNode.appendChild(alertWord);
    }else if(confirmPassword === password || confirmPassword === ''){
        let alertWord = confirmPasswordListener.parentNode.querySelector("div");
        if (alertWord) {
            alertWord.remove();
            ISCONFIRMPASSWORD = !ISCONFIRMPASSWORD;
        }
    }
})