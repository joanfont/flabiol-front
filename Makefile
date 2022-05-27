.PHONY: build-prod

build-prod:
	docker build -t joanfont/grall-front -f Dockerfile.prod .

push-prod:
	docker push joanfont/grall-front
