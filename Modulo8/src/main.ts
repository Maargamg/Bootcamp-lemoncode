type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Paciente {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Paciente[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

//APARTADO1:
// Pacientes asignados a pediatria:

const obtenPacientesAsignadosAPediatria = (pacientes: Paciente[]): Paciente[] => {
  let pacientesDePediatria : Paciente [] = [];
  let i = 0;
  while (i < pacientes.length) {
 if(pacientes[i].especialidad === "Pediatra" ) {
   pacientesDePediatria = [...pacientesDePediatria, pacientes[i]];
 }
 i++;
  }
  return pacientesDePediatria;
};

console.log(obtenPacientesAsignadosAPediatria(pacientes));


//Pacientes asignados a pediatria <10 años:

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Paciente[]): Paciente[] => {
  let pacientesPediatraMenoresDeDiez : Paciente [] = [];
  let i = 0;
  while ( i < pacientes.length) {
  if(pacientes[i].especialidad === "Pediatra" && pacientes[i].edad <= 10) {
    pacientesPediatraMenoresDeDiez = [...pacientesPediatraMenoresDeDiez, pacientes[i]];
  }
  i++;
  }
  return pacientesPediatraMenoresDeDiez;
};

console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

//APARTADO2:

/*Queremos activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco
 superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados:*/

const activarProtocoloUrgencia = (pacientes: Paciente[]): boolean => {
  let activarProctolo = false;
  let i = 0;
  while(i < pacientes.length) {
  if(pacientes[i].frecuenciaCardiaca >= 100 && pacientes[i].temperatura >= 39) {
    activarProctolo = true;
    break;
}
i++;
  }
    return activarProctolo;
};

console.log("Activar protocolo de urgencia", activarProtocoloUrgencia(pacientes));

//APARTADO3:

//Reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia:


const reasignaPacientesAMedicoFamilia = (pacientes: Paciente[]): Paciente[] => {
  let reasignarPacientes : Paciente[] = [];
  let i = 0;
  while(i < pacientes.length) {
    if(pacientes[i].especialidad === "Pediatra") {
      reasignarPacientes = [...reasignarPacientes, pacientes[i]];
    }
    i++;
  }
  return reasignarPacientes;

}

const pacientesReasignados = (pacientes: Paciente[]): Paciente[] => {
  const reasignarPacientes = reasignaPacientesAMedicoFamilia(pacientes);
  let nuevoListadoPacientes : Paciente[] = [];
  let i = 0;
  while(i < pacientes.length) {
    if(pacientes[i].especialidad === "Medico de familia") {
      nuevoListadoPacientes = [...nuevoListadoPacientes, pacientes[i], ...reasignarPacientes];
    }
    i++;
  }
  return nuevoListadoPacientes;
 }

 console.log(pacientesReasignados(pacientes));

//APARTADO4:

/*Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados),
 comprobar si en la lista hay algún paciente asignado a pediatría*/

const hayPacientesDePediatria = (pacientes: Paciente[]): boolean => {
let i = 0;
while (i < pacientes.length) {
  if(pacientes[i].especialidad === "Pediatra"){
    return true;
  }
  i++;
  }
  return false;
};

console.log("¿Hay pacientes de pediatria?", hayPacientesDePediatria(pacientes));

//OPCIONAL:

/*Queremos calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, 
y lo que están asignados a Pediatría y a cardiología*/



interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (pacientes: Paciente[]): NumeroPacientesPorEspecialidad => {
const pacientesPorEspecialidad : NumeroPacientesPorEspecialidad = { 
  medicoDeFamilia: 0,
  pediatria: 0,
  cardiologia: 0,
}
let i = 0;
while(i < pacientes.length) {
  if(pacientes[i].especialidad === "Pediatra") {
    pacientesPorEspecialidad.pediatria++;
  }else if (pacientes[i].especialidad === "Cardiólogo"){
    pacientesPorEspecialidad.cardiologia++;
  }else if(pacientes[i].especialidad === "Medico de familia"){
    pacientesPorEspecialidad.medicoDeFamilia++;
  }
  i++;
}
return pacientesPorEspecialidad;
};

console.log(cuentaPacientesPorEspecialidad(pacientes));




