function vowelCount(str){
    const vowels = {
        a:0,e:0,i:0,o:0,u:0 
    }
    let vowelHits = 0 
    for (const char of str){
        if (char in vowels) {
            console.log("hit!")
            vowelHits++
            vowels[char]++}
    } 
    console.log("str.length:",str.length)
    console.log("vowel hits:",vowelHits)
    return vowels
}
