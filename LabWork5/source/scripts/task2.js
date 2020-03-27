const isHoriz = (array) =>  !array.flatMap(
    elem => elem.flatMap(
        el => el == elem[0])).some(
            e => e === false);

const isVert = (array) =>  isHoriz(
    [...Array(array[0].length).keys()].map(
        index => array.map(
            row => row[index])));

const isRDiag = (array) => ![...Array(array[0].length*2).keys()].map(
                    el => el - array[0].length + 1).map(
                        index => array.map(
                            (e, i) => e[i-index]).filter(
                                el => el !== undefined)).map(
                                    el => el.some(
                                        e => e !== el[0])).map(
                                            el => !el).some(
                                                e => e === false);
const isLDiag = (array) => 
{   
    [...Array(array.length / 2 - array.length % 2).keys()].map(
        i => [array[i], array[array.length - i - 1]] = [array[array.length - i - 1], array[i]] );
    return isRDiag(array);
}

const isWristband = (array) => [isHoriz(array), isVert(array), isRDiag(array), isLDiag(array)].some(el => el === true);