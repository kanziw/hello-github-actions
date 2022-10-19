import * as core from '@actions/core'
import { exec } from '@actions/exec'
import * as github from '@actions/github'

async function run() {
  const targetDir = core.getInput('targetDir')
  console.log(`targetDir -> ${targetDir}!`)
  core.setOutput('message', 'Hello World!')
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`)

  await exec('ls', ['-al', targetDir])
}

run().catch(err => core.setFailed((err as Error).message))
