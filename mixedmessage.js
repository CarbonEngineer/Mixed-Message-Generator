function printMessage (){
    let ctr = Math.floor(Math.random() * 10);

    switch (ctr){

        case 0:
        document.getElementById('output').innerHTML = "Why shouldn't you trust stairs? They're always up to something.";
        break;

         case 1:
        document.getElementById('output').innerHTML = "I had a taser once. It was stunning.";
        break;
             
        case 2:
        document.getElementById('output').innerHTML = "Know any good rope jokes? I'm a frayed knot.";
        break;
                 
        case 3:
        document.getElementById('output').innerHTML = "Wat did one plant say to the other? 'Girl,you really got me growing.'";
         break;

         case 4:
        document.getElementById('output').innerHTML = "What's the problem with scientists? Periodically they're wrong.";
         break;

         case 5:
        document.getElementById('output').innerHTML = "Why do coffee cups avoid the city? They're afraid to get mugged";
         break;

         case 6:
        document.getElementById('output').innerHTML = "Why shouldn't you argue with a dinosaur? You'll get jurasskicked.";
         break;

         case 7:
        document.getElementById('output').innerHTML = "I tried to take a photo of a wheat field. It turned out grainy.";
         break;

         case 8:
        document.getElementById('output').innerHTML = "I'm afraid of speed bumps, but I'm slowly getting over it.";
         break;

         case 9:
        document.getElementById('output').innerHTML = "Why should you wear glasses when doing math? They improve division";
         break;

         case 10:
        document.getElementById('output').innerHTML = "I'm happy Ford didn't invent the airplane. It wouldn't have been Wright.";
         break;
        
    }
    
}