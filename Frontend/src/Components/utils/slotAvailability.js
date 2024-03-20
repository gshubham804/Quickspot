export const slotAvailability = (date, from, to) => {
  // if date, from ,to is empty it means slot is free
  if (!date || !from || !to) {
    return true;
  }

  const [day, month, year] = date.split("/");
  const [fromHours, fromMinutes] = from.split(":");
  const [toHours, toMinutes] = to.split(":");

  // Create Date objects for date, from time, and to time
  const currentDate = new Date();
  const slotDate = new Date(year, month - 1, day);
  const startTime = new Date(year, month - 1, day, fromHours, fromMinutes);
  const endTime = new Date(year, month - 1, day, toHours, toMinutes);

  // Check if the slot date is in the past
  if (slotDate > currentDate) {
    return false;
  }
  // here, we used 24 hours clock, check "to" is more than current time then slot is booked
  if (currentDate > endTime) {
    return false;
  }

  return true;
};
