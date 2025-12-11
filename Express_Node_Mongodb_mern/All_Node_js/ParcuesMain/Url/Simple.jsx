
Class: URL
new URL(input[, base])
url.hash
url.host
url.hostname
url.href
url.origin
url.password
url.pathname
url.port
url.protocol


const myUrl=new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash')
console.log(myUrl.href)
console.log(myUrl.protocol)
console.log(myUrl.hostname)
console.log(myUrl.origin)
console.log(myUrl.pathname)
console.log(myUrl.host)
console.log(myUrl.hash)
console.log(myUrl.port)


//// Create Url ------------------>>
const myURL = new URL('https://example.org');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh'; 

console.log(myURL.pathname)


///// ----->Get Mutlti user 


const myURLs = [
  new URL('https://www.example.com'),
  new URL('https://test.example.org'),
];
console.log(JSON.stringify(myURLs));

