const { fetch, alert } = window

let tables = _ => {
    fetch('/dataArry')
        .then(r => r.json())
        .then(table => {
            document.querySelector('#viewTables').innerHTML = ''
            table.forEach(({ tableNumber, name, email, custID, phone }) => {
                let userDiv = document.createElement('div')
                userDiv.innerHTML = `
            <div class="card-body">
            <div class="card-header b">
                <h3>Table #${tableNumber}</h3>
            </div>
                <ul id="currentTables" class="list-group">
                    <!--Dummy info will should be dynamically added-->
                    <li class="list-group">
                        <hr>
                        <h4>ID: ${custID} </h4>
                        <h4>Name: ${name} </h4>
                        <h4>Email: ${email}</h4>
                        <h4>Phone: ${phone}</h4>
                    </li>    
                </ul>
                <button id="deleteUser" data-uid="${tableNumber}">Delete user</button>
            </div>
          `
                document.querySelector('#viewTables').append(userDiv)
            })
        })
        .catch(e => console.error(e))
}

document.addEventListener('click', e => {
    console.log(e.target.dataset.uid)
    if (e.target.id === 'deleteUser') {
        fetch(`/dataArry/${e.target.dataset.uid}`, {
            method: 'DELETE'
        })
            .then(_ => {
                alert('User deleted.')
                tables()
            })
            .catch(e => console.error(e))
    }
})


tables()