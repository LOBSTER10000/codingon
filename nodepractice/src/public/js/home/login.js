let userId = document.querySelector('#userId');
let userPass =document.querySelector('#userPass');
let submits = document.querySelector('#submits');


submits.addEventListener('click', function(e){
    e.preventDefault();
    const req = {
        userId : userId.value,
        userPass : userPass.value,
    }

    fetch('/login', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(req),

    })
    .then((res)=> res.json)
    .then((res)=>{
        if(res.success){
            location.href='/';
        } else{
            alert(res.msg);
        }
    })
    .catch((err) => {console.error(err)});
});