let arr = [];
let arr2 = [];
let obj;
let div1;
let singUpInput;
let obj2;
let i;
let k;
function showSignUpInput() {
    div1 = document.getElementById("div1")
    div1.innerHTML = `
        <button id="Signup" onclick="Signup()" type="submit">SIGNUP</button> 
 `
   singUpInput = document.getElementById("sign-Up");
    singUpInput.innerHTML = `
<input id="name" type="text" placeholder="Type your Name"><br><br>
    <input id="fatherName" type="text" placeholder="Type your FatherName"><br><br>
    <input id="age" type="number" placeholder="Type your Age"><br><br>
    <input id="email" type="email" placeholder="Type your Email"><br><br>
    <input id="password" type="text" placeholder="Type your password"><br><br> 
                <button id="Signup" onclick="Signup()" type="submit">SIGNUP</button> 

`
}
let j;
function Signup() {
    let name = document.getElementById("name");
    let fatherName = document.getElementById("fatherName");
    let age = document.getElementById("age");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    obj = {
        name: name.value,
        fatherName: fatherName.value,
        age: age.value,
        password: password.value,
        email: email.value,
    }
    name.value = ""
    fatherName.value = ""
    age.value = ""
    password.value = ""
    email.value = ""

    for (i in obj) {
        if (obj[i] === "") {
            alert("Type a value")
            return
            break;
        }
    }

    arr.push(obj);
    console.log(arr);
    for (j = 0;j < arr.length;j++) {
        if (arr[j].email === email.value) {
            alert("Type a Correct Email")
        }
    }

}

function showLoginInput() {
    let div2 = document.getElementById("div2")
    div2.innerHTML = `
          <button id="login" onclick="login()" type="submit">LOGIN</button> 


 `
    let loginInput = document.getElementById("login-");
    loginInput.innerHTML = `
    <input id="email2" type="email" placeholder="Type your Email"><br><br>
    <input id="password2" type="text" placeholder="Type your password"><br><br>
            <button id="login" onclick="login()" type="submit">LOGIN</button> 
 `
    singUpInput.style.display = "none"
}

function login() {
    let email2 = document.getElementById("email2")
    let password2 = document.getElementById("password2")
    obj2 = {
        password2: password2.value,
        email2: email2.value,
    }
    for (k in obj2) {
        if (obj2[k] === "") {
            alert("Type a value")
            return
            break;
        }
    }
    arr2.push(obj2);
    console.log(arr2);

    if (arr2[j].email2 === arr[j].email && arr2[j].password2 === arr[j].password) {
        alert("SUCCESSFULLY")
    } else {
        alert("NOT SUCCESSFULLY")
    }
}