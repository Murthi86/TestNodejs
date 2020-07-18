let chunkstring = "0+612,612+768,1380+768";
let chunks = chunkstring.split(",")
console.log(chunks);

  let [offset, length] = chunks[0].split('+');
  console.log(offset);
  console.log(length);

  
