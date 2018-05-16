let pattern = /^(.)\1{1,}/;
function super_reduced_string(s){
    let i = 0;
    let s_temp = "";
    
    while(s.length > 0)
    {
        let rep = s.match(pattern);
        if(rep)
            if(rep[0].length % 2 == 0)
            {
                s = s.substring(rep[0].length);
            }
            else
            {
                s_temp = s_temp + s[0];
                s = s.substring(rep[0].length);
            }
        else
        {
            s_temp = s_temp + s[0];
            s = s.substring(1);
        }
        i++;
    }
    if(s_temp.length == 0)
        s_temp = "Empty String";
    return s_temp;
}
super_reduced_string("aaabccddd");