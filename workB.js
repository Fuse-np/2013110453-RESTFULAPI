const user = [
    {name: 'Xoo' ,Nickname: 'XYZ' ,hobby: 'play game',postcode: 10540},
    {name: 'Yoo' ,Nickname: 'YXZ' ,hobby: 'read',postcode: 10543},
    {name: 'Zoo' ,Nickname: 'ZXY' ,hobby: 'sleep',postcode: 10542}
]

for(const u of user){
    const showProfile = () => {
        let info1 = `My nickname is `
        let info2 = `My hobby is `
        let info3 = `and my postcode is `
        return `${info1}${u.Nickname} ${info2}${u.hobby} ${info3}${u.postcode}}`
    }    
    console.log(showProfile());
}


