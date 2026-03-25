import {ValidacionClave} from './modelo';


export const commonPasswords: string[] = [
  "password",
  "123456",
  "qwerty",
  "admin",
  "letmein",
  "welcome",
  "monkey",
  "sunshine",
  "password1",
  "123456789",
  "football",
  "iloveyou",
  "1234567",
  "123123",
  "12345678",
  "abc123",
  "qwerty123",
  "1q2w3e4r",
  "baseball",
  "password123",
  "superman",
  "987654321",
  "mypass",
  "trustno1",
  "hello123",
  "dragon",
  "1234",
  "555555",
  "loveme",
  "hello",
  "hockey",
  "letmein123",
  "welcome123",
  "mustang",
  "shadow",
  "12345",
  "passw0rd",
  "abcdef",
  "123abc",
  "football123",
  "master",
  "jordan23",
  "access",
  "flower",
  "qwertyuiop",
  "admin123",
  "iloveyou123",
  "welcome1",
  "monkey123",
  "sunshine1",
  "password12",
  "1234567890",
];

export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  const mayusculas = /[A-Z]/.test(clave);
  const minusculas = /[a-z]/.test(clave);

  if(!clave || !mayusculas || !minusculas) {
    return {
        esValida: false,
        error: "La clave debe de tener mayúsculas y minúsculas",
    };
}
 return {
    esValida: true,
 }
};



export const tieneNumeros = (clave: string): ValidacionClave => {
  const numeros = /[\d]/.test(clave);
  if(!clave || !numeros) {
    return {
        esValida: false,
        error: "La clave debe de tener números",
    };
  }
  return{
    esValida: true,
  }
};


export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  const caracteres = /[ºª!|"@·#$~%€&¬/()=?¿'¡+*[{}]/.test(clave);
  if (!clave || !caracteres){
    return{
        esValida: false,
        error: "La clave debe de tener caracteres especiales",
    };
  }
  return {
    esValida: true,
  }
};


export const tieneLongitudMinima = (clave: string): ValidacionClave => {
  if(!clave || clave.length < 8){
    return {
        esValida: false,
        error: "La clave debe de tener una longitud mínima de 8 caracteres",
    };
  }
  return {
    esValida: true,
  }
};



export const tieneNombreUsuario = (nombreUsuario: string, clave: string,): ValidacionClave => {
 if(!clave || clave.toLowerCase().includes(nombreUsuario.toLowerCase())) {
    return {
        esValida: false,
        error: "La clave no debe tener el nombre del usuario",
    };
}
return {
    esValida: true,
}
};



export const tienePalabrasComunes = (clave: string, commonPasswords: string[]): ValidacionClave => {
if(!clave || commonPasswords.includes(clave)){
    return{
        esValida: false,
        error: "La clave no debe de contener palabras comunes",
    };
}
return {
    esValida: true,
}
};


