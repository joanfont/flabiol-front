.PHONY: build-prod

build-prod:
	docker build -t joanfont/mobo-front -f Dockerfile.prod .

push-prod:
	docker push joanfont/mobo-front
