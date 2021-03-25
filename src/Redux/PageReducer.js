const initialState = {
    messagesPeople: [
        { name: 'Oleg', id: 0, usersPhoto:'https://scontent.fiev9-1.fna.fbcdn.net/v/t1.0-9/96589892_852958135226289_9180315968964919296_n.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=tK6bDDXhwJIAX8Gfdrs&_nc_ht=scontent.fiev9-1.fna&oh=d844f7f6783b7c4506da131ea0c78c10&oe=5FFF5DFE'},
        { name: 'Lena', id: 1, usersPhoto:'https://new.discovergermany.com/wp-content/uploads/2019/10/Lena-2019-CMS-Source2_WEB.jpg' },
        { name: 'Max', id: 2, usersPhoto:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/MAX_Schneider_2019_by_Glenn_Francis.jpg/1200px-MAX_Schneider_2019_by_Glenn_Francis.jpg' },
    ],
    
}
const PageReducer = (state = initialState, action) => {
    return state
}

export default PageReducer;