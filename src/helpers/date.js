export const shortDate = (date) => {
  const dateObj = new Date(date);
  let month = dateObj.toLocaleDateString(getNavigatorLanguage(), {
    month: "long",
  });
  let year = dateObj.toLocaleDateString(getNavigatorLanguage(), {
    year: "numeric",
  });
  return `${month}, ${year}`;
};

const getNavigatorLanguage = () => {
  if (navigator.languages && navigator.languages.length) {
    return navigator.languages[0];
  } else {
    return (
      navigator.userLanguage ||
      navigator.language ||
      navigator.browserLanguage ||
      "en"
    );
  }
};
