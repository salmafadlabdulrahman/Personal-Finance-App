export const formatNumber = (val: number) => {
  const formattedNumber = val.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formattedNumber;
};

export const convertDate = (transDate: string) => {
  const date = new Date(transDate);
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);

  const formattedDateWithComma = formattedDate.replace(
    /(\w{3}) (\d{4})/,
    "$1, $2"
  );
  return formattedDateWithComma;
};

/*{transaction.amount.toString()[0] === "-" ? "-" : ""}$
            {Math.abs(transaction.amount).toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })} */

