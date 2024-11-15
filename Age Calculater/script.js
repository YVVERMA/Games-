let btn = document.getElementById('btn');
btn.addEventListener('click', btn1);

function btn1() {
    let birthday = document.getElementById('birthday').value;
    let result = document.getElementById('result');
    if (birthday === "") {
        result.innerHTML = 'Please enter your date of birth';
    } else {
        let d = new Date();
        let dob = new Date(birthday);
        let currentYear = d.getFullYear();
        let birthYear = dob.getFullYear();

        let totalYear = currentYear - birthYear;
        result.innerHTML = totalYear;
    }
}