function Node(info,next)
{
  var node = {};
  node.info = info;
  node.next = next;
  return node;
}
function Queue()
{
  var q = {};
  q.first = null;
  q.last = null;
  q.enque = function (info)
  {
    //creating node
    var node = Node(info,null);
    
    //seeing if this is the first node
    if(q.first == null)
    {
      q.first = node;
      q.last = node;
      return;
    }
    
    q.last.next = node;
    q.last = node;
  };
  q.deque = function()
  {
  	if(q.is_empty())
  	{
  		console.log("queue empty");
  		return;
  	}
    var save =  q.first.info;
    var temp = q.first;
    if(q.first == q.last)
    {
      q.first = null;
      q.last = null;
    }
    else
    {
      q.first =  q.first.next;
      temp.next =  q.first.next;
    }
    
    delete temp;
    return save;
  };
  q.to_string = function()
  {
    var temp = q.first;
    while(temp != null)
    {
      console.log(temp);
      temp = temp.next;
    }
  };
  q.is_empty = function ()
  {
  	return q.first == null;
  };
  return q;
}

 var q = Queue();
 
 for( var i = 0; i < 10; i++ )
 {
   q.enque(i);
 }
    
q.to_string();


for( var i = 0; i < 10; i++ )
{
  console.log(q.deque());
}

q.to_string();
