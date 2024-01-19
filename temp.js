const { readFile, writeFile } = require('fs')

const fileSystem = (path, method, content) => {
  return new Promise((resolve, reject) => {
    if (method === 'read') {
      readFile(path, 'utf8', (err, data) => {
        if (err) reject(err)
        else {
          resolve(data)
        }
      })
    } else if (method === 'write') {
      writeFile(path, content, (err) => {
        if (err) reject(err)
        else {
          resolve('File written successfully')
        }
      })
    } else {
      reject('Method not supported')
    }
  })
}

const start = async (path, method, content) => {
  try {
    const data = await fileSystem(path, method, content)
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}

// ;(async () => {
//   await start('./content/first.txt', 'read', '')

//   await start('./content/first.txt', 'write', 'Testing Write')
// })()

console.log('random')
start('./content/first.txt', 'read', '')
console.log('random2')
start('./content/first.txt', 'write', 'Testing Write')

// start('./content/first.txt', 'read', '')
