export const convertDate = (dateString: any) => {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return formattedDate;
};
