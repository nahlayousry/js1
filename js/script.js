

var elem=[`<p>“Be yourself; everyone else is already taken.”</p>
<p>― Oscar Wilde</p>` ,
`<p>“So many books, so little time.”</p>
 <p>― Frank Zappa</p>` ,
`<p>You only live once, but if you do it right, once is enough.</p>
<p>― Mae West</p>` ,
`<p>“In three words I can sum up everything I've learned about life: it goes on.”</p>
<p>― Robert Frost</p>` 

];

function addcard(){
    document.getElementById("ser").innerHTML=elem[Math.floor(Math.random()*elem.length) ]
}



