function recursiveFibonacci(n)
{
    if(n == 0)
        return 0;
    if(n == 1)
        return 1;
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2);
}

let set = [];
function memoizedFibonacci(n)
{
    if(n == 0)
        return 0;
    if(n == 1)
        return 1;
    else
    {
        if(n in set)
        {
            return set[n];
        }else{
            set[n] = memoizedFibonacci(n-1) + memoizedFibonacci(n-2);
            return set[n];
        }
    }
}

console.log(memoizedFibonacci(55));