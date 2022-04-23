export const fadeInUp = {
  initial: {
    y: -40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
  },
};

export const totalAnimes = 1000;
export const animePerPage = 18;

export const numberOfPages = () => {
  return Math.ceil(totalAnimes / animePerPage);
};

export const formatName = (name: string) => {
  if (name.includes('-')) return name.substring(0, name.indexOf('-'));

  return name;
};

export const formatDesc = (description: string) => {
  if (description.includes('['))
    return description.substring(0, description.indexOf('['));

  return description;
};

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const Upper = (value: string) => {
  return value[0].toUpperCase() + value.substring(1);
};
