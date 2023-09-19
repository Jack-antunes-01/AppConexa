export const parseCreatedAt = (value: string | undefined) => {
  if (!value) return '';

  const dateSplit = value.split(' ');
  const date = dateSplit[0].split('-').reverse().join('/');
  const time = dateSplit[1];
  return `${date} ${time}`;
};
