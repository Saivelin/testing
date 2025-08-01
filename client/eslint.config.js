import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'
import { FlatCompat } from '@eslint/eslintrc'
import unusedImports from 'eslint-plugin-unused-imports'
import boundaries from 'eslint-plugin-boundaries'

import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const compat = new FlatCompat({
    baseDirectory: __dirname
})

const eslintConfig = [
    ...compat.extends('plugin:react/recommended'),
    ...compat.extends('plugin:@typescript-eslint/recommended'),
    ...compat.extends('plugin:import/recommended'),
    ...compat.extends('plugin:import/typescript'),
    ...compat.extends('plugin:prettier/recommended'),
    {
        plugins: {
            'unused-imports': unusedImports
        }
    },
    {
        plugins: {
            boundaries
        }
    },
    {
        settings: {
            react: { version: 'detect' },
            'boundaries/elements': ['shared', 'entities', 'features', 'widgets', 'pages', 'app']
        },
        rules: {
            'prettier/prettier': 'off',

            // React
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'react/display-name': 'off',

            'import/order': 'off',

            // TypeScript
            '@typescript-eslint/ban-ts-comment': 'off',
            '@typescript-eslint/no-unused-vars': 'error',

            'import/no-unresolved': 'off',

            // Unused imports
            'unused-imports/no-unused-imports': 'error'
        }
    },
    {
        files: ['**/*.ts', '**/*.tsx'],
        rules: {
            'boundaries/element-types': [
                'error',
                {
                    default: 'disallow',
                    rules: [
                        {
                            from: 'entities',
                            allow: ['shared', 'entities', 'features']
                        },
                        {
                            from: 'features',
                            allow: ['shared', 'entities', 'features']
                        },
                        {
                            from: 'widgets',
                            allow: ['shared', 'entities', 'features']
                        },
                        {
                            from: 'screens',
                            allow: ['shared', 'entities', 'features', 'widgets']
                        },
                        {
                            from: 'application',
                            allow: ['shared', 'entities', 'features', 'widgets', 'screens']
                        },
                        {
                            from: 'app',
                            allow: ['shared', 'entities', 'features', 'widgets', 'screens']
                        }
                    ]
                }
            ],
            'boundaries/no-private': 'error'
        },
        settings: {
            boundaries: {
                defaultElementType: 'unknown',
                types: [
                    { type: 'shared', pattern: 'src/shared' },
                    { type: 'app', pattern: 'src/app' },
                    { type: 'entities', pattern: 'src/entities' },
                    { type: 'features', pattern: 'src/features' },
                    { type: 'widgets', pattern: 'src/widgets' },
                    { type: 'screens', pattern: 'src/screens' },
                    { type: 'application', pattern: 'src/application' }
                ]
            }
        }
    }
]

export default tseslint.config([globalIgnores(['dist']), ...eslintConfig])
