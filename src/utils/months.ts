type Day = "domingo" | "lunes" | "martes" | "miercoles" | "jueves" | "viernes" | "sabado";

interface NonWorkingDayI {
  day: number;
  title: string;
}

interface MonthI {
  name: string;
  days: number;
  startDay: Day;
  nonWorkingDays: NonWorkingDayI[];
}

const january: MonthI = {
  name: "Enero",
  days: 31,
  startDay: "domingo",
  nonWorkingDays: [{ day: 1, title: "Año nuevo" }],
};

const february: MonthI = {
  name: "Febrero",
  days: 28,
  startDay: "miercoles",
  nonWorkingDays: [
    { day: 20, title: "Carnaval" },
    { day: 22, title: "Carnaval" },
  ],
};

const march: MonthI = {
  name: "Marzo",
  days: 31,
  startDay: "miercoles",
  nonWorkingDays: [{ day: 24, title: "Día Nacional de la Memoria por la Verdad y la Justiciar" }],
};

const abril: MonthI = {
  name: "Abril",
  days: 30,
  startDay: "sabado",
  nonWorkingDays: [
    { day: 2, title: "Día del Veterano y de los Caídos en la Guerra de Malvinas" },
    { day: 7, title: "Viernes Santo" },
  ],
};

const may: MonthI = {
  name: "Mayo",
  days: 31,
  startDay: "lunes",
  nonWorkingDays: [
    { day: 1, title: "Día del Trabajador" },
    { day: 25, title: "Día de la Revolución de Mayo" },
    { day: 26, title: "Feriado Puente Turístico" },
  ],
};

const june: MonthI = {
  name: "Junio",
  days: 30,
  startDay: "jueves",
  nonWorkingDays: [
    { day: 17, title: "Día Paso a la Inmortalidad del General Manuel Belgrano" },
    { day: 19, title: "Feriado Puente Turístico" },
    { day: 20, title: "Día Paso a la Inmortalidad del General Manuel Belgrano" },
  ],
};

const july: MonthI = {
  name: "Julio",
  days: 31,
  startDay: "sabado",
  nonWorkingDays: [{ day: 9, title: "Día de la Independencia" }],
};

const august: MonthI = {
  name: "Agosto",
  days: 31,
  startDay: "martes",
  nonWorkingDays: [
    { day: 21, title: "Paso a la Inmortalidad del Gral. José de San Martín (17/8)" },
  ],
};

const september: MonthI = {
  name: "Septiembre",
  days: 30,
  startDay: "viernes",
  nonWorkingDays: [],
};

const october: MonthI = {
  name: "Octubre",
  days: 31,
  startDay: "domingo",
  nonWorkingDays: [
    { day: 13, title: "Feriado Puente Turístico" },
    { day: 16, title: "Día del Respeto a la Diversidad Cultural (12/10)" },
  ],
};

const november: MonthI = {
  name: "Noviembre",
  days: 30,
  startDay: "miercoles",
  nonWorkingDays: [{ day: 20, title: "Día de la Soberanía Nacional" }],
};

const december: MonthI = {
  name: "Diciembre",
  days: 31,
  startDay: "viernes",
  nonWorkingDays: [
    { day: 8, title: "Día de la Inmaculada Concepción de María" },
    { day: 25, title: "Navidad" },
  ],
};

export const months: MonthI[] = [
  january,
  february,
  march,
  abril,
  may,
  june,
  july,
  august,
  september,
  october,
  november,
  december,
];
