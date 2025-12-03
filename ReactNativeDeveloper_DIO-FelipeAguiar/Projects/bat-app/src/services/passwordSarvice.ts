export default function generatePass(){

    let password: string = ''
    let characters:string = 'NADJSKL$@#$!&wodhagwybogk14789847'
    let passwordLength = 8

    for (let index = 0; index < passwordLength; index++){

        password += characters.charAt(Math.floor(Math.random() * characters.length))

    }


    return password
}