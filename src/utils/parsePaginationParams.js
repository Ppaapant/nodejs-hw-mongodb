const parseNumber = (value, defaultValue) => {
  const parsed = Number(value);
  return isNaN(parsed) || parsed <= 0 ? defaultValue : parsed;
};

export const parsePaginationParams = (query) => {
  const { page, perPage } = query;

  const parsedPage = parseNumber(page, 1);
  const parsedPerPage = parseNumber(perPage, 10);

  return {
    page: parsedPage,
    perPage: parsedPerPage,
  };
};
