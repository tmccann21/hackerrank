let maxQ = [];
let size = 0;

let stack = [];

function heapifyUp(ind)
{
    let parent = Math.floor((ind-1)/2);
    if(maxQ[parent] < maxQ[ind])
    {
        let temp = maxQ[parent];
        maxQ[parent] = maxQ[ind];
        maxQ[ind] = temp;
        if(parent != 0)
            heapifyUp(parent);
    }
}

function insert(i)
{
    maxQ[size] = i;
    heapifyUp(size);
    size++;
}

function heapifyDown(ind)
{
    let lChild = ind*2+1;
    let rChild = ind*2+2;
    let gci = -1;
    if(rChild < size)
        if(maxQ[lChild] < maxQ[rChild])
            gci = rChild;
        else
            gci = lChild;
    else
        if(lChild < size)
            gci = lChild;
        else
            return;
    if(gci == -1)
        return;
    if(maxQ[gci] > maxQ[ind])
    {
        temp = maxQ[gci];
        maxQ[gci] = maxQ[ind];
        maxQ[ind] = temp;
        heapifyDown(gci);
    }
}

function maxQRemove(ind)
{
    let rmc = size-1;
    if(ind != rmc)
    {
        maxQ[ind] = maxQ[rmc];
        maxQ[rmc] = -1;
    }
    size--;
    if(size > 0)
        heapifyDown(ind);
}

function getIndex(t)
{
    for(let i = 0; i < size; i++)
    {
        if(maxQ[i] == t)
        {
            return i;
        }
    }
}

function processData(input) {
    let arr = input.toString().split('\n')
    //arr.slice(1);
    for(i in arr)
    {
        if(arr[i].split(' ')[0] == '1')
        {
            let q = parseInt(arr[i].split(' ')[1]) 
            insert(q);
            stack.push(q);
        }
        else if(arr[i][0] == '2')
        {
            if(stack.length == 0)
                continue;
            let i = getIndex(stack.pop());
            maxQRemove(i);
        }
        else if(arr[i][0] == '3')
            if(stack.length > 0)
                console.log(maxQ[0]);
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
