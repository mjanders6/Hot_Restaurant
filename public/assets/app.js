const { fetch, alert } = window

fetch('/dataArry')
    .then(r => r.json())
    .then(table => {
        document.querySelector('#viewTables').innerHTML = ''
        table.forEach(({ name, email, custID, phone }) => {
            let userDiv = document.createElement('div')
            userDiv.innerHTML = `
            <div class="card" style="width: 18rem; margin-left: 25pt">
                <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${email}</h6>
                <p class="card-text">${custID}</p>
                <p class="card-text">${phone}</p>
                </div>
            </div>
          `
            document.querySelector('#viewTables').append(userDiv)
        })
    })
    .catch(e => console.error(e))
