const powerOfNumber = (a,b) => {
    var pow = 1;
    for(var i=0;i<b; i++) {
        pow=pow*a;
    }
    return pow;
}