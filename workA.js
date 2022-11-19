const profile = {
    Name:"Nattaphong",
    Nickname:"Fuse",
    hobby: "play game",
    address:{
            provience: "Samutprakan",
            postcode:   10540
        }
    }

const showProfile = () => {
    let info1 = `My nickname is `
    let info2 = `My hobby is `
    let info3 = `and my postcode is `
    return `${info1}${profile.Nickname} ${info2}${profile.hobby} ${info3}${profile.address.postcode}}`
}

console.log(showProfile());