function validate()
{
    let Name=document.forms["myForm"]["Name"].value;
    let age=parseInt(document.forms["myForm"]["age"].value);
    if(Name.length==0)
    {
        alert("Please Enter Name");
        document.forms["myForm"]["Name"].focus();
    }
    else
    {
        for(let i=0;i<Name.length;i++)
        {
            let ch=Name.charCodeAt(i);
            if(!((ch>=65 && ch<=90)||(ch>=97 && ch<=122)))
            {
                alert("Name Should be String");
                document.forms["myForm"]["Name"].focus();
            }
        }
    }
if((age<18))
{
    alert("enter Valid Age");
    document.forms["myForm"]["age"].focus();
}
}