// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`E2E lint enforcements-casing-camel-case-error 1`] = `

validating /openapi.yaml...
[1] openapi.yaml:19:7 at #/paths/~1pet~1findByStatus/get/operationId

Operation id sould be camelCase

17 | /pet/findByStatus:
18 |   get:
19 |     operationId: exampleId
   |     ^^^^^^^^^^^
20 |     summary: summary example
21 |     tags:

Error was generated by the enforcements rule.


/openapi.yaml: validated in <test>ms

❌ Validation failed with 1 error.
run \`openapi lint --generate-ignore-file\` to add all problems to the ignore file.


`;
