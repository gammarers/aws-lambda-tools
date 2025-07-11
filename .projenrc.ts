import { cdk, javascript } from 'projen';
const project = new cdk.JsiiProject({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  defaultReleaseBranch: 'main',
  typescriptVersion: '5.8.x',
  jsiiVersion: '5.8.x',
  name: '@gammarers/aws-lambda-tools',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/gammarers/aws-lambda-tools.git',
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  releaseToNpm: false,
  npmAccess: javascript.NpmAccess.PUBLIC,
  minNodeVersion: '20.0.0',
  workflowNodeVersion: '22.x',
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      // schedule: javascript.UpgradeDependenciesSchedule.expressions(['2 16 * * 3']),
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['yicr'],
  },
});
project.synth();