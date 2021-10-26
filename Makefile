serve:
	python3 -m http.server

deploy:
	#git commit -a && \
	#git push && \
	ssh dreamhost \
		'cd calaldees.dreamhosters.com/responsive_portfolio && git pull'