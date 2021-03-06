import {FtpSrv, FileSystem} from 'ftp-srv';

export class MyFileSystem extends FileSystem {
	constructor() {super(...arguments);}
	currentDirectory() {}
	get(fileName) {}
	list(path = '.') {}
	chdir(path = '.') {}
	write(fileName, {append = false, start = undefined} = {}) {}
	read(fileName, {start = undefined} = {}) {}
	delete(path) {}
	mkdir(path) {}
	rename(from, to) {}
	chmod(path, mode) {}
}

