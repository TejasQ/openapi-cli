// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`E2E lint assertions-all-rules-on-keys-error 1`] = `

validating /openapi.yaml...
[1] openapi.yaml:18:5 at #/paths/~1pet~1findByStatus/get

Operation example error

16 | paths:
17 |   /pet/findByStatus:
18 |     get:
   |     ^^^
19 |       operationId: example
20 |       summary: summary example

Error was generated by the assertions rule.


[2] openapi.yaml:18:5 at #/paths/~1pet~1findByStatus/get

Operation example error

16 | paths:
17 |   /pet/findByStatus:
18 |     get:
   |     ^^^
19 |       operationId: example
20 |       summary: summary example

Error was generated by the assertions rule.


[3] openapi.yaml:25:7 at #/paths/~1pet~1findByStatus/get/responses

ResponsesMap example error

23 |   - baz
24 |   - bar
25 | responses:
   | ^^^^^^^^^
26 |   '200':
27 |     description: example description

Error was generated by the assertions rule.


[4] openapi.yaml:25:7 at #/paths/~1pet~1findByStatus/get/responses

ResponsesMap example error

23 |   - baz
24 |   - bar
25 | responses:
   | ^^^^^^^^^
26 |   '200':
27 |     description: example description

Error was generated by the assertions rule.


[5] openapi.yaml:25:7 at #/paths/~1pet~1findByStatus/get/responses

ResponsesMap example error

23 |   - baz
24 |   - bar
25 | responses:
   | ^^^^^^^^^
26 |   '200':
27 |     description: example description

Error was generated by the assertions rule.


[6] openapi.yaml:25:7 at #/paths/~1pet~1findByStatus/get/responses

ResponsesMap example error

23 |   - baz
24 |   - bar
25 | responses:
   | ^^^^^^^^^
26 |   '200':
27 |     description: example description

Error was generated by the assertions rule.


[7] openapi.yaml:25:7 at #/paths/~1pet~1findByStatus/get/responses

ResponsesMap example error

23 |   - baz
24 |   - bar
25 | responses:
   | ^^^^^^^^^
26 |   '200':
27 |     description: example description

Error was generated by the assertions rule.


[8] openapi.yaml:25:7 at #/paths/~1pet~1findByStatus/get/responses

ResponsesMap example error

23 |   - baz
24 |   - bar
25 | responses:
   | ^^^^^^^^^
26 |   '200':
27 |     description: example description

Error was generated by the assertions rule.


/openapi.yaml: validated in <test>ms

❌ Validation failed with 8 errors.
run \`openapi lint --generate-ignore-file\` to add all problems to the ignore file.


`;