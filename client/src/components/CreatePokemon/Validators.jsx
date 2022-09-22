export default function validate(input) {
    const errors = {}

    if(!input.name) errors.name = 'Name is required'
    else if(input.name.length < 3) errors.name = 'Name has to have 3 or more characters'
    else if(input.name.length > 12) errors.name = `Name can't be larger than 12 characters`
    else if(!/^[a-zA-Z0-9. -]*$/.test(input.name)) errors.name = 'Name is invalid'

    // if(!)

    return errors

}
