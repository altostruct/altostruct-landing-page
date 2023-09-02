function formatDate(value: string | Date) {
  if (typeof value === "string")
    return new Date(value).toDateString().slice(4, 15);
  else return value.toDateString().slice(4, 15);
}

export function formatDateIntOnly(value: string | Date) {
  const date = typeof value === "string" ? new Date(value) : value;
  let dateInt = (date.getMonth() + 1).toString();
  if (dateInt.length === 1) dateInt = "0" + dateInt;
  return `${date.getFullYear()}-${dateInt}-${date.getDate()}`;
}

export default formatDate;
