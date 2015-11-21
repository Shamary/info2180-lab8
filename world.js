var size=0;


window.onload=function()
{
    var look_b= document.getElementById("lookup");
    var country=document.getElementById("term").value;
    
    var all=document.getElementById("all");
    var size=0;
    
    
    look_b.onmousedown= function()
    {
        //alert("work in progress");
        if(isin(country)&&all.checked)
        {
            new Ajax.Request("world.php?all=true",{
                method:"get",onSuccess: success 
            });
        }
        else
        {
            new Ajax.Request("world.php?lookup="+country,{
            method:"get",onSuccess: success 
            });
        }
    }
}

var success=function(res)
{
    size=res.responseText;
    alert(res.responseText);
};


var isin=function(n)
{
    var r=false;
    
    var res=new Ajax.Request("world.php?lookup= "+n,{
            method:"get",onSuccess: r= true 
        });
        
    return r;
}