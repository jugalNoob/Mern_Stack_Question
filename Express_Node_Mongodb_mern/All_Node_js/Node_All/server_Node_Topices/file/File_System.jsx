✅ What this file does

Creates a folder data/ (if missing)

Writes a file (hello.txt) asynchronously

Reads the file back

Appends text to the file

Lists files in the directory

Copies the file to copy-hello.txt

Deletes the copied file (cleanup)

Uses proper try/catch error handling and async functions


// fsAsyncExample.js
const fs = require('fs').promises;
const path = require('path');

const DATA_DIR = path.join(__dirname, 'data');
const FILE_PATH = path.join(DATA_DIR, 'hello.txt');
const COPY_PATH = path.join(DATA_DIR, 'copy-hello.txt');

async function ensureDataDir() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    console.log('✅ data directory ready:', DATA_DIR);
  } catch (err) {
    console.error('mkdir error:', err);
    throw err;
  }
}

async function writeFileAsync(filePath, content) {
  try {
    await fs.writeFile(filePath, content, 'utf8');
    console.log('✅ wrote file:', filePath);
  } catch (err) {
    console.error('writeFile error:', err);
    throw err;
  }
}

async function readFileAsync(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    console.log('📖 file contents:', data);
    return data;
  } catch (err) {
    console.error('readFile error:', err);
    throw err;
  }
}

async function appendFileAsync(filePath, extra) {
  try {
    await fs.appendFile(filePath, extra, 'utf8');
    console.log('✅ appended to file:', filePath);
  } catch (err) {
    console.error('appendFile error:', err);
    throw err;
  }
}

async function listDirAsync(dirPath) {
  try {
    const files = await fs.readdir(dirPath);
    console.log('📂 directory list:', files);
    return files;
  } catch (err) {
    console.error('readdir error:', err);
    throw err;
  }
}

async function copyFileAsync(src, dest) {
  try {
    await fs.copyFile(src, dest);
    console.log(`✅ copied ${src} → ${dest}`);
  } catch (err) {
    console.error('copyFile error:', err);
    throw err;
  }
}

async function deleteFileAsync(filePath) {
  try {
    await fs.unlink(filePath);
    console.log('🗑️ deleted file:', filePath);
  } catch (err) {
    // if file doesn't exist, ignore
    if (err.code === 'ENOENT') {
      console.log('⚠️ file not found (skip delete):', filePath);
      return;
    }
    console.error('unlink error:', err);
    throw err;
  }
}

(async function main() {
  try {
    await ensureDataDir();

    // 1) Write a new file
    await writeFileAsync(FILE_PATH, 'Hello Jugal!\nThis file is created with fs.promises.\n');

    // 2) Read it
    await readFileAsync(FILE_PATH);

    // 3) Append some lines
    await appendFileAsync(FILE_PATH, 'Appended line 1.\nAppended line 2.\n');

    // 4) Read again to verify append
    await readFileAsync(FILE_PATH);

    // 5) List directory
    await listDirAsync(DATA_DIR);

    // 6) Copy file
    await copyFileAsync(FILE_PATH, COPY_PATH);

    // 7) List directory again (see copy)
    await listDirAsync(DATA_DIR);

    // 8) Delete the copied file (cleanup)
    await deleteFileAsync(COPY_PATH);

    // 9) Final directory list
    await listDirAsync(DATA_DIR);

    console.log('🎉 All file ops completed successfully.');
  } catch (err) {
    console.error('Fatal error in file operations:', err);
    process.exit(1);
  }
})();
