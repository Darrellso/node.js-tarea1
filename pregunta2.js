const envVariables = process.env;

Object.keys(envVariables).forEach(key => {
  console.log(`${key}: ${envVariables[key]}`);
});
