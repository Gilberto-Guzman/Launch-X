// Index signature
const telefonos = {
    casa: {
        pais: "+52",
        area: "552",
        numero: "1522721"
    },
    trabajo: {
        pais: "+1",
        area: "331",
        numero: "1234567"        
    }
}

const telsTypeScript: {
    [k: string] :{
        pais: string,
        area: string,
        numero: string
    }
// } = {}
// } = telefonos

} = {
    casa: {
        pais: "+52",
        area: "552",
        numero: "1522721"
    },
    trabajo: {
        pais: "+1",
        area: "331",
        numero: "1234567"        
    }
}