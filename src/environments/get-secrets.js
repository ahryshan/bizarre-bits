const fs = require('fs')

const targetPath = 'src/environments/secrets.ts'

const secretsFile = `import {ISecrets} from './secrets.sample'

export const secretsFactory = (): ISecrets => {
  return ({
    API_TOKEN_GITHUB: '${process.env['ACCESS_TOKEN_GITHUB']}'
  })
}`

fs.writeFile(targetPath, secretsFile, 'utf8', (err) => {
    if (err) {
        return console.log(err);
    }
});