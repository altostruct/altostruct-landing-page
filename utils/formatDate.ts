function pad(value: string, length: number, padding: string) {
  const delta = length - value.length;
  const filler = new Array(delta).fill(padding);
  return [...filler, ...value.split("")].join("");
}

function formatDate(value: string | Date): string {
  if (typeof value === "string") return formatDate(new Date(value));
  else
    return (
      pad(value.getDate().toString(), 2, "0") +
      "/" +
      pad(value.getMonth().toString(), 2, "0") +
      "/" +
      pad(value.getFullYear().toString().slice(2), 2, "0")
    );
}

export function formatDateIntOnly(value: string | Date) {
  const date = typeof value === "string" ? new Date(value) : value;
  let dateInt = (date.getMonth() + 1).toString();
  if (dateInt.length === 1) dateInt = "0" + dateInt;
  return `${date.getFullYear()}-${dateInt}-${date.getDate()}`;
}

export default formatDate;
