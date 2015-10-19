async function returnStringSync() {
  return await 'info-sync';
}

async function returnStringAsync() {
  return await Promise.resolve('info-async');
}

returnStringSync().then((info) => console.log(info));
returnStringAsync().then((info) => console.log(info));
