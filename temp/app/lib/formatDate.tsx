export const formatDate = (isoDate: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formattedDate: string = new Date(isoDate).toLocaleDateString(
    "en-US",
    options
  );
  return formattedDate;
};