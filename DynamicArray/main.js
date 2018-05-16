function processData(input) {
    let lines = input.split("\n");
    let info = lines[0].split(" ").map(Number);
    let s = [];
    for(let i = 0; i < info[0]; i++)
        s.push(new Array());
    let lastAnswer = 0;
    for(let i = 1; i < info[1]+1; i++)
    {
        let query = lines[i].split(" ").map(Number);
        if(query[0] == 1)
        {
            let _s = s[(query[1] ^ lastAnswer) % info[0]]
            if(!_s)
                _s = new Array();
            _s.push(query[2]);
        }else if(query[0] == 2)
        {
            let _s = s[(query[1] ^ lastAnswer) % info[0]]
            if(!_s)
                _s = new Array();
            lastAnswer = _s[(query[2]%_s.length)];
            console.log(lastAnswer);
            
        }
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";

process.stdin.on("data", function (input) {
    if(input[0].toString() === "q")
    {
        processData(_input);
        return;
    }
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});