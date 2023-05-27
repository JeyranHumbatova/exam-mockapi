document.querySelector('.call').addEventListener('click', function () {
    const fetched = fetch('https://646a0cea03bb12ac2098a95e.mockapi.io/fetch', {
        method: 'POST',
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
        (res.ok == true)
        {
            document.querySelector('#name').value = '',
            document.querySelector('#job').value = '',
            document.querySelector('#image').value = '',
            alert('sended data!')
        }
    }).catch(err => console.log(err))
})
