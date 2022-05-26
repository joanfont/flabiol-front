.PHONY: build-prod

build-prod:
	docker build -t joanfont/sonador-front -f Dockerfile.prod .

push-prod:
	docker push joanfont/sonador-front
