function formatDuration(seconds) {
  if (seconds === 0) return 'now';

  let duration = [];

  if (seconds >= 31536000) {
    const years = Math.trunc(seconds / 31536000);
    if (years === 1) duration.push(years + ' year');
    else duration.push(years + ' years');
    seconds %= 31536000;
  }
  if (seconds >= 86400) {
    const days = Math.trunc(seconds / 86400);
    if (days === 1) duration.push(days + ' day');
    else duration.push(days + ' days');
    seconds %= 86400;
  }
  if (seconds >= 3600) {
    const hours = Math.trunc(seconds / 3600);
    if (hours === 1) duration.push(hours + ' hour');
    else duration.push(hours + ' hours');
    seconds %= 3600;
  }
  if (seconds >= 60) {
    const minutes = Math.trunc(seconds / 60);
    if (minutes === 1) duration.push(minutes + ' minute');
    else duration.push(minutes + ' minutes');
    seconds %= 60;
  }
  if (seconds > 0) {
    if (seconds === 1) duration.push(seconds + ' second');
    else duration.push(seconds + ' seconds');
  }

  return duration.map((time, i, arr) => {
    return (arr.length === 1) ? time : (i === arr.length - 1) ? `and ${time}` : (i === arr.length - 2) ? `${time} ` : `${time}, `;
  }).join('');
}

console.log(formatDuration(3662)); // 1 hour, 1 minute and 2 seconds
console.log(formatDuration(1)); // 1 second
console.log(formatDuration(62)); // 1 minute and 2 seconds
console.log(formatDuration(120)); // 2 minutes
console.log(formatDuration(3600)); // 1 hour
console.log(formatDuration(0)); // now