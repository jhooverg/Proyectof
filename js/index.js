const fetchData = async (URL) => {
    try {
        const response = await fetch(URL, {})
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

const APINFL = 'http://nflarrest.com/api/v1/team'

const mostrarLeagueNFL = (LeagueNFL) => {
    const contenido = document.getElementById('contenedorNFL')
    LeagueNFL.map( (teamNFL) => {
        contenido.innerHTML = contenido.innerHTML + `
            <tr>
            <td>${teamNFL.Team_preffered_name}</td>
            <td>${teamNFL.Team_city}</td>
            <td>${teamNFL.Team_Conference_Division}</td>
            </tr>
        `
    } )
}

const funcionNFL = async () => {
    let datos = await fetchData(APINFL)
    mostrarLeagueNFL(datos)
}

funcionNFL()


const APIItaly = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Italy'

const mostrarLeagueItaly = (LeagueItaly) => {
    const contenido = document.getElementById('contenedorItaly')
    LeagueItaly.map( (teamItaly) => {
        contenido.innerHTML = contenido.innerHTML + `
        <div class="col-12 col-md-2 col-sm-12">
            <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
                <img src="${teamItaly.strTeamBadge}" class="card-img-top" alt="${teamItaly.idTeam}">
                <div class="card-body">
                <h5 class="card-title">${teamItaly.strTeam}</h5>
                <p class="card-text">${teamItaly.strLeague}</p>
                </div>
            </div>
        </div>
        `
    } )
}

const funcionItaly = async () => {
    let datos = await fetchData(APIItaly)
    mostrarLeagueItaly(datos.teams)
    console.log(datos)
}


funcionItaly()