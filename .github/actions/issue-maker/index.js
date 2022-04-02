const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  try {
    const issueTitle = core.getInput("issue-title");
    const jokeBody = core.getInput("joke");
    const token = core.getInput("repo-token");
    console.log("token: " + token);

    const octokit = github.getOctokit(token);
    console.log("github: " + github);
    console.log("octokit: " + octokit);

    const newIssue = await octokit.issues.create({
      repo: github.context.repo.repo,
      owner: github.context.repo.owner,
      title: issueTitle,
      body: jokeBody,
    });
  } catch (err) {
    core.setFailed(err.message);
  }
}

run();
