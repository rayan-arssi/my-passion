import { createServer } from 'vite';
import React from 'react';
import { renderToString } from 'react-dom/server';

const server = await createServer({
  root: 'C:/Users/rayan/OneDrive - Erasmushogeschool Brussel/Bureaublad/my-passion',
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
});

try {
  const { default: App } = await server.ssrLoadModule('/src/App.jsx');
  const html = renderToString(React.createElement(App));
  const checks = [
    ['RAYAN ARSSI', html.includes('RAYAN ARSSI')],
    ['I DESIGN IT.', html.includes('I DESIGN IT.')],
    ['SELECTED WORK', html.includes('SELECTED WORK')],
    ['POSTER WALL', html.includes('POSTER WALL')],
    ['WEBSITE PROJECTS', html.includes('WEBSITE PROJECTS')],
    ['WHAT I DO', html.includes('WHAT I DO')],
    ['HEY, I\'M RAYAN. (split words)', html.includes("HEY,") && html.includes("RAYAN.")],
    ['MY TOOLBOX', html.includes('MY TOOLBOX')],
    ['GOOD DESIGN', html.includes('GOOD DESIGN')],
    ['LET\'S MAKE (split words)', html.includes("LET&#x27;S") && html.includes("SOMETHING")],
    ['r.arssi@outlook.com', html.includes('r.arssi@outlook.com')],
  ];
  let pass = 0;
  for (const [name, ok] of checks) {
    console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}`);
    if (ok) pass++;
  }
  console.log(`\n${pass}/${checks.length} checks passed. HTML length: ${html.length}`);
} catch (err) {
  console.error('RENDER ERROR:', err);
  process.exitCode = 1;
} finally {
  await server.close();
}
