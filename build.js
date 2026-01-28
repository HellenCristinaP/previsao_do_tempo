const ClosureCompiler = require('google-closure-compiler').compiler;

const compilerConfig = {
  js: ['./public/script.js'], // Verifique se os caminhos estão corretos
  compilation_level: 'SIMPLE',
  js_output_file: 'output.js',
  debug: true
};

const closureCompiler = new ClosureCompiler(compilerConfig);

closureCompiler.run((exitCode, stdOut, stdErr) => {
  if (exitCode === 0) {
    console.log('Sucesso! Arquivo output.js gerado.');
    console.log(stdOut);
  } else {
    console.error('Erro na compilação:');
    console.error(stdErr);
  }
});