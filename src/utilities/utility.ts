const _MS_PER_DAY = 1000 * 60 * 60 * 24;

export const dateDiffInDays = (a: Date, b: Date) => {
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
};

export const currencyFormatter = new Intl.NumberFormat('in-ID', {
  style: 'currency',
  currency: 'IDR',
});

export const randomId = () => {
  return Math.random().toString(36).substr(2, 5);
};
