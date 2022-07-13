export const getFullYear = () => {
  let current_year = new Date().getFullYear();
  return current_year;
};

export const getFooterCopy = (isIndex) => {
  if (isIndex === true) {
    return "Tr-ED";
  } else {
    return "Tr-ED Dashboard";
  }
};
