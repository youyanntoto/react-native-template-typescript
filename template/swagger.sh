#!/usr/bin/env bash
# swagger.yamlのtype: objectとexample: xxxを削除
sed -i '' 's|          type: object||g; s|example:.*||g' src/apis/swagger.yaml

npx openapi-generator generate -i src/apis/swagger.yaml -o src/apis -g typescript-axios --additional-properties=useSingleRequestParameter=true

# base.tsのBASE_PATHを置換
sed -i '' 's|export const BASE_PATH = "http://localhost/api/v1".replace(/\\/+$/, "");|// @ts-ignore\nimport {API_BASE_PATH} from '\''@env'\'';\n\nlet basePath = '\'''\''\nif (API_BASE_PATH) {\n    basePath = API_BASE_PATH\n}\nexport const BASE_PATH = basePath.replace(/\\/+$/, "");|' src/apis/base.ts
