export function formatDate(date: Date) {
  function padZero(n: number) {
    return n < 10 ? "0" + n : n;
  }

  const year = date.getFullYear();
  const month = padZero(date.getMonth() + 1);
  const day = padZero(date.getDate());

  return `${year}/${month}/${day}`;
}
