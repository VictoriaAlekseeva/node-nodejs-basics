const parseArgs = () => {
    const args = process.argv.slice(2).reduce((acc, item, index, args) => {
        if (item.startsWith('--')) acc.push(`${item} is ${args[index + 1]}`)
        return acc;
    }, []).join(', ')

    console.log(args)
};

parseArgs();