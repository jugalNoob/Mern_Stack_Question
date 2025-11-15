const folder = {
  name: "root",
  files: [
    "file1.txt",
    { name: "subfolder", files: ["file2.txt", "file3.txt"] }
  ]
};

function printFolder(f) {
  if (typeof f === "string") {
    console.log("📄", f);
  } else {
    console.log("📁", f.name);
    f.files.forEach(printFolder); // recursion
  }
}

printFolder(folder);
