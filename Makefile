.PHONY : install test clean

NPM=npm

build:
	${NPM} run build

install:
	${NPM} install

test:
	${NPM} test

clean:
	${NPM} run-script clean
