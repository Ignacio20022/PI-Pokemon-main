export function validateInputs(input, pokemonsNames) {
    const errors = {}

    if(!input.name) errors.name = 'Name is required'
    else if(input.name.length < 3) errors.name = 'Name has to have 3 or more characters'
    else if(input.name.length > 12) errors.name = `Name can't be longer than 12 characters`
    else if(!(/(^[a-zA-Z0-9. -])*$/g).test(input.name)) errors.name = 'Name contains invalid characters'
    else {
        pokemonsNames.map((name) =>{
            if(name.toLowerCase() === input.name.toLowerCase().trim()){
                return errors.name = `${input.name} is already in use`
            }
            else return null
        })
    }

    if(input.img){
        if (input.img.length > 249) errors.img = "The URL can't be longer than 250 characters"
        else if(!(/(http(s?):)([/|.|\w|\s|-])*.(?:jpg|gif|png)/g).test(input.img)) errors.img = "The url is invalid"
    }

    if(input.hp.length === 0) errors.hp = "The health can't be empty (leave 0 if unknown)"
    if(input.hp < 0) errors.hp = "The health can't be negative"
    if(input.hp > 255) errors.hp = "The health can't be higher than 255"

    if(input.attk.length === 0) errors.attk = "The attack can't be empty (leave 0 if unknown)"
    if(input.attk < 0) errors.hp = "The attack can't be negative"
    if(input.attk > 255) errors.attk = "The attack can't be higher than 255"

    if(input.def.length === 0) errors.def = "The defense can't be empty (leave 0 if unknown)"
    if(input.def < 0) errors.hp = "The defense can't be negative"
    if(input.def > 255) errors.def = "The defense can't be higher than 255"
    
    if(input.speed.length === 0) errors.speed = "The speed can't be empty (leave 0 if unknown)"
    if(input.speed < 0) errors.hp = "The speed can't be negative"
    if(input.speed > 255) errors.speed = "The speed can't be higher than 255"

    if(input.height.length === 0) errors.height = "The height can't be empty (leave 0 if unknown)"
    if(input.height < 0) errors.hp = "The height can't be negative"
    if(input.height > 255) errors.height = "The height can't be higher than 255"

    if(input.weight.length === 0) errors.weight = "The weight can't be empty (leave 0 if unknown)"
    if(input.weight < 0) errors.hp = "The weight can't be negative"
    if(input.weight > 255) errors.weight = "The weight can't be higher than 255"

    if(input.types.length === 0) errors.types = "You have to choose at least one type"

    return errors
}