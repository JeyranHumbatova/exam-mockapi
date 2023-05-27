const tbody = document.querySelector('tbody');
function getLastestVersion() {
    fetch('https://646a0cea03bb12ac2098a95e.mockapi.io/fetch')
        .then(res => res.json())
        .then(data => {
            tbody.innerHTML = '';
            data.forEach(el => {
                tbody.innerHTML += `<tr>
                <td>${el.id}</td>
                <td><img src="${el.image}" width="50"></td>
                <td>${el.name}</td>
                <td>${el.job}</td>
                <td><a href="edit.html?${el.id}" class="btn btn-info edit">Edit</a></td>
                <td><button class="btn btn-danger delete">Delete</button></td>
            </tr>`
            })
        })
        .catch(err => alert(err));
}
getLastestVersion();


// document.addEventListener("click", function (e) {
//     const isdelete = e.target.closest(".delete");
//     if (isdelete) {
//         const fName = isdelete.parentElement.parentElement.children[2].innerText;
//         Swal.fire({
//             title: fName + ' silinsinmi?',
//             text: "Geri ala bilməyəcəksiniz",
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'Hə!'
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 fetch('https://646a0cea03bb12ac2098a95e.mockapi.io/fetch/' + isdelete.parentElement.parentElement.children[0].innerText, {
//                     method: 'DELETE'
//                 })
//                     .then(res => {
//                         if (res.ok) {
//                             Swal.fire(
//                                 'Deleted!',
//                                 'Your file has been deleted.',
//                                 'success'
//                             )
//                             getLastestVersion();
//                         }
//                     })
//             }
//         })
//     }
// });

document.addEventListener("click", function (e) {
    const isDelete = e.target.closest(".delete"); // Or any other selector.
    if (isDelete) {
        const fName = isDelete.parentElement.parentElement.children[2].innerText;
        Swal.fire({
            title: fName + ' silinsinmi?',
            text: "Geri ala bilməyəcəksiniz",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Hə!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch('https://646a0cea03bb12ac2098a95e.mockapi.io/fetch/' + isDelete.parentElement.parentElement.children[0].innerText, {
                    method: 'DELETE'
                })
                .then(res => {
                    if (res.ok) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        getLastestVersion();
                    }
                })
            }
        })
    }
});