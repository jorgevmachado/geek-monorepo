import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { glob } from 'glob';
import path from 'path';
import postcss from 'rollup-plugin-postcss';
import sass from 'rollup-plugin-sass';

const plugins = [
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
    terser(),
    postcss({
        extensions: ['.css', '.scss'],
        extract: true,
        minimize: true,
        use: [
            ['sass', {
                includePaths: [
                    'node_modules',
                    'src/styles',
                    '@geek/tokens/dist/geek/css/_variables.css',
                    '@geek/tokens/dist/geek/scss/_variables.scss',
                ]
            }]
        ]
    }),
    sass({
        insert: true,
        include: ['**/*.scss', '**/*.css'],
        options: {
            includePaths: [
                'node_modules',
                'src/styles'
            ],
        }
    })
];

export default [
    {
        input: glob.sync('src/**/index.ts'),
        output: {
            dir: path.dirname('dist/index.js'),
            format: 'esm',
            sourcemap: true,
            preserveModules: true,
            preserveModulesRoot: 'src',
            silenceDeprecations: ['legacy-js-api'],
        },
        plugins,
        external: ['react', 'react-dom', '@geek/services', '@geek/business']
    }
];