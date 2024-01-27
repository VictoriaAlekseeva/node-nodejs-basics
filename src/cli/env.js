const parseEnv = () => {
    const envVariables = process.env;
    const prefixVariablesRSS = Object.entries(envVariables).filter(entry => entry[0].startsWith('RSS_'))
    const prefixVariablesFormatted = prefixVariablesRSS.map(entry => entry.join('=')).join('; ')
    console.log(prefixVariablesFormatted);
}

parseEnv();