function encryptThis(text) {

    let arr = text.split(' ')
    let result = []
    // arr = arr.charCodeAt(0)

    // for (let i = 0; i < arr.length; i++) {
    //     if (i === 0) {
    //         result.push(arr[i].charCodeAt(0))
    //     } else if (arr[i] === ' ') {
    //         result.push(arr[i], arr[i + 1].charCodeAt(0))
    //     } else {
    //         result.push(arr[i])
    //     }
    // }
    arr.map((w) => {
        let arr2 = w.split('')
        console.log(arr2);

        result.push(w.charCodeAt(0), (w[1] = w[w.length - 1]), (w[w.length - 1] = w[1]))
        // console.log(w)
    })
    // return result


}



console.log(encryptThis("A"));
// "65"
console.log(encryptThis("The more he saw the less he spoke"));
// 84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp