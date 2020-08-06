
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("running travis test...");
    await sleep(3000);
  }
}

main();
