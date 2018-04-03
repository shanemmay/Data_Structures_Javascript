

//*************NODE*************//
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
//*************LINK LIST************//
function create_link_list()
{
  var link_list = {};
  link_list.head = create_node();

  link_list.insert = function(info)
  {
    var node = create_node();
    node.info = info;
    
    if(link_list.head.info == null && link_list.head.next == null)
    {
      link_list.head = node;
    }
    else
    {
      node.next = link_list.head;
      link_list.head = node;
    }
  };
  link_list.to_string = function()
  {
    var temp = link_list.head;
    var output = "";
    while( temp != null )
    {
      output += temp.info + " " + temp.next + "\n";
      temp = temp.next;
    }
    return output;
  };
  
  link_list.delete = function()
  {
    var temp = link_list.head;
    link_list.head = link_list.head.next;
    delete temp;
  }
  return link_list;
}


//creating link_list
var link_list = create_link_list();
for(var i = 1; i <= 10; i++)
{
  link_list.insert(i);
}
console.log(link_list.to_string());
for(var i = 1; i <= 10; i++)
{
  link_list.delete();
}
console.log(link_list.to_string());


