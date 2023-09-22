TESTS = test/*.js
REPORTER = spec
test: clean
	@npm install
	@./node_modules/mocha/bin/mocha  $(TESTS) --reporter spec

clean:

.PHONY: test
