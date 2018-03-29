function create_node()
{
  var node = {};
  node.info = null, node.next = null;
  node.to_string = function()
  {
    return this.info + " " + this.next;
  }
  return node;
}

function create_stack()
{
  var stack = {};
  stack.top = create_node();
  stack.push = function(info)
  {
    var node = create_node();
    node.info = info;
    //console.log(node);
    //console.log(node.info);
    if( stack.top.info == null )
    {
      stack.top = node;
    }
    else
    {
      node.next = stack.top;
      stack.top = node;
    }
  };
  stack.pop = function()
  {
    var delete_me = stack.top;
    var return_me = stack.top.info;
    //removing top node
    stack.top = stack.top.next;
    delete delete_me;
    return return_me;
  };
  stack.to_string = function ()
  {
    var temp = stack.top;
    var output = "";
    while(temp != null)
    {
      output += temp.to_string() + "\n";
      temp = temp.next
    }
    return output;
  };
  return stack;
}

//populating the stack
var stack = create_stack();
for(var i = 1; i <= 10; i++)
{
  stack.push(i);
}
console.log(stack.to_string());

//emptying the stack
var arr = [];
for(var i = 1; i <= 10; i++)
{
  arr.push(stack.pop(i));
}
console.log(stack.to_string());
console.log(arr);
