process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    if(data[0].toString() === "q")
    {
        input_stdin_array = input_stdin.split("\n");
        main();
        return;
    }
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

let map = {};

function cdf(a)
{
    a.unshift(0);
    for(var i = 1; i < a.length; i++)
    {
        a[i] = a[i]+a[i-1];
        map[a[i]] = (map[a[i]] != null)? map[a[i]]+1:1;
    }
    a.reverse();
    console.log(a);
    console.log(map);
}


function main() {

    var n1_temp = readLine().split(' ');
    var n1 = parseInt(n1_temp[0]);
    var n2 = parseInt(n1_temp[1]);
    var n3 = parseInt(n1_temp[2]);
    h1 = readLine().split(' ');
    h1 = h1.map(Number).reverse();
    h2 = readLine().split(' ');
    h2 = h2.map(Number).reverse();
    h3 = readLine().split(' ');
    h3 = h3.map(Number).reverse();
    cdf(h1);
    cdf(h2);
    cdf(h3);
    let max = 0;
    let k = Object.keys(map);
    for(let i = k.length - 1; i >= 0; i--)
    {
        if(map[k[i]] == 3)
        {
            max = parseInt(k[i]);
            break;
        }
    }
    console.log(max);
}
