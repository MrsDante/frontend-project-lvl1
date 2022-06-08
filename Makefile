install:
	npm ci

brain-games:
        node bin/brain-games.js

brain-even: #Запуск игры с четностью
	node bin/brain-even.js		

brain-calc:
    node bin/brain-calc.js

publish: 
        npm publish --dry-run

lint: # запускать npx eslint .
	npx eslint .

fix: # запускать исправление ошибок
	npx eslint --fix .