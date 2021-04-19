import { format } from "date-fns";
import fromUnixTime from "date-fns/fromUnixTime";

const formatDate = (date: number) => {
  const newDate = fromUnixTime(date);
  return format(newDate, "dd MMM yyy");
};

export default formatDate;
