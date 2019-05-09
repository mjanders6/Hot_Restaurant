const { fetch, alert } = window

fetch('/dataArry')
    .then(r => r.json())
    .then(table => {
        document.querySelector('#viewTables').innerHTML = ''
        table.forEach(({ tableNumber, name, email, custID, phone }) => {
            let userDiv = document.createElement('div')
            userDiv.innerHTML = `
            <div class="card-body">
                <ul id="currentTables" class="list-group">
                    <!--Dummy info will should be dynamically added-->
                    <li class="list-group">
                        <h3>Table #${tableNumber}</h3>
                        <hr>
                        <h4>ID: ${custID} </h4>
                        <h4>Name: ${name} </h4>
                        <h4>Email: ${email}</h4>
                        <h4>Phone: ${phone}</h4>
                    </li>    
                </ul>
            </div>
          `
            document.querySelector('#viewTables').append(userDiv)
        })
    })
    .catch(e => console.error(e))
