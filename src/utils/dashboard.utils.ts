export function generate(baseline: number, increment: number): number {
  const min = baseline;
  const max = baseline + increment;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getDayCount(startDate: Date): number {
  const currentDate = new Date();
  const millisecondsPerDay = 1000 * 60 * 60 * 24; // Number of milliseconds in a day
  const elapsedMilliseconds = currentDate.getTime() - startDate.getTime();
  const elapsedDays = Math.floor(elapsedMilliseconds / millisecondsPerDay);
  return elapsedDays;
}

export function formatDate(date: Date): string {
  const daysOfWeek = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const dayOfWeek = daysOfWeek[date.getDay()];
  const dayOfMonth = date.getDate();
  const month = months[date.getMonth()];

  return `${dayOfWeek}, ${dayOfMonth} de ${month}`;
}
