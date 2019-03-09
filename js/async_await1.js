console.log('start');

function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(()=> {
      resolve(x);
    }, 2000);
  })
}

async function add1(x) {
  const a = await resolveAfter2Seconds(20);
  console.log(a);
  const b = await resolveAfter2Seconds(30);
  console.log(b);
  return x + a + b;
}

console.log(add1(10).then((value) => console.log('add1:', value)));

console.log('end');