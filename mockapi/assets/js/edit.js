const personId=window.location.search.substring(1);
let url='https://646a0cea03bb12ac2098a95e.mockapi.io/fetch/'+personId;
fetch(url)
.then(res=>res.json())
.then(data=>{
    if ((typeof data)=="object") {
        document.querySelector('#name').value = data.name,
        document.querySelector('#job').value = data.job,
        document.querySelector('#image').value =data.image
    }
    else{
window.location.href="list.html"
    }
})  
.catch(err => console.log(err))


document.querySelector('.call').addEventListener('click', function () {
    const fetched = fetch(url, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",

        },

        body: JSON.stringify({
            name: document.querySelector('#name').value,
            job: document.querySelector('#job').value,
            image: document.querySelector('#image').value,

        }),
    })
    fetched.then(res => {
       if(res.ok){
        window.location.href="list.html"
       }
       else{
        console.log(res);
       }
    }).catch(err => console.log(err))
})


