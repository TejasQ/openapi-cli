// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`E2E lint operation-security-scheme-basic-error 1`] = `

validating /openapi.yaml...
[1] openapi.yaml:5:3 at #/securityDefinitions/basicAuth/securityScheme

type \`basic\` does not support additional properties.

3 | basePath: "/v2"
4 | securityDefinitions:
5 |   basicAuth:
  |   ^^^^^^^^^
6 |     type: basic
7 |     name: Authorization

Error was generated by the operation-security-defined rule.


/openapi.yaml: validated in <test>ms

❌ Validation failed with 1 error.
run \`openapi lint --generate-ignore-file\` to add all problems to the ignore file.


`;