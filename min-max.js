function minMax(a, b, c) {

    let nums = [a, b, c];

    let getValue = Math.min.apply(Math, nums)
    // Math.max.apply(Math, nums)
    console.log(getValue);
}

minMax(5,4,3)