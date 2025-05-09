const semver = require('semver');
const requiredVersion = '>=16.20.2';
const currentNodeVersion = process.version;

if (!semver.satisfies(currentNodeVersion, requiredVersion)) {
	console.error(
		`\x1b[31m错误：需要 Node.js ${requiredVersion}，当前版本 ${currentNodeVersion}\x1b[0m`
	);
	process.exit(1);
} else {
	console.log('OK!');
}
