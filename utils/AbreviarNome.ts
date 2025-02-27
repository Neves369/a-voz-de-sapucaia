// @ts-nocheck
export const  abridgedControl = (fullName: string, limit: number) =>  {
    if (fullName.length > limit) {
        return toAbridged(fullName);
    }
    return fullName;
}


function toAbridged(fullName: string) { 
    const token = '.';
    const separator = ' ';
    const names = removePrepositions(fullName).split(separator);
    const firstName = names[0];
    const secoundName = names[1];
    let surnames = '';
    names
        .filter((name, index) => index)
        .map(name => surnames += `${separator}${name.charAt()}${token}`);
    return `${firstName} ${secoundName} ${surnames.toUpperCase().replace(`${surnames[1]}.`, "")}`;
}

function removePrepositions(fullName) {
    return fullName.replace(/\ dos|\ das|\ dos|\ das|\ de|\ d\'/gi, '');
}