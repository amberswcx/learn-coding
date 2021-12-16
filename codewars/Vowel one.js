// 1st solution
function vowelOne(s) {
  return s.toLowerCase().replace(/[^aeiou]/g,'0').replace(/\D/g,'1');
}

// 2nd solution
/* i flag without toLowerCase*/