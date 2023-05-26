const fs = require('fs');
const path = require('path');
const dir = "src/environments";
const file = "environment.ts";
const content = `${process.env.API_KEY}`;

fs.access(dir, fs.constants.F_OK, (err) => {
    if (err) {
        // Directory doesn't exist
        console.log("Directory doesn't exist.");
        fs.mkdir(dir, { recursive: true }, (err) => {
            if (err) throw err;
        });
    }
    // Write file
    try {
        fs.writeFileSync(dir + "/" + file, content);
        console.log("File written successfully\n");
        if (fs.existsSync(dir + "/" + file)) {
            console.log("File exists\n", path.resolve(dir + "/" + file));
            const str = fs.readFileSync(dir + "/" + file).toString();
            console.log("File content: ", str);
        }
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
});